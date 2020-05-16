<script>
    import {db, storage} from "./firestore.js"

    let url 
    let city = ""
	let country = ""
	let description = ""

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
				country,
				description
            })
        url =
        city=""
        country=""
        description=""
        } 
</script>

<main>
<fieldset>
<legend>Upload an image</legend>
    <div class="container">
        <input type="file" bind:files class="inpFile">
		<button on:click={uploadImage} class="btnBilde">Upload image</button>
	
	    <input class="inpBy" bind:value={city} placeholder="City"> 
		<input class="inpLand" bind:value={country} placeholder="Country">
		<input id="info" class="inpDescription" bind:value={description} placeholder="Description">

        <button class="btnReg" on:click|preventDefault={regInfo}>Upload info</button> 
    </div>

	<div class="imgContainer">
		{#if url}
			<img src={url} alt="">
		{/if}
	</div>
</fieldset>
</main>

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
		max-width: 650px;
		margin: auto;
		padding: 3rem;
	}

	.container {
		line-height: 1rem;
		font-family: sans-serif;
		max-width: 300px;
		display: flex;
		flex-direction: column; 
		float: left;

		margin: auto;
	}
	main {
		padding-top: 10rem;
		width: 100%;
	}

	#info {
		height: 200px;
		max-width: 300px;
		margin: 0 0 0.5rem 0;
	}

    .imgContainer {
		border: 1px solid #1e1f26;
		display: flex;
		float: right;
		width: 300px;
		height: 400px;

		margin: auto;
	}

	img {
		width: 300px;
	}

	@media (max-width: 740px) {
		  fieldset {
			display: flex;
			flex-direction: row;
          }
	}
</style>