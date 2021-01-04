<script>
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
	import Footer from "./Footer.svelte";
	import Logo from "./Logo.svelte";
	import Menu from "./Menu.svelte";
	import Showcase from "./Showcase.svelte";
	import Projects from "./Projects.svelte";	

	console.log("logging from App.svelte");

	let appChoice
	
</script>

<style>
	main {
		box-sizing: border-box;
		display:grid;
		font-family: "Courier New", Courier, monospace;
		color:black;
		text-align: center;
		min-width: 500px;
		max-width: 100%;
		overflow-x: hidden;
		margin:auto;
	}
</style>

<!-- Main part of the page-->
<main>	

	<section id="header">
		<Logo></Logo>
	</section>

	<section id="menu">
		<Menu bind:menuSelection={appChoice}></Menu>
	</section>

	<section>
		{#if appChoice === "contact"}
		<Contact></Contact>
		{:else if appChoice === "projects"}
		<Showcase></Showcase>
		{:else}
		<About></About>
		{/if}
	</section>

	<Footer></Footer>
</main>

