from pathlib import Path
import json

import streamlit as st
import streamlit.components.v1 as components


BASE = Path(__file__).parent

st.set_page_config(
    page_title="PBSV | Sistema de Información Territorial",
    page_icon="🌋",
    layout="wide",
    initial_sidebar_state="collapsed",
)

html = (BASE / "index.html").read_text(encoding="utf-8")
css = (BASE / "styles.css").read_text(encoding="utf-8")
javascript = (BASE / "app.js").read_text(encoding="utf-8")
geo = json.loads((BASE / "data" / "municipios_pbsv.geojson").read_text(encoding="utf-8"))
inegi = json.loads((BASE / "data" / "inegi_municipios_2020.json").read_text(encoding="utf-8"))
siap = (BASE / "data" / "siap_agricola_2020_2024.csv").read_text(encoding="utf-8")

html = html.replace('<link rel="stylesheet" href="styles.css">', f"<style>{css}</style>")
html = html.replace('<script src="app.js"></script>', f"<script>{javascript}</script>")

original_loader = "async function init(){let [g,i,a]=await Promise.all([fetch('data/municipios_pbsv.geojson').then(r=>r.json()),fetch('data/inegi_municipios_2020.json').then(r=>r.json()),fetch('data/siap_agricola_2020_2024.csv').then(r=>r.text())]);S.geo=g;S.inegi=i;S.agri=csv(a);"
embedded_loader = (
    "async function init(){"
    f"S.geo={json.dumps(geo, ensure_ascii=False)};"
    f"S.inegi={json.dumps(inegi, ensure_ascii=False)};"
    f"S.agri=csv({json.dumps(siap, ensure_ascii=False)});"
    "let i=S.inegi,a=S.agri;"
)
html = html.replace(original_loader, embedded_loader)

st.markdown(
    "<style>#MainMenu,header,footer{visibility:hidden}.block-container{padding:0;max-width:100%}</style>",
    unsafe_allow_html=True,
)
components.html(html, height=1900, scrolling=True)
