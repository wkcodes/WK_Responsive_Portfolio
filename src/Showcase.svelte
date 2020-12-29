<script>
    //This component could be a container for the projects.
    //give it a shadow
</script>

<style>
 container {
     display: grid;
     grid-template-columns: 200px 200px 200px;
     gap:20px;
     padding-top: 30px;
     grid-template-rows: auto;
     justify-content: center;
     align-items: center;
     height: 100%;
 }
 section {
     height: 200px;
     width: 200px;
     background-color: rgb(64, 185, 64);
 }
 #project1 {
 }
    
</style>
<!--preview component, app decides which project to load based on zeros clicked -->
<container>
<section id="project1">
    <h2>Project One </h2>
    <p>Project description lorem ipsum</p>
</section>
<section id="project2">
    <h2>Project Two </h2>
    <p>Project description lorem ipsum</p>
</section>
<section id="project2">
    <h2>Project Three </h2>
    <p>Project description lorem ipsum</p>
</section>
</container>
<h3>See More(github link)</h3>