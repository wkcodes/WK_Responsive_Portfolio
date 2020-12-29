<script>
    
    //Make the buttons change color when clicked, only one can be colored at a time maybe use the if statements to change color variable and apply it to style

    export let menuSelection;

    function handleClick(arg) {
        if(arg === "about"){
            console.log("clicked about");
            menuSelection = "about";
        }if(arg === "projects"){
            console.log("clicked projects");
            menuSelection = "projects";
        }if(arg === "contact"){
            console.log("clocked contact");
            menuSelection = "contact";
        }
    }

    let color;

</script>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    h3 {
        padding-left: 5px;
        padding-right: 5px;
    }
    h3:hover {
       color: grey;
       cursor: pointer;
    }
    #about {
        grid-column-start: 3;
    }

</style>

<main>
    <h3 id="about" on:click={() => handleClick("about")}>About</h3>
    <h3 id="projects" on:click={() => handleClick("projects")}>Projects</h3>
    <h3 id="contact" on:click={() => handleClick("contact")}>Contact</h3>
</main>