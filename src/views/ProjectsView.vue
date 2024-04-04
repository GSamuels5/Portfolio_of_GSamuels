<template>
     <div class="container-fluid  ">
    <div class="row ">

      <h2 class="display-2">Projects</h2>
    </div>
    <div class="col">
      <div class=" d-flex flex-sm-wrap justify-content-center" v-if="displayProjects">
    <div v-for="pros in displayProjects" :key="pros.id" >
      <div class="row row-cols-1 d-inline  mb-4 ">
    <div class="col">
      <div class="card ">
        <img :src="pros.image" class="card-img-top d-flex justify-content-center mx-auto " alt="image" style="width: 16rem ; height: 13rem;">
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
        </div>
        </div></div>
    </div>

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
