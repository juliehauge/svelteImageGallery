<script>
    import {onMount, onDestroy} from 'svelte'
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

    import { activeListItem, activeMapItem } from './stores.js'
    /* import {listItems} from './consts.js' */

    import {db} from "./firestore.js"
    const uploadedImages = db.collection("uploadedImages")
     uploadedImages.onSnapshot(snap => {
        listItems = snap.docs
    })
    let listItems = []


///// LIST
    let listRef

    onMount ( async () => {

        listRef.addEventListener('scroll', function() {
            const visibleListItems = Array.from(document.getElementsByClassName('list-item')).map()
            const topMostVisible = visibleListItems.indexOf(true)
            if (topMostVisible !== $activeMapItem) {
                activeMapItem.set(topMostVisible)
            }
        })
    })

     // Update list scroll position when active list item is updated via map
     const unsubscribeActiveListItem = activeListItem.subscribe(newActiveListItem => {
         if (listRef) {
             listRef.scrollTop = document.getElementById(`list-item-${newActiveListItem}`).offsetTop
         }
     })

    onDestroy(unsubscribeActiveListItem);

//// MAP

let mapRef;
for (const listItem in listItems) {
    

    const coordinates = ([listItem.data().lng, listItem.data().lat])

    function generateFeature ({coordinates, city, image}, index) {
        return {
            type: 'Feature',
            properties: {
                description: `<img width="100%" src"${listItem.data().url}"/><b>${listItem.data().city}</b>`,
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
            coordinates: coordinates,
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
                    'icon-image': '',
                    'icon-size': 2,
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
    }
    

    const unsubscriveActiveMapItem = activeMapItem.subscribe(newActiveMapItem => {
        if (mapRef) {
            mapRef.flyTo({
                center: listItems[newActiveMapItem].coordinates
            })
        }
    })

    onDestroy(unsubscriveActiveMapItem)


</script>



            <div id="list-items" bind:this="{listRef}">
    {#each listItems as listItem, index}
        <div class="list-item" id="list-item-{index}">
            <!-- <img src={listItem.data().url} alt="" /> -->
            <h2>{listItem.data().city}, {listItem.data().country}</h2>
            <p>{listItem.data().description}</p>
        </div>
    {/each}
</div>
  
<style>

   
  #list-items {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    height: 100%;

  }

  .list-item {
    font-family: sans-serif;
    font-size: 10px;
    line-height: 1.5em;
    width: 90%;
    margin: 0 0.5rem;
    border-bottom: #ccc dotted 2px;
    padding-bottom: 1rem;
    
  }


 /*  img {
    width: 100%;
  } */

 
</style>
