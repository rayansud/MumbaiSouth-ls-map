
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
        "ClippedVoronoiclipped_2": {
            "type": "geojson",
            "data": json_ClippedVoronoiclipped_2
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
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_ClippedVoronoiclipped_2_0",
            "type": "fill",
            "source": "ClippedVoronoiclipped_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.98556]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.660234]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.660234]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.565914]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.565914]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.471595]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.471595]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.377276]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.377276]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.282957]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.282957]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.188638]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.188638]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.094319]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.094319]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.0]]], 1.0, ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.0]], ['<=', ['get', 'LossMargin'], 0.094319]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.094319], ['<=', ['get', 'LossMargin'], 0.188638]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.188638], ['<=', ['get', 'LossMargin'], 0.282957]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.282957], ['<=', ['get', 'LossMargin'], 0.377276]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.377276], ['<=', ['get', 'LossMargin'], 0.471595]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.471595], ['<=', ['get', 'LossMargin'], 0.565914]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.565914], ['<=', ['get', 'LossMargin'], 0.660234]], 1.0, ['all', ['>', ['get', 'LossMargin'], 0.660234], ['<=', ['get', 'LossMargin'], 0.754553]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'LossMargin'], ['-', 0, 0.98556]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.660234]]], '#d7191c', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.660234]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.565914]]], '#e1412e', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.565914]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.471595]]], '#eb6841', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.471595]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.377276]]], '#f59053', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.377276]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.282957]]], '#fdb367', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.282957]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.188638]]], '#fec980', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.188638]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.094319]]], '#fedf99', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.094319]], ['<=', ['get', 'LossMargin'], ['-', 0, 0.0]]], '#fff4b2', ['all', ['>', ['get', 'LossMargin'], ['-', 0, 0.0]], ['<=', ['get', 'LossMargin'], 0.094319]], '#f4fabb', ['all', ['>', ['get', 'LossMargin'], 0.094319], ['<=', ['get', 'LossMargin'], 0.188638]], '#ddf1b4', ['all', ['>', ['get', 'LossMargin'], 0.188638], ['<=', ['get', 'LossMargin'], 0.282957]], '#c7e8ad', ['all', ['>', ['get', 'LossMargin'], 0.282957], ['<=', ['get', 'LossMargin'], 0.377276]], '#b1dfa6', ['all', ['>', ['get', 'LossMargin'], 0.377276], ['<=', ['get', 'LossMargin'], 0.471595]], '#91cba8', ['all', ['>', ['get', 'LossMargin'], 0.471595], ['<=', ['get', 'LossMargin'], 0.565914]], '#6fb3ae', ['all', ['>', ['get', 'LossMargin'], 0.565914], ['<=', ['get', 'LossMargin'], 0.660234]], '#4d9bb4', ['all', ['>', ['get', 'LossMargin'], 0.660234], ['<=', ['get', 'LossMargin'], 0.754553]], '#2b83ba', '#ffffff']}
        }
],
}