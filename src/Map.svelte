<script>
    import List from './List.svelte'
    import Mapbox from './Mapbox.svelte'
   /*  import {onMount} from "svelte"

    let cities = []

    onMount ( async () => {
        const response = await fetch("https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson")
        const json = await response.json();
        cities = json.results
    }) */

    /* mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWVoYXVnZSIsImEiOiJjazUzbHVtNDYwOG5uM21xdHc1dW5hOHJvIn0.KujRaoDzyv3ehKHQaUxqAw'
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    }); */
</script>


   <div class="container">
        <div class="pane left">
            <List />
        </div>
        <div class="pane right">
            <Mapbox />
        </div>
   
   </div>


   

<style>
  .container {
    height: 100vh;
    padding-top: 10rem;
  }

  .pane {
    
    max-height: 100vh;
  }

  .left {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    width: 35%;
    justify-content: center;
    overflow: scroll;
    object-fit: contain;
  }

  .right {
    justify-content: space-between;
    width: 65%;
  }
</style>
