"""Extrae indicadores y localidades PBSV del ITER del Censo 2020 de INEGI."""

from pathlib import Path
import json
import re

import pandas as pd


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / "official_sources" / "inegi_iter" / "iter_14_cpv2020" / "conjunto_de_datos" / "conjunto_de_datos_iter_14CSV20.csv"
OUT = ROOT / "data"
MUNICIPIOS = {10, 32, 86, 113}


def dms(value):
    if not isinstance(value, str):
        return None
    match = re.search(r"(\d+)°(\d+)'([\d.]+)\"\s*([NSEW])", value)
    if not match:
        return None
    degrees, minutes, seconds, direction = match.groups()
    decimal = float(degrees) + float(minutes) / 60 + float(seconds) / 3600
    return -decimal if direction in {"S", "W"} else decimal


def number(row, field):
    value = pd.to_numeric(row.get(field), errors="coerce")
    return None if pd.isna(value) else float(value)


def percentage(row, numerator, denominator):
    top, bottom = number(row, numerator), number(row, denominator)
    return round(top * 100 / bottom, 1) if top is not None and bottom else None


def main():
    frame = pd.read_csv(SOURCE, low_memory=False)
    frame = frame[frame.MUN.isin(MUNICIPIOS)].copy()
    totals = frame[frame.LOC == 0]
    results = []
    for _, row in totals.iterrows():
        results.append({
            "clave_municipal": f"14{int(row.MUN):03d}",
            "municipio": row.NOM_MUN,
            "poblacion": int(row.POBTOT),
            "mujeres": int(row.POBFEM),
            "hombres": int(row.POBMAS),
            "porcentaje_0_14": percentage(row, "POB0_14", "POBTOT"),
            "porcentaje_15_64": percentage(row, "POB15_64", "POBTOT"),
            "porcentaje_65_mas": percentage(row, "POB65_MAS", "POBTOT"),
            "poblacion_indigena_hogares": int(number(row, "PHOG_IND") or 0),
            "poblacion_afromexicana": int(number(row, "POB_AFRO") or 0),
            "poblacion_discapacidad": int(number(row, "PCON_DISC") or 0),
            "grado_promedio_escolaridad": number(row, "GRAPROES"),
            "pea": int(number(row, "PEA") or 0),
            "poblacion_ocupada": int(number(row, "POCUPADA") or 0),
            "sin_derechohabiencia": int(number(row, "PSINDER") or 0),
            "viviendas_habitadas": int(number(row, "TVIVPARHAB") or 0),
            "porcentaje_viviendas_electricidad": percentage(row, "VPH_C_ELEC", "TVIVPARHAB"),
            "porcentaje_viviendas_agua": percentage(row, "VPH_AGUADV", "TVIVPARHAB"),
            "porcentaje_viviendas_drenaje": percentage(row, "VPH_DRENAJ", "TVIVPARHAB"),
            "porcentaje_viviendas_internet": percentage(row, "VPH_INTER", "TVIVPARHAB"),
            "porcentaje_viviendas_celular": percentage(row, "VPH_CEL", "TVIVPARHAB"),
            "porcentaje_viviendas_automovil": percentage(row, "VPH_AUTOM", "TVIVPARHAB"),
        })

    localities = []
    for _, row in frame[(frame.LOC > 0) & (frame.LOC < 9998)].iterrows():
        lon, lat = dms(row.LONGITUD), dms(row.LATITUD)
        if lon is None or lat is None:
            continue
        localities.append({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [lon, lat]},
            "properties": {
                "clave": f"14{int(row.MUN):03d}{int(row.LOC):04d}",
                "municipio": row.NOM_MUN,
                "localidad": row.NOM_LOC,
                "poblacion": int(number(row, "POBTOT") or 0),
                "altitud_m": int(number(row, "ALTITUD") or 0),
            },
        })

    OUT.mkdir(exist_ok=True)
    (OUT / "indicadores_sociales_inegi_2020.json").write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT / "localidades_inegi_2020.geojson").write_text(
        json.dumps({"type": "FeatureCollection", "features": localities}, ensure_ascii=False),
        encoding="utf-8",
    )
    map_layer = ROOT / "static" / "map" / "layers" / "LocalidadesINEGI_15.js"
    map_layer.parent.mkdir(parents=True, exist_ok=True)
    map_layer.write_text(
        "var json_LocalidadesINEGI_15 = "
        + json.dumps({"type": "FeatureCollection", "features": localities}, ensure_ascii=False)
        + ";",
        encoding="utf-8",
    )
    print(f"{len(results)} municipios; {len(localities)} localidades")


if __name__ == "__main__":
    main()
