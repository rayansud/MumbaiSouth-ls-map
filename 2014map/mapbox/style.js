
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
        "Clipped_1": {
            "type": "geojson",
            "data": json_Clipped_1
        }
                    ,
        "Consolidated2014LSwithboothlocs_2": {
            "type": "geojson",
            "data": json_Consolidated2014LSwithboothlocs_2
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
            "id": "lyr_Clipped_1_0",
            "type": "fill",
            "source": "Clipped_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], 0.0]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.155282]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], 0.8, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], '#440154', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], '#472878', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], '#3e4a89', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], '#31688e', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], 0.0]], '#26838e', ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.155282]], '#1e9e89', ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], '#35b779', ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], '#6cce59', ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], '#b4de2c', ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Consolidated2014LSwithboothlocs_2_0",
            "type": "circle",
            "source": "Consolidated2014LSwithboothlocs_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#91522d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}