var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_list_1 = new ol.format.GeoJSON();
var features_list_1 = format_list_1.readFeatures(json_list_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_list_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_list_1.addFeatures(features_list_1);
var lyr_list_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_list_1, 
                style: style_list_1,
                interactive: true,
                title: '<img src="styles/legend/list_1.png" /> list'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_list_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_list_1];
lyr_list_1.set('fieldAliases', {'NAME': 'NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BUILDING TYPE': 'BUILDING TYPE', 'ADDRESS': 'ADDRESS', 'DEVELOPER': 'DEVELOPER', 'AMENITIES': 'AMENITIES', 'CONNECTIVITY': 'CONNECTIVITY', 'NO OF UNITS': 'NO OF UNITS', 'CONFIGURATION': 'CONFIGURATION', 'CARPET AREA': 'CARPET AREA', 'POSSESSION FROM': 'POSSESSION FROM', 'RERA REGISTRATION NO': 'RERA REGISTRATION NO', 'WEBSITE': 'WEBSITE', '1': '1', '2': '2', '3': '3', '4': '4', });
lyr_list_1.set('fieldImages', {'NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'BUILDING TYPE': 'TextEdit', 'ADDRESS': 'TextEdit', 'DEVELOPER': 'TextEdit', 'AMENITIES': 'TextEdit', 'CONNECTIVITY': 'TextEdit', 'NO OF UNITS': 'TextEdit', 'CONFIGURATION': 'TextEdit', 'CARPET AREA': 'TextEdit', 'POSSESSION FROM': 'TextEdit', 'RERA REGISTRATION NO': 'TextEdit', 'WEBSITE': 'TextEdit', '1': 'ExternalResource', '2': 'ExternalResource', '3': 'ExternalResource', '4': 'ExternalResource', });
lyr_list_1.set('fieldLabels', {'NAME': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'BUILDING TYPE': 'header label', 'ADDRESS': 'header label', 'DEVELOPER': 'header label', 'AMENITIES': 'header label', 'CONNECTIVITY': 'header label', 'NO OF UNITS': 'header label', 'CONFIGURATION': 'header label', 'CARPET AREA': 'header label', 'POSSESSION FROM': 'header label', 'RERA REGISTRATION NO': 'header label', 'WEBSITE': 'header label', '1': 'no label', '2': 'no label', '3': 'no label', '4': 'no label', });
lyr_list_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});