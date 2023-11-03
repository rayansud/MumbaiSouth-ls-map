
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
        "Union_1": {
            "type": "geojson",
            "data": json_Union_1
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
            "id": "lyr_Union_1_0",
            "type": "fill",
            "source": "Union_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['>', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], 1.0, ['all', ['<', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['<', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], 1.0, ['any', ['all', ['<', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['>', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], ['all', ['>', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['<', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]]], 1.0, 0], 'fill-color': ['case', ['all', ['>', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['>', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], '#ff001e', ['all', ['<', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['<', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], '#48e765', ['any', ['all', ['<', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['>', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]], ['all', ['>', ['get', 'Arvind Ganpat Sawant'], ['get', 'Deora Milind Murli']], ['<', ['get', 'ARVND SAWANT'], ['get', 'DEORA MILIND MURLI_2']]]], '#1336f7', '#ffffff']}
        }
],
}