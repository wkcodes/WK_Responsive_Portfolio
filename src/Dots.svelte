<script>
  //Dots
 
  export let dotOne = "0";
  export let dotTwo = "0";
  export let dotThree = "0";
  
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  //increment handler
  function incrementDot(dot, id) {
    if(id==="dotOne"){
      /*for instance we need to load the preview for the given project, 
      export the state to the component preview?*/
      dotOne++;
    }
    else if(id==="dotTwo"){
      dotTwo++;
    }
    else{
      dotThree++;
    }
   }

   //dispatch dot 
   function say() {
     dispatch(dotOne, {
       value: dotOne
     })
   }
   
</script>
  
<style>
  .dots {
    display: inline;
    cursor: pointer;
    font-size: 50px;
  }
  #dotThree {
    color: paleturquoise;
  }
</style>

<div>
  <p class="dots" id="dotOne" on:click={incrementDot(dotOne,this.id)}>{dotOne}</p>
  <p class="dots" id="dotTwo" on:click={incrementDot(dotTwo,this.id)}>{dotTwo}</p>
  <p class="dots" id="dotThree" on:click={incrementDot(dotThree,this.id)}>{dotThree}</p>
</div>

