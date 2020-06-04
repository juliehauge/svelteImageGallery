<script>
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
    import { activeListItem, activeMapItem } from './stores.js'
    import { onMount, onDestroy } from 'svelte';
    import {db} from "./firestore.js"

    const uploadedImages = db.collection("uploadedImages")
     uploadedImages.onSnapshot(snap => {
        listItems = snap.docs
    })
    let listItems = []

    let mapRef;

    onMount( async () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWVoYXVnZSIsImEiOiJjazUzbHVtNDYwOG5uM21xdHc1dW5hOHJvIn0.KujRaoDzyv3ehKHQaUxqAw'

        mapRef = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/juliehauge/ck5dro2550nxa1ilo9vx8e7ds',
            center: [5.305693, 55.570863],
            zoom: 3
        })

        

        mapRef.on('load', function() {
            listItems.map((item, key) => {

                function generateFeature () {
                    return {
                        type: 'Feature',
                        properties: {
                            description: ``,
                            id: key
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: [item.data().lng, item.data().lat]
                        }
                    }
                }
        
                mapRef.addLayer({
                    id: `places${key}`,
                    type: 'symbol',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: listItems.map(generateFeature)
                        }
                    },
                    layout: {
                    'icon-image': 'attraction-15',
                    'icon-size': 1,
                    'icon-allow-overlap': true
                }})
        
                mapRef.on('click', `places${key}`, function({ features }) {
                    const match = features[key]
                    const coordinates = match.geometry.coordinates.slice()

                        new mapboxgl.Popup()
                                .setLngLat([item.data().lng, item.data().lat])
                                .setHTML(`<img width="100%" src="${item.data().url}"><b><p style="text-align=:center">${item.data().city}, ${item.data().country}</p></b>`)
                                .addTo(mapRef) 
                            
                            activeListItem.set(match.properties.id)
                        })

                mapRef.on('mouseenter', `places${key}`, function(){
                    mapRef.getCanvas().style.cursor = 'pointer'
                })
                mapRef.on('mouseleave', `places${key}`, function(){
                    mapRef.getCanvas().style.cursor = ''
                })
            })
        })
    })

     /* const coordinates = [listItem.data().lng, listItem.data().lat]
        List.on('click', function() {
                 if (mapRef) {
                mapRef.easeTo({
                    center: coordinates,
                    zoom: 10,
                    duration: 3000
                })
            }
        }) */

</script>


<div id="map"></div>


<style>
    #map {
        width: 100%;
        height: 100%;
    }


    #map:before {
        box-shadow: 20px 0 10px -10px rgba(0, 0, 0, 0.15) inset;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        width: 20px;
        z-index: 1000;
    }

    .mapboxgl-popup-close-button {
        font-weight: 800;
        font-size: 18px;
    }
   
</style>