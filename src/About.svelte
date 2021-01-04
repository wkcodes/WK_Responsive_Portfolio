<script>
    //import svelte transitions for main 
</script>

<style>
    main {
        padding-top: 2px;
        padding-left: 25%;
        width: 50%;
        align-items: center;
    }
    section {
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    article {
        padding-top: 1px;
    }
    i {
        padding-left: 10px;
        padding-right: 10px;
        font-size: x-large;
    }
    a {
        text-decoration: none;
        color:black;
    }
    a:hover {
        color:gray;
    }
    h2 {
        padding-top: 10px;
    }
</style>

<main>
    <h1>Hi, I'm Will</h1>
    <p>
        I build full-stack web applications.<br> I recently graduated from the University of Washington Programming Bootcamp, and am currently seeking my first position in the industry. 
    </p>
    <a href="./docs/WK_Resume.pdf"><h2><i class="far fa-file-pdf"></i>Resume</h2></a>
    <article>
        <h3>Tools I'm skilled in:</h3>
        <p>HTML5, CSS3, JavaScript, MySQL, Heroku.</p>
        <section>
            <i class="fab fa-2x fa-git-alt" />
            <i class="fab fa-2x fa-node" />
            <i class="fab fa-2x fa-linux" />
        </section>
    </article>
</main>
