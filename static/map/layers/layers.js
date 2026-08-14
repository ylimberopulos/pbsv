var wms_layers = [];


        var lyr_GoogleHibryd_0 = new ol.layer.Tile({
            'title': 'Google Hibryd',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDbPositron_2 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_FormacionesForestalesINEGISerieVII_3 = new ol.format.GeoJSON();
var features_FormacionesForestalesINEGISerieVII_3 = format_FormacionesForestalesINEGISerieVII_3.readFeatures(json_FormacionesForestalesINEGISerieVII_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FormacionesForestalesINEGISerieVII_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FormacionesForestalesINEGISerieVII_3.addFeatures(features_FormacionesForestalesINEGISerieVII_3);
var lyr_FormacionesForestalesINEGISerieVII_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FormacionesForestalesINEGISerieVII_3, 
                style: style_FormacionesForestalesINEGISerieVII_3,
                popuplayertitle: 'Formaciones Forestales INEGI Serie VII',
                interactive: false,
    title: 'Formaciones Forestales INEGI Serie VII<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_0.png" /> Agricultura de Riego<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_1.png" /> Agricultura de Temporal<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_2.png" /> Asentamientos Humanos<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_3.png" /> Bosque de Encino<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_4.png" /> Bosque de Encino-Pino<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_5.png" /> Bosque de Oyamel<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_6.png" /> Bosque de Pino<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_7.png" /> Bosque de Pino-Encino<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_8.png" /> Bosque Mesofilo de Montana<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_9.png" /> Cuerpo de Agua<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_10.png" /> Desprovisto de Vegetacion<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_11.png" /> Pastizal Cultivado<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_12.png" /> Pastizal Inducido<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_13.png" /> Pradera de Alta Montana<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_14.png" /> Selva Baja Caducifolia<br />\
    <img src="styles/legend/FormacionesForestalesINEGISerieVII_3_15.png" /> Sin Vegetacion Aparente<br />' });
var format_CambioUsoDeSuelo_4 = new ol.format.GeoJSON();
var features_CambioUsoDeSuelo_4 = format_CambioUsoDeSuelo_4.readFeatures(json_CambioUsoDeSuelo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CambioUsoDeSuelo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CambioUsoDeSuelo_4.addFeatures(features_CambioUsoDeSuelo_4);
var lyr_CambioUsoDeSuelo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CambioUsoDeSuelo_4, 
                style: style_CambioUsoDeSuelo_4,
                popuplayertitle: 'CambioUsoDeSuelo',
                interactive: false,
    title: 'CambioUsoDeSuelo<br />\
    <img src="styles/legend/CambioUsoDeSuelo_4_0.png" /> Tierras Forestales hacia Tierras Agrícolas<br />\
    <img src="styles/legend/CambioUsoDeSuelo_4_1.png" /> Tierras Forestales hacia Praderas<br />\
    <img src="styles/legend/CambioUsoDeSuelo_4_2.png" /> Tierras Agrícolas hacia Asentamientos Humanos<br />\
    <img src="styles/legend/CambioUsoDeSuelo_4_3.png" /> Praderas hacia Tierras Agrícolas<br />' });
var format_SPParalaRestauracin_5 = new ol.format.GeoJSON();
var features_SPParalaRestauracin_5 = format_SPParalaRestauracin_5.readFeatures(json_SPParalaRestauracin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPParalaRestauracin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPParalaRestauracin_5.addFeatures(features_SPParalaRestauracin_5);
var lyr_SPParalaRestauracin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPParalaRestauracin_5, 
                style: style_SPParalaRestauracin_5,
                popuplayertitle: 'SP-Para la Restauración',
                interactive: false,
    title: 'SP-Para la Restauración<br />\
    <img src="styles/legend/SPParalaRestauracin_5_0.png" /> Media<br />\
    <img src="styles/legend/SPParalaRestauracin_5_1.png" /> Alta<br />\
    <img src="styles/legend/SPParalaRestauracin_5_2.png" /> Extrema<br />' });
