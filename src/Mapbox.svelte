<script>
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
    import { activeListItem, activeMapItem } from './stores.js'
    import { onMount, onDestroy } from 'svelte';
    import List from './List.svelte'

    import {db} from "./firestore.js"
    const uploadedImages = db.collection("uploadedImages")

   
    export let listItems = []

    const coordinates = uploadedImages.doc().coordinates
    const city = uploadedImages.doc().city
    const url = uploadedImages.doc().url


    let mapRef;
   

    function generateFeature ({city, url, coordinates}, index) {
        return {
            type: 'Feature',
            properties: {
                description: `<img width="100%" src"${url}"/><b>${city}</b>`,
                id: index
            },
            geometry: {
                type: 'Point',
                coordinates
            }
        }
    }

    onMount( async () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWVoYXVnZSIsImEiOiJjazUzbHVtNDYwOG5uM21xdHc1dW5hOHJvIn0.KujRaoDzyv3ehKHQaUxqAw'

        mapRef = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/juliehauge/ck5dro2550nxa1ilo9vx8e7ds',
           coordinates,
            zoom: 5
        })

        mapRef.on('load', function() {
            mapRef.addLayer({
                id: 'places',
                type: 'symbol',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: listItems.map(generateFeature)
                    }
                },
                /* layout {

                }*/
            })


        })
    })
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

</style>