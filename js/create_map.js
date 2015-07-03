//var map = L.map('map').setView([-37.8138506,144.9638644], 14);
//
//L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
//    maxZoom: 18,
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    id: 'examples.map-20v6611k'
//}).addTo(map);

var map = L.mapbox.map('map', 'cityscience.j0g767m0')
              .setView([-37.8138506,144.9638644], 14);

L.mapbox.tileLayer('cityscience.iagjdpp2').addTo(map);

var layerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
var indexTable = {'a':a,'b':b,'c':c,'d':d,'e':e,'f':f,'g':g,'h':h,'i':i,'j':j,'k':k,'l':l,'m':m,'n':n,'o':o,'p':p,'q':q,'r':r,'s':s,'t':t,'u':u, 'v':v,'w':w,'x':x};


createAllLayers(layerArray);



function showCurrentCrash(layerArray,index)
{

    console.log(index);
    for(var i=0; i<layerArray.length;i++)
    {
        if(index == i)
        {
            $('.'+layerArray[i]).show();
        }
        else
        {
            $('.'+layerArray[i]).hide();
        }

    }
}


function createLayer(geojson,className)
{

    return   L.geoJson(geojson, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#5964ff",
                color: "#5964ff",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.5,
                className: className
            });
        }
    }).addTo(map);
}


function createAllLayers(layerArray)
{
    for(var i= 0; i < layerArray.length; i++)
    {
        createLayer(indexTable[layerArray[i]],layerArray[i]);
    }

}