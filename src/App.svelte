<script>
	import About from "./About.svelte";
	import Logo from "./Logo.svelte";
	import Contact from "./Contact.svelte";
	import Menu from "./Menu.svelte";
	import Showcase from "./Showcase.svelte";
	import Projects from "./Projects.svelte";

	let codeExample ="./assets/code-1076533_640.jpg";
	let mythosPreview = "./assets/Mythos.jpeg";

	let fizzbuzz = 1;
	//on click anywhere increments it, print the num and display fizz, buzz, or fizzbuzz, maybe use bind like earlier if i make it its own component

	console.log("logging from App.svelte");

	function handleClick(args1) {
		fizzbuzz++;
	}
	let appChoice
	
	console.log(appChoice)
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
<main on:click={() => handleClick()}>	

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
		<Projects></Projects>
		{:else}
		<About></About>
		{/if}
	</section>

	<!-- {#if fizzbuzz}
		<p>fizzbuzz</p>
	{/if} -->
	
</main>

