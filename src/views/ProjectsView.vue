<template>
     <div class="container vh-100">
    <div class="row ">

      <h2 class="display-2">Projects</h2>
    </div>
    <div class="education d-flex flex-sm-wrap w-75" v-if="displayProjects">
  <div v-for="pros in displayProjects" :key="pros.id" >
    <!-- <div class="card border-secondary mb-3" style="max-width: 20rem;">
      <div class="card-header"></div>
      <div class="card-body text-secondary">
        <p class="card-title">Name:</p>
        <p class="card-title">Year:</p>
        <p class="card-title">Certificate:{{ pros.vercel }}</p>
        <p class="card-title">Certificate:{{ pros.gitHub }}</p>
        
      </div>
    </div> -->
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img :src="pros.image" class="card-img-top" alt="image">
      <div class="card-body">
        <h5 class="card-title">{{ pros.name }}</h5>
        <p class="card-text">{{ pros.description }}</p>
      </div>
      <div class="card-footer">
        <a :href="pros.gitHub" target="_blank">

          <button ><span>gitHub</span></button>
        </a>
        <a :href="pros.vercel" target="_blank">

<button ><span>Website</span></button>
</a>
      </div>
    </div>
  </div>
  <!-- <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>


       
       -->
      </div>
      </div></div>
  </div>
</template>

<script>
    export default {
      computed: {
    displayProjects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  }, 
    }
</script>


<style>
</style>
