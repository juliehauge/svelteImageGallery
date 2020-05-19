<script>
    import List from './List.svelte'
    import Mapbox from './Mapbox.svelte'

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
    padding-top: 8rem;
    display: flex;
  }

  .pane {
      display: flex;
      flex-direction: column;
    
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
