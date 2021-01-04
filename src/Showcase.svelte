<script>
    import { onMount } from "svelte";

    let switch1 = false;
    let switch2 = false;
    let switch3 = false;

    onMount(() => {
        // gets id's of modal elements
    });

    function handleClick(arg) {
        if (arg === "1") {
            console.log("clicked mythos");
            switch1 = true;
        }
        if (arg === "2") {
            console.log("clicked employee tracker");
            switch2 = true;
        }
        if (arg === "3") {
            console.log("clocked this site");
            switch3 = true;
        }
    }

    //combine these toggle functions
    function toggleSwitch1(modalSwitch) {
        if(modalSwitch){
            switch1 = false;
        }else{
            switch1 = true;
        }
    }

    function toggleSwitch2(modalSwitch) {
        if(modalSwitch){
            switch2 = false;
        }else{
            switch2 = true;
        }
    }

    function toggleSwitch3(modalSwitch) {
        if(modalSwitch){
            switch3 = false;
        }else{
            switch3 = true;
        }
    }

</script>

<style>
    container {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        gap: 20px;
        padding-top: 30px;
        grid-template-rows: auto;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    section {
        height: 200px;
        width: 200px;
    }
    section:hover{
        opacity: 0.5;
        cursor: pointer;
    }

    h2 {
        color: black;
        background-color: lightgray;
    }
    #project1 {
        background-image: url(../assets/MythosThumb.png);
    }
    #project2 {
        background-image: url(../assets/WKCThumb.png);
    }
    #project3 {
        background-image: url(../assets/ETThumb.png);
    }

    /* Modal styles */

    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
    }

        .modal-content {
        background-color: white;
        margin: 20% auto;
        padding: 20px;
        width: 70%;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),
            0 7px 20px 0 rgba(0, 0, 0, 0.2);
    }

    .closeBtn {
        float: right;
        font-size: 30px;
    }

    .closeBtn:hover,
    .closeBtn:focus {
        color: lightgray;
        text-decoration: none;
        cursor: pointer;
    }
    img {
        max-width: 75%;
        max-height: 75%;
    }
    a{
        color: black;
        text-decoration: none;
    }
    a:hover{
        color: lightgray;
    }
</style>

<!--find best way to get reference to element, bind? get element?-->
<!--give projects the open-modal class?-->


{#if switch1}
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <span class="closeBtn" on:click={() => toggleSwitch1(switch1)}>&times;</span>
        <h1>Mythos: </h1>
        <p>Fantasy themed blog</p>
        <img src="./assets/Mythos.jpeg" alt="fantasy setting dragon and bard, form inputs">
        <p>React app that allows users to create a profile and post their "myths". I was the project manager, handled deployment, as well as database admin. Implemented sequelize migration, and schema additions as needed. Managed deployment issues as the app was transitioned from a jQuery frontend to React. Created infrastructure to ensure environment variables and database credentials were secure. Built on MySQL, Express and Node backend.</p>
        <a href="https://github.com/wkcodes/Mythos"><h3>Repo</h3></a>
    </div>
</div>
{/if}

{#if switch2}
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <span class="closeBtn" on:click={() => toggleSwitch2(switch2)}>&times;</span>
        <h1>WK Codes</h1>
        <p>Portfolio</p>
        <img src="./assets/WKCcode.png" alt="fantasy setting dragon and bard, form inputs">
        <p>An informative web page made with Svelte-a reactive. Different components are loaded using Svelte's control flow structure. The static build is routed through a simple Express server in Node, and hosted on Heroku.</p>
        <a href="https://github.com/wkcodes/WK_Responsive_Portfolio"><h3>Repo</h3></a>
    </div>
</div>
{/if}

{#if switch3}
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <span class="closeBtn" on:click={() => toggleSwitch3(switch3)}>&times;</span>
        <h1>Employee Tracker</h1>
        <p>Organization management tool</p>
        <img src="./assets/ET.png" alt="fantasy setting dragon and bard, form inputs">
        <p>CLI utility for managing a business's data. Allows the user to add and view departments, employees and roles. Implements the inquirer npm package. Uses the asynchronous .then() method to query a MySQL database for persistent storage.</p>
        <a href="https://github.com/wkcodes/WK_Employee_Tracker"><h3>Repo</h3></a> 
    </div>
</div>
{/if}


<!--project boxes-->
<container>
    <section id="project1" on:click={() => handleClick('1')}>
        <h2>Mythos</h2>
    </section>
    <section id="project2" on:click={() => handleClick('2')}>
        <h2>This site</h2>
    </section>
    <section id="project3" on:click={() => handleClick('3')}>
        <h2>Employee Tracker</h2>
    </section>
</container>
<a href="https://github.com/wkcodes"><h3>More</h3></a>
