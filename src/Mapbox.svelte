<script>
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
    import { activeListItem, activeMapItem } from './stores.js'
    import { onMount, onDestroy } from 'svelte';
    import {listItems} from './consts.js'


   let mapRef;
   

    function generateFeature ({coordinates, city, image}, index) {
        return {
            type: 'Feature',
            properties: {
                description: `<img width="100%" src"${image}"/><b>${city}</b>`,
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
            coordinates: listItems[0].coordinates,
            zoom: 1
        })

        

        mapRef.on('load', function() {

 
// create the marker
        
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
                layout: {
          'icon-image': 'attraction-15',
          'icon-size': 1,
          'icon-allow-overlap': true
        }

            })

             

            mapRef.on('click', 'places', function({ features }) {
                const match = features[0]
                const coordinates = match.geometry.coordinates.slice()
    
               new mapboxgl.Popup()
                    .setLngLat(match.coordinates)
                    .setHTML(match.properties.description)
                    .addTo(mapRef) 
                
                activeListItem.set(match.properties.id)
            })

            mapRef.on('mouseenter', 'places', function(){
                mapRef.getCanvas().style.cursor = 'pointer'
            })
            mapRef.on('mouseleave', 'places', function(){
                mapRef.getCanvas().style.cursor = ''
            })
        })
    })

    const unsubscriveActiveMapItem = activeMapItem.subscribe(newActiveMapItem => {
        if (mapRef) {
            mapRef.flyTo({
                center: listItems[newActiveMapItem].coordinates
            })
        }
    })

    onDestroy(unsubscriveActiveMapItem)

    

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