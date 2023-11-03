
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
        "Merged_1": {
            "type": "geojson",
            "data": json_Merged_1
        }
                    ,
        "ClippedVoronoi_2": {
            "type": "geojson",
            "data": json_ClippedVoronoi_2
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
            "id": "lyr_Merged_1_0",
            "type": "circle",
            "source": "Merged_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_ClippedVoronoi_2_0",
            "type": "fill",
            "source": "ClippedVoronoi_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.0]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.0]], ['<=', ['get', 'LossMargin'], 0.155282]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], '#d7191c', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], '#e85b3b', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], '#f99d59', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], '#fec980', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.0]]], '#ffedaa', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.0]], ['<=', ['get', 'LossMargin'], 0.155282]], '#ecf7b9', ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], '#c7e8ad', ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], '#9dd3a6', ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], '#64abb0', ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], '#2b83ba', '#ffffff']}
        }
],
}