<template>
  <div class="row">

<h2 class="display-2">Resume</h2>
</div>
     <div class="container">
   

<h2>Education</h2>
<div class="education d-flex mx-2  w-100  my-3" v-if="displayEducation">
  <div v-for="edu in displayEducation" :key="edu.id" >
    <div id='fullCard' class="card border-secondary mb-1 mx-2 g-0 " >
      <div class="card-header"><h4>{{ edu.institution }}</h4></div>
      <div class="eduCard card-body">
        <h5 class="card-title ">Name:<span class="data">{{ edu.description }}
        </span>
      </h5>
          
        <h5 class="card-title">Year:<span class="data">{{ edu.year }}</span></h5>
        <h5 class="card-title">Certificate:{{ edu.type }} </h5>
        
      </div>
    </div>
       
      </div>


          </div>
    
          <h3>Skills</h3>
            <div class="education d-inline justify-content-start w-100" v-if="displaySkills">
              <div v-for="skill in displaySkills" :key="skill.id" >
        <div class="card mb-3 " style="max-width: 500px;">
  <div class="row g-0">
    <div class="col-md-4 border-black">
      <img :src="skill.image" class="img-fluid rounded-start" alt="image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ skill.title }}</h5>
        <p class="card-text">{{skill.experience}}</p>
      </div>
    </div>
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
@media screen and (min-width: 300px) and (max-width: 900px) {
  .education .card{
    grid-auto-columns: min-content;
    margin-right: auto;
  flex: 0 0 100%;
  margin-bottom: 10px;

  }
}

</style>