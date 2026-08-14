from pathlib import Path
import json

import pandas as pd
import streamlit as st

BASE = Path(__file__).parent
DATA = BASE / "data"

st.set_page_config(page_title="PBSV | Sistema Territorial", page_icon="🌋", layout="wide", initial_sidebar_state="expanded")
st.markdown("""
<style>
:root{--green:#214f3e;--teal:#39716c;--gold:#c58b3c;--paper:#f7f5ef}.stApp{background:var(--paper)}
[data-testid="stSidebar"]{background:#173e32;color:white}[data-testid="stSidebar"] *{color:white}
h1,h2,h3{color:var(--green);font-family:Georgia,serif}.hero{background:#173e32;color:white;border-radius:18px;padding:28px 34px;margin-bottom:18px}
.hero h1{color:white;margin:0;font-size:2.35rem}.hero p{margin:.4rem 0 0;color:#dce7e1}
[data-testid="stMetric"]{background:white;border:1px solid #dde5df;border-radius:14px;padding:15px}
</style><div class="hero"><h1>Paisaje Biocultural Sierra Volcánica</h1>
<p>Sistema de información territorial · Tapalpa, Atemajac de Brizuela, Chiquilistlán y San Gabriel</p></div>
""", unsafe_allow_html=True)

@st.cache_data
def load_data():
    social = pd.DataFrame(json.loads((DATA / "indicadores_sociales_inegi_2020.json").read_text(encoding="utf-8")))
    agriculture = pd.read_csv(DATA / "siap_agricola_2020_2024.csv")
    features = json.loads((DATA / "localidades_inegi_2020.geojson").read_text(encoding="utf-8"))["features"]
    points = pd.DataFrame([{**f["properties"], "lon": f["geometry"]["coordinates"][0], "lat": f["geometry"]["coordinates"][1]} for f in features])
    return social, agriculture, points

social, agriculture, localities = load_data()
municipalities = social.municipio.tolist()
with st.sidebar:
    st.subheader("Filtros territoriales")
    selected = st.selectbox("Municipio", ["Todo el paisaje"] + municipalities)
    year = st.select_slider("Año agrícola", options=[2020, 2021, 2022, 2023, 2024], value=2024)
    st.markdown("---")
    st.caption("Cada indicador muestra su fuente y año. Las capas propias del PBSV fueron recuperadas del visor QGIS original.")

current_social = social if selected == "Todo el paisaje" else social[social.municipio == selected]
current_agri = agriculture[(agriculture.anio == year) & ((agriculture.municipio == selected) if selected != "Todo el paisaje" else True)]
current_localities = localities if selected == "Todo el paisaje" else localities[localities.municipio == selected]

tabs = st.tabs(["Panorama", "Visor territorial", "Población", "Servicios", "Producción", "Localidades", "Fuentes"])
with tabs[0]:
    total_agri = current_agri[current_agri.cultivo == "Total agrícola"]
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Población", f"{int(current_social.poblacion.sum()):,}", "INEGI 2020")
    c2.metric("Localidades", f"{len(current_localities):,}", "INEGI 2020")
    c3.metric("Superficie sembrada", f"{total_agri.superficie_sembrada_ha.sum():,.0f} ha", f"SIAP {year}")
    c4.metric("Valor agrícola", f"${total_agri.valor_produccion_miles_mxn.sum()*1000:,.0f}", f"SIAP {year}")
    st.subheader("Comparación municipal")
    compare = social.set_index("municipio")[["poblacion", "viviendas_habitadas"]]
    st.bar_chart(compare, color=["#214f3e", "#c58b3c"])
    st.caption("Fuente: INEGI, Censo de Población y Vivienda 2020, ITER.")

with tabs[1]:
    st.subheader("Mapa multicapa")
    st.write("Abre **Layers** para encender y apagar cartografía ambiental, hidrológica y de infraestructura.")
    st.iframe("/app/static/map/index.html", width="stretch", height=760)
    st.caption("Capas ambientales PBSV alojadas localmente; RNC, pozos y manantiales mediante WMS oficial de INEGI.")

with tabs[2]:
    st.subheader("Estructura demográfica y condiciones sociales")
    st.bar_chart(current_social.set_index("municipio")[["mujeres", "hombres"]], color=["#906d50", "#39716c"])
    st.subheader("Distribución por grandes grupos de edad (%)")
    st.bar_chart(current_social.set_index("municipio")[["porcentaje_0_14", "porcentaje_15_64", "porcentaje_65_mas"]], color=["#c58b3c", "#39716c", "#906d50"])
    cols = st.columns(4)
    cols[0].metric("Discapacidad", f"{int(current_social.poblacion_discapacidad.sum()):,}")
    cols[1].metric("Población indígena en hogares", f"{int(current_social.poblacion_indigena_hogares.sum()):,}")
    cols[2].metric("Población afromexicana", f"{int(current_social.poblacion_afromexicana.sum()):,}")
    cols[3].metric("Población ocupada", f"{int(current_social.poblacion_ocupada.sum()):,}")
    st.caption("Fuente: INEGI, Censo 2020. Conceptos conforme al ITER.")

