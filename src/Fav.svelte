<script>
    import {db, storage} from "./firestore.js"
    
    const favorites = db.collection("favorites")

    let addedfavorites = []
    favorites.onSnapshot( snap => {
        addedfavorites = snap.docs
    })

</script>

<main>

<div class="galleryContainer">
    {#each addedfavorites as favorite}
        <div class="imageContainer">
            <img src={favorite.data().url} alt="" class="uploadedImg" />
                <h3 class="overlay">{favorite.data().city}, {favorite.data().country}</h3>
                <div class="containerHeart"><img src="./img/fullHeart.png" alt="" id="btnHeart"></div>
        </div>
    {:else}
        <h3>Loading content...</h3>
    {/each}
</div>
</main>

<style>
    main {
        padding-top: 10rem;
        width: 100%;
    }

    .galleryContainer {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 0.9rem;
        justify-content: center;

        width: 800px;
        margin: 0 auto;
        z-index: 1;
    }
    .imageContainer {
        width: 300px;
        margin: 0; 
        position:relative;
        display:inline-block;
    }

    .uploadedImg {
        width: 300px;
        
    }

    .overlay {
        display:none;
    }
    .imageContainer:hover .overlay {
        width:100%;
        height: 2.5rem;
        padding: 0.5rem;

        background:#1e1f26c9;
        color: #e2f0fa;
        font-weight: 300;
        
        position:absolute;
        bottom:0;
        left:0;
        display:block;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;
    }

   .imageContainer:hover .uploadedImg {
       animation: zoom 2s forwards;
       

   }
   .imageContainer:hover .overlay {
       animation: zoom 2s forwards;

   }

    @keyframes zoom {
        to {
            transform: scale(1.05);
        }
    }

   /*  .btnFav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.5rem;
        cursor: pointer;
        height: 2rem;
        width: 2rem;

        background-color: #e2f0fa;
    } */

    .containerHeart {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.5rem;
        padding: 0.3rem;
        border-radius: 50%;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        background-color: #e2f0faa1;

    }

   #btnHeart {
        width: 100%;
    } 

</style>