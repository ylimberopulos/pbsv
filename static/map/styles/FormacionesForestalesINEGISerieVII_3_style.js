var size = 0;
var placement = 'point';
function categories_FormacionesForestalesINEGISerieVII_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Agricultura de Riego':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,131,19,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Agricultura de Temporal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,211,129,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Asentamientos Humanos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,167,167,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque de Encino':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(9,240,29,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque de Encino-Pino':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,219,205,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque de Oyamel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,179,137,0.6368627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque de Pino':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,214,71,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque de Pino-Encino':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,78,36,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bosque Mesofilo de Montana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(66,109,67,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cuerpo de Agua':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(32,28,226,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Desprovisto de Vegetacion':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(165,125,76,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastizal Cultivado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,224,156,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastizal Inducido':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,224,119,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pradera de Alta Montana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,232,16,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Selva Baja Caducifolia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,188,245,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sin Vegetacion Aparente':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,154,153,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_FormacionesForestalesINEGISerieVII_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("descr_usyv");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_FormacionesForestalesINEGISerieVII_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
