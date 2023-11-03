
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Intersection2014and2019_1": {
            "type": "geojson",
            "data": json_Intersection2014and2019_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Intersection2014and2019_1_0",
            "type": "fill",
            "source": "Intersection2014and2019_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Color'], 0], 1.0, ['==', ['get', 'Color'], 1], 1.0, ['==', ['get', 'Color'], 2], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Color'], 0], '#1f78b4', ['==', ['get', 'Color'], 1], '#ff7f00', ['==', ['get', 'Color'], 2], '#e31a1c', '#ffffff']}
        }
],
}