with tabs[3]:
    st.subheader("Vivienda, servicios y conectividad")
    services = current_social.set_index("municipio")[["porcentaje_viviendas_electricidad", "porcentaje_viviendas_agua", "porcentaje_viviendas_drenaje", "porcentaje_viviendas_internet", "porcentaje_viviendas_celular", "porcentaje_viviendas_automovil"]]
    services.columns = ["Electricidad", "Agua entubada", "Drenaje", "Internet", "Celular", "Automóvil"]
    st.bar_chart(services, color=["#214f3e", "#39716c", "#68a394", "#c58b3c", "#906d50", "#6d7d75"])
    st.dataframe(services.style.format("{:.1f}%"), width="stretch")
    st.caption("Porcentaje respecto de viviendas particulares habitadas. Fuente: INEGI 2020.")

with tabs[4]:
    st.subheader("Producción agrícola")
    crops = current_agri[current_agri.cultivo != "Total agrícola"].copy()
    summary = crops.groupby("cultivo", as_index=False).agg(superficie_sembrada_ha=("superficie_sembrada_ha", "sum"), produccion_t=("produccion_t", "sum"), valor_produccion_miles_mxn=("valor_produccion_miles_mxn", "sum")).sort_values("valor_produccion_miles_mxn", ascending=False)
    st.bar_chart(summary.set_index("cultivo")["valor_produccion_miles_mxn"], color="#39716c")
    st.dataframe(crops, width="stretch", hide_index=True)
    st.download_button("Descargar tabla agrícola CSV", crops.to_csv(index=False).encode("utf-8-sig"), f"pbsv_agricultura_{year}.csv", "text/csv")
    st.caption("Fuente: SIAP, Anuario Estadístico de la Producción Agrícola.")

with tabs[5]:
    st.subheader("Sistema de localidades")
    st.map(current_localities, latitude="lat", longitude="lon", size="poblacion", color="#c58b3c", zoom=8)
    st.dataframe(current_localities[["clave", "municipio", "localidad", "poblacion", "altitud_m"]].sort_values("poblacion", ascending=False), width="stretch", hide_index=True)
    st.download_button("Descargar localidades CSV", current_localities.to_csv(index=False).encode("utf-8-sig"), "pbsv_localidades_inegi_2020.csv", "text/csv")

with tabs[6]:
    st.subheader("Trazabilidad y cobertura")
    catalog = pd.DataFrame([
        ["Límites municipales y polígono PBSV", "IIEG / PBSV", "Vector", "Integrada"],
        ["Formaciones forestales Serie VII", "INEGI / PBSV", "Vector", "Integrada"],
        ["Cambio de uso del suelo", "PBSV", "Vector", "Integrada"],
        ["Sitios prioritarios de restauración y biodiversidad", "PBSV", "Vector", "Integrada"],
        ["Corredores bioclimáticos", "PBSV", "Ráster", "Integrada"],
        ["Riesgo de incendios", "PBSV", "Ráster", "Integrada"],
        ["Corrientes, cuencas y subcuencas", "INEGI / PBSV", "Vector", "Integrada"],
        ["ANP federales", "CONANP / PBSV", "Vector", "Integrada"],
        ["Carreteras y caminos", "INEGI RNC", "WMS", "Integrada"],
        ["Pozos y manantiales", "INEGI", "WMS", "Integrada"],
        ["Población, vivienda y servicios", "INEGI Censo 2020", "222 variables ITER", "Integrada"],
        ["Agricultura", "SIAP", "2020–2024", "Integrada"],
        ["Escuelas", "SEP-SIGED", "Puntos y matrícula", "En incorporación"],
        ["Unidades de salud", "DGIS-CLUES", "Puntos", "En incorporación"],
        ["Concesiones y descargas", "CONAGUA-REPDA", "Puntos", "En incorporación"],
        ["Unidades económicas", "INEGI-DENUE", "Puntos", "En incorporación"],
        ["Residuos y economía circular", "INEGI / SEMARNAT / Jalisco", "Indicadores", "En construcción"],
    ], columns=["Conjunto", "Fuente", "Cobertura", "Estado"])
    st.dataframe(catalog, width="stretch", hide_index=True)
    st.info("No se publican valores simulados. Las fuentes aún no procesadas se identifican como 'En incorporación'.")
