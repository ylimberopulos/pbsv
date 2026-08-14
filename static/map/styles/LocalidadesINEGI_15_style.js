function style_LocalidadesINEGI_15(feature, resolution) {
    var population = Number(feature.get('poblacion') || 0);
    var radius = population >= 5000 ? 7 : population >= 1000 ? 5 : population >= 100 ? 3.5 : 2.5;
    return new ol.style.Style({image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({color: 'rgba(197,139,60,0.85)'}),
        stroke: new ol.style.Stroke({color: '#ffffff', width: 1})
    })});
}
