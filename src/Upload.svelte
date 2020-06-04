<script>
    import {db, storage} from "./firestore.js"

    let url 
    let city = ""
	let country = ""
	let description = ""
	let lng 
	let lat

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
				lng,
				lat,
                city, 
				country,
				description,
				isLiked: false
				
            })
		url =
		lng =
		lat =
        city=""
        country=""
		description=""
		
        } 
</script>

<main>
<fieldset>
<legend><img src="./img/technology.png" alt="" class="camera"></legend>
    <div class="container">
		{#if url}
		<div class="valgtFil">Bildet du har valgt er: {file.name}</div>
	
	    <input class="inpBy" bind:value={city} placeholder="By"> 
		<input class="inpLand" bind:value={country} placeholder="Land/stat">
		<input id="info" class="inpDescription" bind:value={description} placeholder="Informasjon">
		<div class="latLng">
		<input class="inpLat" bind:value={lat} placeholder="Breddegrad">
		<input class="inpLng" bind:value={lng} placeholder="Lengdegrad">
		</div>
		

        <button class="btnReg" on:click|preventDefault={regInfo}>Registrer</button> 
		{:else}
		<input type="file" bind:files class="inpFile">
		<button on:click={uploadImage} class="btnBilde">Last opp bildet</button>
		{/if}
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
		text-align: center;
		width: 60px;
	}

	.camera {
		width: 100%;
	}

	fieldset {
		max-width: 650px;
		margin: auto;
		padding: 3rem;
		background-color: #e2f0fac0;
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
	.latLng{
		display: grid;
		grid-template-columns: auto auto;
		gap: 0.2rem;
	}
	.inpLat {
		max-width: 140px;
	}
	.inpLng {
		max-width: 140px;
	}
	.inpBy{
		margin-top: 1rem;
	}

	.valgtFil {
		padding: 0.5rem;
		border-bottom: #1e1f26 solid 1px;
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