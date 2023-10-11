
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
        "Consolidated2014LSwithboothlocs_1": {
            "type": "geojson",
            "data": json_Consolidated2014LSwithboothlocs_1
        }
                    ,
        "Clipped_2": {
            "type": "geojson",
            "data": json_Clipped_2
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
            "id": "lyr_Consolidated2014LSwithboothlocs_1_0",
            "type": "circle",
            "source": "Consolidated2014LSwithboothlocs_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#91522d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Clipped_2_0",
            "type": "fill",
            "source": "Clipped_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], 0.0]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.155282]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], 0.8, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.915194]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.621127]]], '#0b0405', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.621127]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.465845]]], '#28192f', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.465845]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.310563]]], '#3b2f5f', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.310563]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.155282]]], '#40498e', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.155282]], ['<=', ['get', 'LossMargin'], 0.0]], '#366b9f', ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.155282]], '#348ba6', ['all', ['>', ['get', 'LossMargin'], 0.155282], ['<=', ['get', 'LossMargin'], 0.310563]], '#39abac', ['all', ['>', ['get', 'LossMargin'], 0.310563], ['<=', ['get', 'LossMargin'], 0.465845]], '#55caad', ['all', ['>', ['get', 'LossMargin'], 0.465845], ['<=', ['get', 'LossMargin'], 0.621127]], '#a3e0ba', ['all', ['>', ['get', 'LossMargin'], 0.621127], ['<=', ['get', 'LossMargin'], 0.776408]], '#def5e5', '#ffffff']}
        }
],
}