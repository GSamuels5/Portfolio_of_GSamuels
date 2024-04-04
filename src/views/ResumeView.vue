<template>
  <div class="row">

<h2 class="display-2">Experience</h2>
</div>
     <div class="container">
   

<h2 class="text-white">Education</h2>
<div class="educat  mx-2  w-100   my-3 mb-4 " v-if="displayEducation">
  <div v-for="edu in displayEducation" :key="edu.id" id='fullCard' class="card border-secondary h-100 m-auto mb-3 d-flex ">
  
      <div class="card-header"><h4>{{ edu.institution }}</h4></div>
      <div class="eduCard card-body ">
        <h5 class="card-title ">Name:<span class="data">{{ edu.description }}
        </span>
      </h5>
          
        
        <h5 class="card-title">Certificate:{{ edu.type }} </h5>
        
      </div>
      <div class="card-footer"><h5 class="card-title">Year:<span class="data">{{ edu.year }}</span></h5></div>
    </div>
       
      </div>


          </div>
          <div class="worker">
            <h2>Employment </h2>
          </div>
    
          <h2>Skills</h2>
            <!-- <div class="education d-flex mx-2 justify-content-start w-100 mt-6" v-if="displaySkills">
              <div v-for="skill in displaySkills" :key="skill.id" class="card mb-3  m-auto h-100 " >
        
  <div class="row  mx-0 my-auto">
    <div class=" card-header mb-3 border-black">
        <h5 class="card-title">{{ skill.title }}</h5>
    </div>
    
      <div class="card-body ">
      <img :src="skill.image" class="img-fluid "  id="skillImg" alt="image">
       
      </div>
      <div class="card-footer h-100">
         <p class="card-text">{{skill.experience}}</p>
      </div>
  </div>
</div>
      </div> -->
        <div class="education my-3  mx-4 " v-if="displaySkills">
              <div v-for="skill in displaySkills" :key="skill.id" >
        <!-- <div class="card shadow h-100 " id="skillset">
  <div class="row g-0">
    <div class="col-lg-3 border-black">
      <img :src="skill.image" class="img-fluid image-fit " alt="image">
    </div>
    <div class="">
      <div class="card-body">
        <h5 class="card-title">{{ skill.title }}</h5>
        <p class="card-text">{{skill.experience}}</p>
      </div>
    </div>
  </div>
</div> -->
<div class="card mb-3 h-100 skills ">
  <img :src="skill.image" class="card-img-top image-fluid image-fit " alt="image">
  <div class="card-body">
    <h4 class="card-title">{{ skill.title }}</h4>
    <h5 class="card-text">{{skill.experience}}</h5>
   
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
},
displayExperience(){
  return this.$store.state.experience
}
  },
mounted(){
  this.$store.dispatch('fetchEducation')
this.$store.dispatch('fetchSkills')
this.$store.dispatch('fetchExperience')

}
}

</script>

// <style scoped>
/* @media screen and (min-width: 300px) and (max-width: 900px) {
  .education .card{
    grid-auto-columns: min-content;
    margin-right: auto;
  flex: 0 0 100%;
  margin-bottom: 10px;

  }
}
.education{
  display: flex;
  margin-left: 0;
} */

@media screen and (min-width: 300px) and (max-width: 900px) {
  .education {
    display: inline-flex;
   /* Change from grid to block for stacking */
  }

  .card {
    width: 100%; /* Ensure cards take full width */
    margin-bottom: 20px; /* Add margin between cards */
  }
}

.education {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display two columns */
    justify-items: center;
  /* grid-template-columns: repeat(1, ); */
   /* Allow cards to wrap */
 /* Negative margin to counteract card margins */

  margin-bottom: 20px;


  
}

 .skills{

  width: 50%; /* Ensure card takes full width of its container */
  margin-right: 20px;
margin-bottom: 20px;

  
}

#fullCard{
  margin-bottom: 50px;
  margin-left: 100%;
  background-color: rgb(49, 176, 176);
  color: #fff;
}
.image-fit {
  object-fit: cover; /* Use cover to fill the container while maintaining aspect ratio */
  height: 100%; 
  width: auto;
  /* Ensure the image takes full height of its container */
}
.border-black {
  border: 1px solid #000; /* Add border for demonstration */
}
#skillset{
  display: flex;
  border: #000 solid 2px ;
  margin-bottom: 50px;
  
}
h2{
  color: white;
  text-decoration: underline;
}

</style>