var format_SPParalaConservacindelaBiodiversidad_6 = new ol.format.GeoJSON();
var features_SPParalaConservacindelaBiodiversidad_6 = format_SPParalaConservacindelaBiodiversidad_6.readFeatures(json_SPParalaConservacindelaBiodiversidad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPParalaConservacindelaBiodiversidad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPParalaConservacindelaBiodiversidad_6.addFeatures(features_SPParalaConservacindelaBiodiversidad_6);
var lyr_SPParalaConservacindelaBiodiversidad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPParalaConservacindelaBiodiversidad_6, 
                style: style_SPParalaConservacindelaBiodiversidad_6,
                popuplayertitle: 'SP-Para la Conservación de la Biodiversidad',
                interactive: false,
    title: 'SP-Para la Conservación de la Biodiversidad<br />\
    <img src="styles/legend/SPParalaConservacindelaBiodiversidad_6_0.png" /> Media<br />\
    <img src="styles/legend/SPParalaConservacindelaBiodiversidad_6_1.png" /> Alta<br />\
    <img src="styles/legend/SPParalaConservacindelaBiodiversidad_6_2.png" /> Extrema<br />' });
var lyr_CorredoresBioclimticos_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Corredores Bioclimáticos<br />\
    <img src="styles/legend/CorredoresBioclimticos_7_0.png" /> Muy Alta<br />\
    <img src="styles/legend/CorredoresBioclimticos_7_1.png" /> Alta<br />\
    <img src="styles/legend/CorredoresBioclimticos_7_2.png" /> Media<br />\
    <img src="styles/legend/CorredoresBioclimticos_7_3.png" /> Baja<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CorredoresBioclimticos_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11575642.790124, 2223498.434662, -11525613.763951, 2305683.823276]
        })
    });
var lyr_RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Riesgo de Ocurrencia de Incendios Forestales (Biomasa)<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_0.png" /> Muy bajo<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_1.png" /> Bajo<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_2.png" /> Medio<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_3.png" /> Alto<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_4.png" /> Muy alto<br />\
    <img src="styles/legend/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8_5.png" /> Extremo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11575893.496783, 2223673.669972, -11525885.634183, 2305827.591273]
        })
    });
var format_CorrientesdeAgua_9 = new ol.format.GeoJSON();
var features_CorrientesdeAgua_9 = format_CorrientesdeAgua_9.readFeatures(json_CorrientesdeAgua_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorrientesdeAgua_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorrientesdeAgua_9.addFeatures(features_CorrientesdeAgua_9);
var lyr_CorrientesdeAgua_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorrientesdeAgua_9, 
                style: style_CorrientesdeAgua_9,
                popuplayertitle: 'Corrientes de Agua',
                interactive: false,
    title: 'Corrientes de Agua<br />\
    <img src="styles/legend/CorrientesdeAgua_9_0.png" /> Intermitente<br />\
    <img src="styles/legend/CorrientesdeAgua_9_1.png" /> Perenne<br />' });
var format_Subcuencas_10 = new ol.format.GeoJSON();
var features_Subcuencas_10 = format_Subcuencas_10.readFeatures(json_Subcuencas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subcuencas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subcuencas_10.addFeatures(features_Subcuencas_10);
var lyr_Subcuencas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subcuencas_10, 
                style: style_Subcuencas_10,
                popuplayertitle: 'Subcuencas',
                interactive: false,
                title: '<img src="styles/legend/Subcuencas_10.png" /> Subcuencas'
            });
var format_Cuencas_11 = new ol.format.GeoJSON();
var features_Cuencas_11 = format_Cuencas_11.readFeatures(json_Cuencas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_11.addFeatures(features_Cuencas_11);
var lyr_Cuencas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencas_11, 
                style: style_Cuencas_11,
                popuplayertitle: 'Cuencas',
                interactive: false,
                title: '<img src="styles/legend/Cuencas_11.png" /> Cuencas'
            });
var format_ANPSFederales_12 = new ol.format.GeoJSON();
var features_ANPSFederales_12 = format_ANPSFederales_12.readFeatures(json_ANPSFederales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANPSFederales_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANPSFederales_12.addFeatures(features_ANPSFederales_12);
var lyr_ANPSFederales_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANPSFederales_12, 
                style: style_ANPSFederales_12,
                popuplayertitle: 'ANP\'S Federales',
                interactive: false,
                title: '<img src="styles/legend/ANPSFederales_12.png" /> ANP\'S Federales'
            });
