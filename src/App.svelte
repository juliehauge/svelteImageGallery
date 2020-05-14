<script>
	import {onMount} from "svelte"
	import Gallery from "./Gallery.svelte"
	import Upload from "./Upload.svelte"
	import Fav from "./Fav.svelte"
	import Map from "./Map.svelte"


	export let meny = 1

		const openNav = () => {
			const closeX = document.getElementById("closeX")
			closeX.style.display = "block"

			const showNav = document.getElementById("smallnav")
			showNav.style.display = "grid"
		}
	
		const closeNav = () => {
			const smallnav = document.getElementById("smallnav")
			smallnav.style.display = "none"

		}
</script>
<div id="meny">
<div class="imageContainer" ><img src="./img/interface.png" alt="" class="headerImg"></div>
	<div on:click|preventDefault={openNav} class="menu-button" >
		<div class="menu__bars">
			<div class="menu__bar"></div>
			<div class="menu__bar"></div>
			<div class="menu__bar"></div>
		</div>
	</div> 
	<nav id="smallnav" >
		<a href="/" class="btn active" on:click|preventDefault={() => (meny = 1)}>Gallery</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 2)}>Favourites</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 3)}>Upload</a>
		<a href="/" class="btn" on:click|preventDefault={() => (meny = 4)}>Map</a>
		<a href="/" id="closeX" class="closebtn" on:click|preventDefault={closeNav}> <img src="./img/x.png" alt=""id="ximg"></a>
	</nav>

	<nav id="topnav" >
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
		z-index: 2;
	}

	#meny a:link {
		color: #b3cde0;
	}
	#meny a:hover {
		color: #fd8469;
	}

	/* #meny a.active,  a:hover {
		color: #fd8469;
	}  */

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
		position: absolute;
		top: 3vh;
		right: 1.5rem;
		color: black;
		width: 30px;
		height: 30px;
		z-index: 9000;
		cursor: pointer;
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

	.closebtn {
		display: none;
		width: 20px;
		position: absolute;
		right: 1.7rem;
	}

	#ximg{
		width: 100%;
		
	}

	

	@media (max-width: 780px) {
		.menu-button {
			display: block;
		}
		#smallnav {
			display: none;
			grid-template-columns: auto auto auto auto auto;
			gap: 2rem;
			position: absolute;
			top: 5.5rem;
			background-color: #1e1f26;
			width:100%;
			height: 5vh;
			align-items: center;
			justify-content: center;

		}
		#smallnav a {
			font-family: sans-serif;
			font-size: 12px;
			color: #b3cde0;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-weight: 300;
			
			text-decoration: none;
		}
		#topnav {
			display: none;
		}
	} 
	@media (min-width: 780px) {
		.menu-button {
			display: none;
		}
		#smallnav {
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