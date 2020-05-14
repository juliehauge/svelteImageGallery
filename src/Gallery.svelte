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

        const liked = document.getElementById("btnHeart" + url)
        liked.src = "./img/fullHeart.png"
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
               <div class="btnFav"><img on:click={addFav(article.data().url, article.data().city, article.data().country)} src="./img/heart.png" class="btnHeart" alt="" id='btnHeart{article.data().url}'></div>
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
        gap: 0.9rem;
        justify-content: center;

        max-width: 800px;
        margin: 0 auto;
     
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
        font-family: sans-serif;
        
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

    .btnFav {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.5rem;
        padding: 0.3rem;
        border-radius: 50%;
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;

        background-color: #e2f0faa1;
    }

    .btnHeart {
        width: 100%;
    
    }

    @media (max-width: 1600px) {
		  .galleryContainer {
            display: grid;
            grid-template-columns: auto auto auto auto;
          } 
	}

     @media (max-width: 1240px) {
		  .galleryContainer {
            display: grid;
            grid-template-columns: auto auto auto;
          }
	}

    @media (max-width: 945px) {
		  .galleryContainer {
            display: grid;
            grid-template-columns: auto auto;
          }
	}

     @media (max-width: 640px) {
		  .galleryContainer {
            display: grid;
            grid-template-columns: auto;
            justify-content: center;
            align-items: center;
          }
	}

</style>