<script>
    import {db, storage} from "./firestore.js"

    let url 
    let city = ""
    let country = ""

    let files = []
    $: file = files[0]

        const uploadImage = async () => {
            const sti = storage
                .ref()
                .child("images/" + file.name)

            const upload = await sti.put(file)
            const urlen = await upload.ref.getDownloadURL()
            url = urlen
        }

        const regInfo = () => {
            const uploadedImages = db.collection("uploadedImages")
            uploadedImages
                .add({
                url: url,
                city, 
                country
            })
        url =
        city=""
        country=""
        } 
</script>

<fieldset>
<legend>Last opp et bilde</legend>
    <div class="container">
        <input type="file" bind:files class="inpFile">
		<button on:click={uploadImage} class="btnBilde">Last opp bildet</button>
	
	    <input class="inpBy" bind:value={city} placeholder="By"> 
		<input class="inpLand" bind:value={country} placeholder="Land">

        <button class="btnReg" on:click|preventDefault={regInfo}>Upload info</button> 
    </div>

	<div class="imgContainer">
		{#if url}
			<img src={url} alt="">
		{/if}
	</div>
</fieldset>

<style>

 legend {
		font-size: 22px;
		text-align: center;

		font-family: sans-serif;
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	fieldset {
		width: 800px;
		margin: 9rem auto;
		padding: 3rem;
	}

	.container {
		line-height: 1rem;
		font-family: sans-serif;

		display: flex;
		flex-direction: column; 
		float: left;

		margin: 1rem 0 0 0;
    }

    .imgContainer {
		border: 1px solid rgb(93, 150, 150);;
		display: flex;
		float: right;
		width: 300px;
		height: 400px;
	}

	img {
		width: 300px;
	}

</style>