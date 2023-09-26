
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
        "Consolidated2019LSwithboothlocsnotcleaned_1": {
            "type": "geojson",
            "data": json_Consolidated2019LSwithboothlocsnotcleaned_1
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
            "id": "lyr_Consolidated2019LSwithboothlocsnotcleaned_1_0",
            "type": "circle",
            "source": "Consolidated2019LSwithboothlocsnotcleaned_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Clipped_2_0",
            "type": "fill",
            "source": "Clipped_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.98556]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.603642]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.603642]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.452732]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.452732]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.301821]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.301821]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.150911]]], 0.8, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.150911]], ['<=', ['get', 'LossMargin'], 0.0]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.150911]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.150911], ['<=', ['get', 'LossMargin'], 0.301821]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.301821], ['<=', ['get', 'LossMargin'], 0.452732]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.452732], ['<=', ['get', 'LossMargin'], 0.603642]], 0.8, ['all', ['>', ['get', 'LossMargin'], 0.603642], ['<=', ['get', 'LossMargin'], 0.754553]], 0.8, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.98556]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.603642]]], '#0b0405', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.603642]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.452732]]], '#28192f', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.452732]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.301821]]], '#3b2f5f', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.301821]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.150911]]], '#40498e', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.150911]], ['<=', ['get', 'LossMargin'], 0.0]], '#366b9f', ['all', ['>', ['get', 'LossMargin'], 0.0], ['<=', ['get', 'LossMargin'], 0.150911]], '#348ba6', ['all', ['>', ['get', 'LossMargin'], 0.150911], ['<=', ['get', 'LossMargin'], 0.301821]], '#39abac', ['all', ['>', ['get', 'LossMargin'], 0.301821], ['<=', ['get', 'LossMargin'], 0.452732]], '#55caad', ['all', ['>', ['get', 'LossMargin'], 0.452732], ['<=', ['get', 'LossMargin'], 0.603642]], '#a3e0ba', ['all', ['>', ['get', 'LossMargin'], 0.603642], ['<=', ['get', 'LossMargin'], 0.754553]], '#def5e5', '#ffffff']}
        }
],
}