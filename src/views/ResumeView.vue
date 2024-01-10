<template>
  <div class="row">

<h2 class="display-2">Resume</h2>
</div>
     <div class="container">
   

<h3>Education</h3>
<div class="education d-flex flex-sm-wrap w-75" v-if="displayEducation">
  <div v-for="edu in displayEducation" :key="edu.id" >
    <div class="card border-secondary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{ edu.institution }}</div>
      <div class="card-body text-secondary">
        <h5 class="card-title">Name:{{ edu.description }}</h5>
        <h5 class="card-title">Year:{{ edu.year }}</h5>
        <h5 class="card-title">Certificate:{{ edu.type }}</h5>
        
      </div>
    </div>
       
      </div>


          </div>
          <h3>Skills</h3>
<div class="education d-flex flex-sm-wrap w-75" v-if="displaySkills">
  <div v-for="skill in displaySkills" :key="skill.id" >
    <div class="card border-secondary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{ skill.title }}</div>
      <div class="card-body text-secondary">
        <h5 class="card-title">Name:{{ skill.experience }}</h5>
 
        
      </div>
    </div>
       
      </div>


          </div>
          
  </div>

</template>

<script>
export default{
  computed:{
displayEducation(){
  return this.$store.state.education

},
displaySkills(){
  return this.$store.state.skills
}
  },
mounted(){
  this.$store.dispatch('fetchEducation')
this.$store.dispatch('fetchSkills')

}
}

</script>

<style scoped>

</style>