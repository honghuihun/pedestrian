/**
 * Created by Julian on 5/07/15.
 */
var map2 = L.mapbox.map('sensor-map', 'cityscience.mk59l4j3')
    .setView([-37.8138506,144.9638644], 14);


L.geoJson(sensorGeo,{

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 10,
            fillColor: "white",
            color: "#5964ff",
            weight: 1,
            opacity: 0.5,
            fillOpacity: 1
        });
    }
}).addTo(map2);