var format_LimitesMunicipales_13 = new ol.format.GeoJSON();
var features_LimitesMunicipales_13 = format_LimitesMunicipales_13.readFeatures(json_LimitesMunicipales_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipales_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipales_13.addFeatures(features_LimitesMunicipales_13);
var lyr_LimitesMunicipales_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipales_13, 
                style: style_LimitesMunicipales_13,
                popuplayertitle: 'Limites Municipales',
                interactive: false,
                title: '<img src="styles/legend/LimitesMunicipales_13.png" /> Limites Municipales'
            });
var format_PaisajeBioculturalSierraVolcnica_14 = new ol.format.GeoJSON();
var features_PaisajeBioculturalSierraVolcnica_14 = format_PaisajeBioculturalSierraVolcnica_14.readFeatures(json_PaisajeBioculturalSierraVolcnica_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisajeBioculturalSierraVolcnica_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisajeBioculturalSierraVolcnica_14.addFeatures(features_PaisajeBioculturalSierraVolcnica_14);
var lyr_PaisajeBioculturalSierraVolcnica_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaisajeBioculturalSierraVolcnica_14, 
                style: style_PaisajeBioculturalSierraVolcnica_14,
                popuplayertitle: 'Paisaje Biocultural Sierra Volcánica',
                interactive: false,
                title: '<img src="styles/legend/PaisajeBioculturalSierraVolcnica_14.png" /> Paisaje Biocultural Sierra Volcánica'
            });
var format_LocalidadesINEGI_15 = new ol.format.GeoJSON();
var features_LocalidadesINEGI_15 = format_LocalidadesINEGI_15.readFeatures(json_LocalidadesINEGI_15,
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var source_LocalidadesINEGI_15 = new ol.source.Vector();
source_LocalidadesINEGI_15.addFeatures(features_LocalidadesINEGI_15);
var lyr_LocalidadesINEGI_15 = new ol.layer.Vector({
    title: 'Localidades · INEGI 2020', source: source_LocalidadesINEGI_15,
    style: style_LocalidadesINEGI_15, interactive: true,
    popuplayertitle: 'Localidades INEGI 2020'
});
var lyr_CarreterasINEGI = new ol.layer.Tile({
    title: 'Carreteras y calles · RNC INEGI', opacity: 0.9,
    source: new ol.source.TileWMS({
        url: 'https://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?',
        params: {'LAYERS': 'c200', 'TILED': true},
        attributions: 'INEGI · Red Nacional de Caminos'
    })
});
var lyr_CaminosRevestidosINEGI = new ol.layer.Tile({
    title: 'Caminos revestidos · RNC INEGI', opacity: 0.9,
    source: new ol.source.TileWMS({
        url: 'https://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?',
        params: {'LAYERS': 'c204', 'TILED': true},
        attributions: 'INEGI · Red Nacional de Caminos'
    })
});
var lyr_CaminosTerraceriaINEGI = new ol.layer.Tile({
    title: 'Caminos de terracería · RNC INEGI', opacity: 0.9,
    source: new ol.source.TileWMS({
        url: 'https://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?',
        params: {'LAYERS': 'c205', 'TILED': true},
        attributions: 'INEGI · Red Nacional de Caminos'
    })
});
var lyr_PozosINEGI = new ol.layer.Tile({
    title: 'Pozos · INEGI', opacity: 1,
    source: new ol.source.TileWMS({
        url: 'https://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?',
        params: {'LAYERS': 'c455', 'TILED': true},
        attributions: 'INEGI · Información geohidrológica'
    })
});
var lyr_ManantialesINEGI = new ol.layer.Tile({
    title: 'Manantiales · INEGI', opacity: 1,
    source: new ol.source.TileWMS({
        url: 'https://gaia.inegi.org.mx/NLB/tunnel/wms/wms61?',
        params: {'LAYERS': 'c456', 'TILED': true},
        attributions: 'INEGI · Información geohidrológica'
    })
});
var group_InfraestructurayAgua = new ol.layer.Group({
    layers: [lyr_LocalidadesINEGI_15,lyr_CarreterasINEGI,lyr_CaminosRevestidosINEGI,lyr_CaminosTerraceriaINEGI,lyr_PozosINEGI,lyr_ManantialesINEGI],
    fold: 'open', title: 'Infraestructura y agua · INEGI'
});
var group_Hidrologa = new ol.layer.Group({
                                layers: [lyr_CorrientesdeAgua_9,lyr_Subcuencas_10,lyr_Cuencas_11,],
                                fold: "open",
                                title: 'Hidrología'});
var group_RiesgodeIncendiosForestales = new ol.layer.Group({
                                layers: [lyr_RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8,],
                                fold: "open",
                                title: 'Riesgo de Incendios Forestales'});
var group_BiodiversidadyConectividad = new ol.layer.Group({
                                layers: [lyr_SPParalaConservacindelaBiodiversidad_6,lyr_CorredoresBioclimticos_7,],
                                fold: "open",
                                title: 'Biodiversidad y Conectividad'});
var group_UsodeSueloyVegetacin = new ol.layer.Group({
                                layers: [lyr_FormacionesForestalesINEGISerieVII_3,lyr_CambioUsoDeSuelo_4,lyr_SPParalaRestauracin_5,],
                                fold: "open",
                                title: 'Uso de Suelo y Vegetación'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleHibryd_0,lyr_GoogleTerrainHybrid_1,lyr_CartoDbPositron_2,],
                                fold: "open",
                                title: 'Base Maps'});

