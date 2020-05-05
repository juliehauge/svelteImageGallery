<script>
    import {db, storage} from "./firestore.js"
    
    let articles = []
    const uploadedImages = db.collection("uploadedImages")
    const favorites = db.collection("favorites")


    const addFav = (url, city, country) => {
        favorites.add({
            url: url,
            city: city,
            country: country
        })
    }


    uploadedImages.onSnapshot(snap => {
        articles = snap.docs
    })
</script>

<main>
    <div class="galleryContainer">
        {#each articles as article}
            <div class="imageContainer">
                <img src={article.data().url} alt="" class="uploadedImg" />
                <h3 class="overlay">{article.data().city}, {article.data().country}</h3>
               <button class="btnFav" on:click={addFav(article.data().url, article.data().city, article.data().country)}><img src="./img/emptyHeart.png" alt="" class="btnHeart"></button>
            </div>
        {:else}
         <div><h3>Loading content...</h3></div>
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
        gap: 0.2rem;
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
            transform: scale(1.1);
        }
    }

    .btnFav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.5rem;
        cursor: pointer;
        height: 2rem;
        width: 2rem;

        background-color: #e2f0fa;
    }

  .btnHeart {
        width: 100%;
    
    }

</style>