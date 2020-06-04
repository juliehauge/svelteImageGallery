<script>
    import {onMount, onDestroy} from 'svelte'
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
    import { activeListItem, activeMapItem } from './stores.js'
    import {db} from "./firestore.js"

    const uploadedImages = db.collection("uploadedImages")
     uploadedImages.onSnapshot(snap => {
        listItems = snap.docs
    })
    let listItems = []
    let listRef

///// LIST
    /* 
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

    onDestroy(unsubscribeActiveListItem); */


</script>

     <div id="list-items" bind:this="{listRef}">
        {#each listItems as listItem, index}
            <div class="list-item" id="list-item-{index}">
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
 
</style>
