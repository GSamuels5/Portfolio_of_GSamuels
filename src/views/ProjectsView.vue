<template>
     <div class="container">
    <div class="row">

      <h2 class="display-2">Projects</h2>
    </div>
    <div class="education d-flex flex-sm-wrap w-75" v-if="displayProjects">
  <div v-for="pros in displayProjects" :key="pros.id" >
    <div class="card border-secondary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{ pros.name }}</div>
      <div class="card-body text-secondary">
        <p class="card-title">Name:{{ pros.description }}</p>
        <p class="card-title">Year:{{pros.image }}</p>
        <p class="card-title">Certificate:{{ pros.vercel }}</p>
        <p class="card-title">Certificate:{{ pros.gitHub }}</p>
        
      </div>
    </div>
       </div>
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
