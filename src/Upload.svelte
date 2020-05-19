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
<legend><img src="./img/technology.png" alt="" class="camera"></legend>
    <div class="container">
        <input type="file" bind:files class="inpFile">
		<button on:click={uploadImage} class="btnBilde">Last opp bildet</button>
	
	    <input class="inpBy" bind:value={city} placeholder="By"> 
		<input class="inpLand" bind:value={country} placeholder="Land/stat">
		<input id="info" class="inpDescription" bind:value={description} placeholder="Informasjon">

        <button class="btnReg" on:click|preventDefault={regInfo}>Registrer</button> 
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

	.camera {
		width: 12%;
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