<!--WK Codes logo-->
<main>
<img src="./assets/Wklogo3.gif" alt="logo" class="center" style="margin-left: 20px;">

</main>

<style>
    main {
        color: green;
        position: right;
    }
</style>

<script>

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<h2>I'm Will, a full-stack web developer.</h2>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>