lyr_GoogleHibryd_0.setVisible(false);lyr_GoogleTerrainHybrid_1.setVisible(false);lyr_CartoDbPositron_2.setVisible(true);lyr_FormacionesForestalesINEGISerieVII_3.setVisible(false);lyr_CambioUsoDeSuelo_4.setVisible(false);lyr_SPParalaRestauracin_5.setVisible(false);lyr_SPParalaConservacindelaBiodiversidad_6.setVisible(false);lyr_CorredoresBioclimticos_7.setVisible(false);lyr_RiesgodeOcurrenciadeIncendiosForestalesBiomasa_8.setVisible(false);lyr_CorrientesdeAgua_9.setVisible(false);lyr_Subcuencas_10.setVisible(false);lyr_Cuencas_11.setVisible(false);lyr_LocalidadesINEGI_15.setVisible(true);lyr_CarreterasINEGI.setVisible(false);lyr_CaminosRevestidosINEGI.setVisible(false);lyr_CaminosTerraceriaINEGI.setVisible(false);lyr_PozosINEGI.setVisible(false);lyr_ManantialesINEGI.setVisible(false);lyr_ANPSFederales_12.setVisible(true);lyr_LimitesMunicipales_13.setVisible(true);lyr_PaisajeBioculturalSierraVolcnica_14.setVisible(true);
var layersList = [group_BaseMaps,group_UsodeSueloyVegetacin,group_BiodiversidadyConectividad,group_RiesgodeIncendiosForestales,group_Hidrologa,group_InfraestructurayAgua,lyr_ANPSFederales_12,lyr_LimitesMunicipales_13,lyr_PaisajeBioculturalSierraVolcnica_14];
lyr_FormacionesForestalesINEGISerieVII_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', 'CLAVE': 'CLAVE', 'DESCRIPCIO': 'DESCRIPCIO', 'descr_usyv': 'descr_usyv', 'Ord_IPCC': 'Ord_IPCC', 'IPCC': 'IPCC', 'Cve_IPCC': 'Cve_IPCC', 'Ecosistema': 'Ecosistema', 'StratoForm': 'StratoForm', 'S_ha': 'S_ha', });
lyr_CambioUsoDeSuelo_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_CAMBIO': 'ID_CAMBIO', 'CVE_CAMBIO': 'CVE_CAMBIO', 'DESC_CAMB': 'DESC_CAMB', 'AREAm2': 'AREAm2', });
lyr_SPParalaRestauracin_5.set('fieldAliases', {'ID': 'ID', 'PRIORIDAD': 'PRIORIDAD', 'tipo': 'tipo', 'Area_km2': 'Area_km2', 'Cov_': 'Cov_', 'Cov_id': 'Cov_id', });
lyr_SPParalaConservacindelaBiodiversidad_6.set('fieldAliases', {'ID': 'ID', 'PRIORIDAD': 'PRIORIDAD', 'tipo': 'tipo', 'Area_km2': 'Area_km2', 'Cov_': 'Cov_', 'Cov_id': 'Cov_id', });
lyr_CorrientesdeAgua_9.set('fieldAliases', {'id': 'id', 'cve_subc': 'cve_subc', 'clave50k': 'clave50k', 'tipo': 'tipo', 'entidad': 'entidad', 'fc': 'fc', 'condicion': 'condicion', 'edicion': 'edicion', 'fecha': 'fecha', 'lengthm': 'lengthm', 'id_drena': 'id_drena', 'flowdir': 'flowdir', 'enabled': 'enabled', 'desc_enabl': 'desc_enabl', 'cali_repr': 'cali_repr', 'sequenceid': 'sequenceid', 'order_1': 'order_1', 'level_1': 'level_1', 'arbsum_1': 'arbsum_1', 'pathl_1': 'pathl_1', 'layer': 'layer', 'path': 'path', });
lyr_Subcuencas_10.set('fieldAliases', {'CVE_SUBCUE': 'CVE_SUBCUE', 'SUBCUENCA': 'SUBCUENCA', 'TIPO': 'TIPO', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_Cuencas_11.set('fieldAliases', {'CVE_CUE': 'CVE_CUE', 'NOMB': 'NOMB', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', 'TIPO': 'TIPO', });
lyr_ANPSFederales_12.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', 'S_TERRES': 'S_TERRES', 'S_MARINA': 'S_MARINA', 'PRIM_DEC': 'PRIM_DEC', 'ULT_DOF': 'ULT_DOF', 'PCM1': 'PCM1', 'SINAP': 'SINAP', 'ID_ANP': 'ID_ANP', 'cov_id': 'cov_id', 'etiqueta': 'etiqueta', 'numpoligon': 'numpoligon', 'cita': 'cita', 'NUM_ANP': 'NUM_ANP', });
lyr_LimitesMunicipales_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'REGI�N': 'REGI�N', 'CLAVE': 'CLAVE', 'km2': 'km2', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_PaisajeBioculturalSierraVolcnica_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'REGI�N': 'REGI�N', 'CLAVE': 'CLAVE', 'km2': 'km2', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_FormacionesForestalesINEGISerieVII_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'CLAVE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'descr_usyv': 'TextEdit', 'Ord_IPCC': 'TextEdit', 'IPCC': 'TextEdit', 'Cve_IPCC': 'TextEdit', 'Ecosistema': 'TextEdit', 'StratoForm': 'TextEdit', 'S_ha': 'TextEdit', });
lyr_CambioUsoDeSuelo_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_CAMBIO': 'Range', 'CVE_CAMBIO': 'TextEdit', 'DESC_CAMB': 'TextEdit', 'AREAm2': 'TextEdit', });
lyr_SPParalaRestauracin_5.set('fieldImages', {'ID': 'TextEdit', 'PRIORIDAD': 'TextEdit', 'tipo': 'TextEdit', 'Area_km2': 'TextEdit', 'Cov_': 'TextEdit', 'Cov_id': 'TextEdit', });
lyr_SPParalaConservacindelaBiodiversidad_6.set('fieldImages', {'ID': 'TextEdit', 'PRIORIDAD': 'TextEdit', 'tipo': 'TextEdit', 'Area_km2': 'TextEdit', 'Cov_': 'TextEdit', 'Cov_id': 'TextEdit', });
lyr_CorrientesdeAgua_9.set('fieldImages', {'id': 'Range', 'cve_subc': 'TextEdit', 'clave50k': 'TextEdit', 'tipo': 'Range', 'entidad': 'TextEdit', 'fc': 'Range', 'condicion': 'TextEdit', 'edicion': 'TextEdit', 'fecha': 'DateTime', 'lengthm': 'TextEdit', 'id_drena': 'Range', 'flowdir': 'Range', 'enabled': 'Range', 'desc_enabl': 'TextEdit', 'cali_repr': 'Range', 'sequenceid': 'TextEdit', 'order_1': 'Range', 'level_1': 'Range', 'arbsum_1': 'TextEdit', 'pathl_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Subcuencas_10.set('fieldImages', {'CVE_SUBCUE': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'TIPO': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_Cuencas_11.set('fieldImages', {'CVE_CUE': 'TextEdit', 'NOMB': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_ANPSFederales_12.set('fieldImages', {'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'S_TERRES': 'TextEdit', 'S_MARINA': 'TextEdit', 'PRIM_DEC': 'DateTime', 'ULT_DOF': 'DateTime', 'PCM1': 'TextEdit', 'SINAP': 'TextEdit', 'ID_ANP': 'TextEdit', 'cov_id': 'TextEdit', 'etiqueta': 'TextEdit', 'numpoligon': 'TextEdit', 'cita': 'TextEdit', 'NUM_ANP': 'Range', });
lyr_LimitesMunicipales_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGI�N': 'TextEdit', 'CLAVE': 'TextEdit', 'km2': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_PaisajeBioculturalSierraVolcnica_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGI�N': 'TextEdit', 'CLAVE': 'TextEdit', 'km2': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_FormacionesForestalesINEGISerieVII_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', 'CLAVE': 'no label', 'DESCRIPCIO': 'inline label - visible with data', 'descr_usyv': 'inline label - visible with data', 'Ord_IPCC': 'no label', 'IPCC': 'no label', 'Cve_IPCC': 'no label', 'Ecosistema': 'no label', 'StratoForm': 'no label', 'S_ha': 'no label', });
lyr_CambioUsoDeSuelo_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID_CAMBIO': 'no label', 'CVE_CAMBIO': 'no label', 'DESC_CAMB': 'no label', 'AREAm2': 'no label', });
lyr_SPParalaRestauracin_5.set('fieldLabels', {'ID': 'no label', 'PRIORIDAD': 'no label', 'tipo': 'no label', 'Area_km2': 'no label', 'Cov_': 'no label', 'Cov_id': 'no label', });
lyr_SPParalaConservacindelaBiodiversidad_6.set('fieldLabels', {'ID': 'no label', 'PRIORIDAD': 'no label', 'tipo': 'no label', 'Area_km2': 'no label', 'Cov_': 'no label', 'Cov_id': 'no label', });
lyr_CorrientesdeAgua_9.set('fieldLabels', {'id': 'no label', 'cve_subc': 'no label', 'clave50k': 'no label', 'tipo': 'no label', 'entidad': 'no label', 'fc': 'no label', 'condicion': 'no label', 'edicion': 'no label', 'fecha': 'no label', 'lengthm': 'no label', 'id_drena': 'no label', 'flowdir': 'no label', 'enabled': 'no label', 'desc_enabl': 'no label', 'cali_repr': 'no label', 'sequenceid': 'no label', 'order_1': 'no label', 'level_1': 'no label', 'arbsum_1': 'no label', 'pathl_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Subcuencas_10.set('fieldLabels', {'CVE_SUBCUE': 'no label', 'SUBCUENCA': 'no label', 'TIPO': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', });
lyr_Cuencas_11.set('fieldLabels', {'CVE_CUE': 'no label', 'NOMB': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', 'TIPO': 'no label', });
lyr_ANPSFederales_12.set('fieldLabels', {'NOMBRE': 'no label', 'CAT_MANEJO': 'no label', 'ESTADOS': 'no label', 'MUNICIPIOS': 'no label', 'REGION': 'no label', 'SUPERFICIE': 'no label', 'S_TERRES': 'no label', 'S_MARINA': 'no label', 'PRIM_DEC': 'no label', 'ULT_DOF': 'no label', 'PCM1': 'no label', 'SINAP': 'no label', 'ID_ANP': 'no label', 'cov_id': 'no label', 'etiqueta': 'no label', 'numpoligon': 'no label', 'cita': 'no label', 'NUM_ANP': 'no label', });
lyr_LimitesMunicipales_13.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'REGI�N': 'no label', 'CLAVE': 'no label', 'km2': 'no label', 'DESCRIPCIO': 'no label', });
lyr_PaisajeBioculturalSierraVolcnica_14.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'REGI�N': 'no label', 'CLAVE': 'no label', 'km2': 'no label', 'DESCRIPCIO': 'no label', });
lyr_PaisajeBioculturalSierraVolcnica_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
