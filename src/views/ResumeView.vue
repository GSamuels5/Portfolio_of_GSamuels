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
    <div class="experience"  v-if="displayExperience">
      <div class="row">

        <div class="col" v-for="exp in displayExperience" :key="exp.id">
      <div class="card " id="exp">
        <div class="card-body ">
          <h4 class="card-title  "><b>Company:</b> <span>{{ exp.company }}</span></h4>
          <h5 class="card-text "><b>Position:</b> <span>{{ exp.position }}</span></h5>
          <h5 class="card-text "><b>Duration:</b> <span>{{ exp.year }}</span></h5>
          <h5 class="card-text "><b>Reason for leaving:</b> <span>{{ exp.left }}</span> </h5>
        </div>
      </div>
    </div>
      </div>
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
        <div class="education my-5 gap-3 mx-4 " v-if="displaySkills">
              <div v-for="skill in displaySkills" :key="skill.id" >
<div class="card  h-100 skills my-3  justify-content-space-between" style="max-width: 300px;">
  <img :src="skill.image" class="card-img-top image-fluid image-fit " alt="image" style=" height: 10rem;">
  <div class="card-body">
    <h4 class="card-title">{{ skill.title }}</h4>
    <h5 class="card-text">{{skill.experiences}}</h5>
   
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
  .skills{
    display:flexbox;
  }
}

.education {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Display two columns */
    justify-items: center;
  /* grid-template-columns: repeat(1, ); */
   /* Allow cards to wrap */
 /* Negative margin to counteract card margins */


  
}
b{
margin: 0;
}
span{
  margin-left:80px;
}
#exp{
justify-content: flex;
background-color: #000;
color: #fff;
}
 .skills{
background-color: #d9d9d9;
/* margin-bottom: 10px; */
  
}

#fullCard{
  margin-bottom: 50px;
  margin-left: 100%;
  background-color: #000;
  color: #fff;
}
/* .image-fit { */
  /* object-fit: cover; */
  /* height: 100%;  */
  /* width: auto; */
  /* Ensure the image takes full height of its container */
/* } */
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