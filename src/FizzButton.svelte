<!--This button takes arguments. Can i make it async?-->
<button on:click={() => handleClick('yaargs')}>sweet button</button>
<!--Count effecting this-->
<button on:click={handleClick}>
	Clicked
	{count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count % 2 === 0}
	<p>fizz</p>
{:else}
	<p>buzz</p>
{/if}
