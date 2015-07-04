//var map = L.map('map').setView([-37.8138506,144.9638644], 14);
//
//L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
//    maxZoom: 18,
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    id: 'examples.map-20v6611k'
//}).addTo(map);

var map = L.mapbox.map('map', 'cityscience.mk59l4j3')
              .setView([-37.8138506,144.9638644], 14);

//L.mapbox.tileLayer('cityscience.iagjdpp2').addTo(map);

var layerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
var indexTable = {'a':a,'b':b,'c':c,'d':d,'e':e,'f':f,'g':g,'h':h,'i':i,'j':j,'k':k,'l':l,'m':m,'n':n,'o':o,'p':p,'q':q,'r':r,'s':s,'t':t,'u':u, 'v':v,'w':w,'x':x};
var colorTable = {'a':buffer0,'b':buffer1,'c':buffer2, 'd':buffer3,'e':buffer4,'f':buffer5,'g':buffer6,'h':buffer7,'i':buffer8,'j':buffer9,
                  'k':buffer10,'l':buffer11,'m':buffer12,'n':buffer13,'o':buffer14,'p':buffer15,'q':buffer16,'r':buffer17,'s':buffer18,
                  't':buffer19,'u':buffer20,'v':buffer21,'w':buffer22,'x':buffer23};

createAllLayers(layerArray);





var myStyle0 = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0,
    "fillColor": "orange",
    "fillOpacity":0.1
};


var color1 = "#F4F400";
var color2 = "#F4CC00";
var color3 = "#F47A00";
var color4 = "#F45100";
var color5 = "#F40000";
var color6 = "#A80000";

var number1 = 595;
var number2 = 1191;
var number3 = 1787;
var number4 = 2382;
var number5 = 3000;

var myStyle1 = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0,
    "fillColor": "red",
    "fillOpacity":0.1
};




var buffer0 = L.geoJson(buffer0,{
        style:function(feature)
        {
         var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
                   };
        }
    }
);




var buffer1 = L.geoJson(buffer1,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer2 = L.geoJson(buffer2,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer3 = L.geoJson(buffer3,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer4 = L.geoJson(buffer4,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer5 = L.geoJson(buffer5,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer6 = L.geoJson(buffer6,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer7 = L.geoJson(buffer7,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer8 = L.geoJson(buffer8,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer9 = L.geoJson(buffer9,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer10 = L.geoJson(buffer10,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer11 = L.geoJson(buffer11,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);

var buffer12 = L.geoJson(buffer12,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer13 = L.geoJson(buffer13,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer14 = L.geoJson(buffer14,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer15 = L.geoJson(buffer15,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);



var buffer16 = L.geoJson(buffer16,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer17 = L.geoJson(buffer17,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);



var buffer18 = L.geoJson(buffer18,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer19 = L.geoJson(buffer19,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer20 = L.geoJson(buffer20,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer21 = L.geoJson(buffer21,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer22 = L.geoJson(buffer22,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);


var buffer23 = L.geoJson(buffer23,{
        style:function(feature)
        {
            var color =   createColor(feature,number1, number2, number3,number4,number5);
            return {
                fillColor:color,
                opacity: 0,
                fillOpacity: 0.3
            };
        }
    }
);





function createColor(feature,number1, number2, number3,number4,number5)
{
    var numberOfCounts = feature.properties.Field3;


    var number = numberOfCounts/2191;


    if(number<number1)
    {
        return color1;
    }
    else if(number<number2 && number >=number1)
    {
        return color2;
    }
    else if(number >= number2 && number < number3)
    {
        return color3;
    }
    else if(number >= number3 && number < number4)
    {
        return color4;
    }
    else if(number >= number4 && number < number5)
    {
        return color5;
    }
    else if(number >= number5)
    {
        return color6;
    }

}



function showCurrentColor(layerArray,colorTable,index,map)
{
    for(var i=0; i<layerArray.length;i++)
    {
        if(index == i)
        {
            map.addLayer(colorTable[i]);
        }
        else
        {
            map.removeLayer(colorTable[i]);
        }

    }
}


function showCurrentCrash(layerArray,index)
{

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
                radius: 3,
                fillColor: "#ffffff",
                color: "#5964ff",
                weight: 1,
                opacity: 0.5,
                fillOpacity: 1,
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