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
    max-height: 85vh;
    padding: 7rem 2.5rem 0 2.5rem;
    display: flex;
  }

  .pane {
      display: flex;
      flex-direction: column;
      max-height: 85vh;
  }

  .left {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    width: 35%;
    height: 85%;
    justify-content: center;
    overflow: scroll;
    object-fit: contain;
  }

  .right {
    justify-content: space-between;
    width: 65%;
  }

  @media (max-width: 780px) {
      .container {
          padding-top: 8rem;
      }
  }
</style>
