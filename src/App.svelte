<script>
	import Gallery from "./Gallery.svelte"
	import Upload from "./Upload.svelte"
	import Fav from "./Fav.svelte"

	export let meny = 1
	
</script>

<div id="meny">
	<img src="./img/interface.png" alt="" class="headerImg">
	<a href="/" on:click|preventDefault={() => (meny = 1)}>Gallery</a>
	<a href="/" on:click|preventDefault={() => (meny = 2)}>Upload</a>
	<a href="/" on:click|preventDefault={() => (meny = 3)}>Favourites</a>
</div>


{#if meny === 1}
	<Gallery />
{:else if meny === 2}
	<Upload />
{:else if meny === 3}
	<Fav />
{/if}

<style>
	#meny {
		background-color:#1e1f26;
		color: white;
		width: 100%;
		height: 12vh;

		display: grid;
		grid-template-columns: 1fr auto auto auto;
	
		align-items: center;
		gap: 3rem;
		position: fixed;
		top: 0;
		z-index: 2;
	}

	#meny a {
		font-family: sans-serif;
		font-size: 16px;
		color: #b3cde0;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 300;
		
		margin: 0 1rem;
		text-decoration: none;
		padding-right: 2rem;
	}

	#meny a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: rgb(0,80,160);
	}

	.headerImg {
		width: 8%;
		padding-left: 1rem;
	}
</style>