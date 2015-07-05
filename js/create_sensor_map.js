/**
 * Created by Julian on 5/07/15.
 */
var map2 = L.mapbox.map('sensor-map', 'cityscience.mk59l4j3', {
zoomControl: false
}).setView([-37.8138506,144.9638644], 14);

map2.doubleClickZoom.disable();
map2.scrollWheelZoom.disable();


L.geoJson(sensorGeo,{

    pointToLayer: function (feature, latlng) {
        console.log(feature.properties.sensorId);

        var className = "sensor sensorId"+feature.properties.sensorId;
        return L.circleMarker(latlng, {
            radius: 5,
            fillColor: "white",
            color: "#5964ff",
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.8,
            className: className
        });
    }
}).addTo(map2);