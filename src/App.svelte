<script>
	import {onMount} from "svelte"
	import Gallery from "./Gallery.svelte"
	import Upload from "./Upload.svelte"
	import Fav from "./Fav.svelte"
	import Map from "./Map.svelte"


	export let meny = 1

	const openNav = () => {
		const showNav = document.getElementById("topnav")
		showNav.style.display = "grid"
		showNav.style.gridTemplateColumns = "auto auto auto auto"
		showNav.style.position = "absolute"
		showNav.style.top = "5.5rem"
		showNav.style.backgroundColor = "#1e1f26"
		showNav.style.width = "100%"
		showNav.style.height = "5vh"
		showNav.style.alignItems = "center"
		showNav.style.justifyContent ="center" 
	}

	const closeNav = () => {
		const showNav = document.getElementById("topnav")
		showNav.style.display = "none"
	}
	
</script>
	<div on:click={openNav} class="menu-button" >
		<div class="menu__bars">
			<div class="menu__bar"></div>
			<div class="menu__bar"></div>
			<div class="menu__bar"></div>
		</div>
	</div> 
<div id="meny">
	<div class="imageContainer" ><img src="./img/interface.png" alt="" class="headerImg"></div>
	<nav id="topnav">
		<a href="/" class="btn active" on:click|preventDefault={() => (meny = 1)}>Gallery</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 2)}>Favourites</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 3)}>Upload</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 4)}>Map</a>
	</nav>
</div>


{#if meny === 1}
	<Gallery />
{:else if meny === 2}
	<Fav />
{:else if meny === 3}
	<Upload />
{:else if meny === 4}
	<Map />
{/if}

<style>
	#meny {
		background-color:#1e1f26;
		width: 100%;
		height: 12vh;
		position: fixed;

		/* display: grid;
		grid-template-columns: 1fr auto auto auto;
	
		align-items: center;
		justify-content: right;
		gap: 3rem;
		top: 0;
		z-index: 2; */
	}

	#topnav a {
		font-family: sans-serif;
		font-size: 16px;
		color: #b3cde0;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 300;
		
		margin: 0 1.5rem;
		text-decoration: none;
	}

	#meny a:link {
		color: #b3cde0;
	}
	#meny a:hover {
		color: #fd8469;
	}

	#meny a.active,  a:hover {
		color: #fd8469;
	} 

	.imageContainer {
		width: 75px;
		position: absolute;
		margin: 0.3rem 1.5rem;
	}

	.headerImg {
		width: 100%;
	
		padding-left: 1rem;
	}

 	.menu-button {
		display: none;
		position: fixed;
		top: 20px;
		right: 1.5rem;
		color: black;
		width: 30px;
		height: 30px;
		z-index: 9000;
	}

	.menu-button .menu__bars {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		padding: 8px 0;
		pointer-events: none;
	}
	.menu-button .menu__bar {
		width: 35px;
		height: 5px;
		margin: 0 auto 5px;
		background-color: #b3cde0;
	}

	/* .show {
		display: grid;
		grid-template-columns: auto auto auto auto;
		position: absolute;
		top: 6rem;
		background-color: #1e1f26;
		width:100%;
		height: 5vh;
		align-items: center;
		justify-content: center;
	} */

	

	@media (max-width: 780px) {
		.menu-button {
			display: block;
		}
		#topnav {
			display: none;

		}
	} 
	@media (min-width: 780px) {
		.menu-button {
			display: none;
		}
		#topnav {
			width: 100%;
			height: 100%;
			position: absolute;
			display: grid;
			grid-template-columns: auto auto auto auto;
		
			align-items: center;
			justify-content: right;
			gap: 3rem;
			z-index: 2;
		}
			#topnav a {
			font-family: sans-serif;
			font-size: 16px;
			color: #b3cde0;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-weight: 300;
			
			margin: 0 1.5rem;
			text-decoration: none;
		}
	} 

	
 


</style>