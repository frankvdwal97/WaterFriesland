var mygeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#c0c0c0",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Tjeukemeer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.8000946044921875,
          52.89337032817865
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Slotermeer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.628089904785156,
          52.91594126008629
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Heegermeer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.5886077880859375,
          52.9536023000285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "De Fluessen"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.5240631103515625,
          52.93394815364359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Sneekermeer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.751686096191406,
          53.031097298099745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Pikmeer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.850563049316406,
          53.09505487551377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "swimming",
        "name": "Wijde Ee"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.872793197631835,
          53.08691072085707
        ]
      }
    }
  ]
}

var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
    "sources":{
    "cartiqo":{
        "type": "vector",
        "tiles":  [
            "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
        ]
    }
},

"layers": [
  {
    "id":  "background",
    "type": "background",
    "paint": {
        "background-color":"#FFFFFF"
    }
  },

  {
    "id": "admin",
    "type": "line",
    "source": "cartiqo",
    "source-layer": "boundaries",
    "maxzoom": 22,
    "minzoom": 0,
    "filter": ["==", "type", "province"],
    "paint": {
      "line-color": "#54D8CC",
      "line-width": 2
      }
  },

  {
    "id": "highway",
    "type": "line",
    "source": "cartiqo",
    "source-layer":"roads",
    "paint": {
        "line-color": "#f2934a"
      }
},
{
    "id": "lake",
    "type": "fill",
    "source": "cartiqo",
    "source-layer":"water",
    "paint": {
        "fill-color": "#00F5FF",
        "fill-outline-color": "#ffffff"
    }
},

{
    "id": "buildings",
    "type": "fill",
    "source": "cartiqo",
    "source-layer":"builtup",
    "paint": {
        "fill-color": "#C0C0C0",
        "fill-outline-color": "#ffffff"
    }
},

{
    "id": "water_way",
    "type": "fill",
    "source": "cartiqo",
    "source-layer":"water",
    "paint": {
        "fill-color": "#00F5FF",
        "fill-outline-color": "#ffffff"
    }
},

{
"id": "local",
"type": "line",
"source": "cartiqo",
"source-layer":"roads",
"paint": {
"line-color": "#f2934a",
  }
},{
    "id": "place-labels",
    "type": "symbol",
    "source": "cartiqo",
    "source-layer": "labels",
    "filter":
        [
            "==",
            "type",
            "place"
        ],
    "minzoom": 8,
    "maxzoom": 16,
    "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-size": 16,
        "text-font":  ["Lato"],
        "text-field": "{name}",
    },
    "paint": {
        "text-halo-blur": 0.5,
        "text-color":"#1d464d",
        "text-halo-width": 1,
        "text-halo-color": "#fff"
    }
},    {
    "id": "admin-hover",
    "type": "line",
    "source": "cartiqo",
    "source-layer": "boundaries",
    "maxzoom": 22,
    "minzoom": 0,
    "filter": ["==", "originalid", ""],
    "paint": {
        "line-color": "#eeee00",
        "line-width": 15
    }
}]
}
var map = new mapboxgl.Map({
    container: 'map',
    style: mystyle,
    hash: true,
    zoom: 10.44,
    pitch: 23.50,
    bearing: -24.00,
    center: [ 5.846333, 52.990290]
});

// On Load add GeoJSON SOURCE and LAYER
map.on('load', function (e) {
    // ADD GEOJSON SOURCE
    map.addSource('punten', {
        'type': 'geojson',
        'data': mygeoJSON
    });
    // ADD an extra layer
    map.addLayer({
        'id': 'geojson-points',
        'type': 'circle',
        'source': 'punten',
        'layout': {},
        'paint': {
            'circle-color': '#f40909',
            'circle-radius': 10
        }
    });
});

//Adding hover effect
map.on("mousemove", "admin", function (e) {
    // panel.innerHTML = e.features[0].properties.name;
    map.setFilter("admin-hover", ["==", "originalid", e.features[0].properties.originalid]);
});

// Reset the state-fills-hover layer's filter when the mouse leaves the layer.
map.on("mouseleave", "admin", function () {
    map.setFilter("admin-hover", ["==", "originalid", ""]);
  });
