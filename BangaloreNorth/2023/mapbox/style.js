
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
        "boothsWithResultsMerge_1": {
            "type": "geojson",
            "data": json_boothsWithResultsMerge_1
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
            "id": "lyr_boothsWithResultsMerge_1_0",
            "type": "fill",
            "source": "boothsWithResultsMerge_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'INCWinMargin'], ['-', 0, 696.0]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 556.8]]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 556.8]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 417.6]]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 417.6]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 278.4]]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 278.4]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 139.2]]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 139.2]], ['<=', ['get', 'INCWinMargin'], 0.0]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], 0.0], ['<=', ['get', 'INCWinMargin'], 139.2]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], 139.2], ['<=', ['get', 'INCWinMargin'], 278.4]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], 278.4], ['<=', ['get', 'INCWinMargin'], 417.6]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], 417.6], ['<=', ['get', 'INCWinMargin'], 556.8]], 0.6, ['all', ['>', ['get', 'INCWinMargin'], 556.8], ['<=', ['get', 'INCWinMargin'], 993.0]], 0.6, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'INCWinMargin'], ['-', 0, 696.0]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 556.8]]], '#d7191c', ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 556.8]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 417.6]]], '#e85b3b', ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 417.6]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 278.4]]], '#f99d59', ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 278.4]], ['<=', ['get', 'INCWinMargin'], ['-', 0, 139.2]]], '#fec980', ['all', ['>', ['get', 'INCWinMargin'], ['-', 0, 139.2]], ['<=', ['get', 'INCWinMargin'], 0.0]], '#ffedaa', ['all', ['>', ['get', 'INCWinMargin'], 0.0], ['<=', ['get', 'INCWinMargin'], 139.2]], '#ecf7b9', ['all', ['>', ['get', 'INCWinMargin'], 139.2], ['<=', ['get', 'INCWinMargin'], 278.4]], '#c7e8ad', ['all', ['>', ['get', 'INCWinMargin'], 278.4], ['<=', ['get', 'INCWinMargin'], 417.6]], '#9dd3a6', ['all', ['>', ['get', 'INCWinMargin'], 417.6], ['<=', ['get', 'INCWinMargin'], 556.8]], '#64abb0', ['all', ['>', ['get', 'INCWinMargin'], 556.8], ['<=', ['get', 'INCWinMargin'], 993.0]], '#2b83ba', '#ffffff']}
        }
],
}