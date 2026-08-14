# PBSV · Sistema de Información Territorial (versión 2)

Aplicación Streamlit independiente de ChatGPT para Tapalpa, Atemajac de Brizuela,
Chiquilistlán y San Gabriel.

## Contenido integrado

- Visor QGIS/OpenLayers con polígono PBSV y límites municipales.
- Formaciones forestales INEGI Serie VII y cambios de uso del suelo.
- Sitios prioritarios de restauración y conservación de biodiversidad.
- Corredores bioclimáticos y riesgo de incendios.
- Corrientes, cuencas, subcuencas y ANP federales.
- 201 localidades georreferenciadas del Censo 2020.
- Carreteras, caminos, pozos y manantiales mediante WMS oficial de INEGI.
- Indicadores demográficos, sociales, de vivienda, electricidad, agua, drenaje,
  conectividad, escolaridad, empleo, discapacidad y derechohabiencia.
- Agricultura municipal SIAP 2020–2024.
- Tablas filtrables y descargas CSV.

Las fuentes todavía en incorporación se muestran explícitamente en el catálogo;
no se utilizan datos simulados.

## Ejecutar localmente

```bash
pip install -r requirements.txt
streamlit run app.py
```

## Publicar en Streamlit Community Cloud

Subir la carpeta completa a la raíz del repositorio y configurar `app.py` como
**Main file path**. La carpeta `.streamlit` habilita los archivos estáticos del
visor cartográfico.

## Principales fuentes

- PBSV: visor territorial QGIS original recuperado de `mapa.pbsv.mx`.
- IIEG: límites municipales de Jalisco.
- INEGI: Censo 2020 ITER, Serie VII, Red Nacional de Caminos y WMS geográfico.
- SIAP: Anuario Estadístico de la Producción Agrícola.
- CONANP: áreas naturales protegidas federales.
