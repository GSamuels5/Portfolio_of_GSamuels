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
        <h5 class="card-title "><b>Name:</b><span >{{ edu.description }}
        </span>
      </h5>
          
        
        <h5 class="card-title"><b>Certificate:</b> <span>{{ edu.type }}</span> </h5>
        
      </div>
      <div class="card-footer"><h5 class="card-title"><b>Year:</b><span >{{ edu.year }}</span></h5></div>
    </div>
       
      </div>


          </div>
          <div class="worker">
            <h2>Employment </h2>
          </div>
          <div class="experience mx-2 d-grid gap-2 my-3 mb-4 " v-if="displayExperience">
  <div v-for="exp in displayExperience" :key="exp.id" id='fullCard' class="card border-secondary h-100 shadow mb-3  ">
  
      <div class="card-header"><h4><b>Company:</b> <span>{{ exp.company }}</span></h4></div>
      <div class="eduCard card-body ">
        <h5 class="card-title "><b>Position:</b> <span>{{ exp.position }}</span>
      </h5>
          
        
        
      </div>
      <h5 class="card-title"><b>Reason for leaving:</b> <span>{{ exp.left }}</span> </h5>
        
      <div class="card-footer"><h5 class="card-title"><b>Duration:</b> <span>{{ exp.year }}</span></h5></div>
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
        <div class="education my-5 gap-3 mx-4  " v-if="displaySkills">
              <div v-for="skill in displaySkills" :key="skill.id" style="width: 300px;">
<div class="card  h-100 skills my-3   " style="max-width: 300px;">
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
.experience{
  width: 87.3rem;
  padding-left: 100px;
  /* align-items: center; */
  /* justify-self: center; */
  /* margin-right:100px ; */

}
#fullCard:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Increase shadow intensity */
  transform: translateY(-50px); /* Move the card slightly upwards */
  transition: all 0.3s ease;
}

.education .card:hover .card-img-top {
  transform: scale(1.1); /* Increase scale on hover */
  transition: transform 0.5s ease;
}

.education .card:hover .card-body {
  font-size: 2rem; /* Increase font size on hover */
  transition: font-size 0.5s ease;
}
@media screen and (min-width: 300px) and (max-width: 900px) {
  .education {
    display: inline-flex;
    
   /* Change from grid to block for stacking */
  }
  .education .card {
    display: block; /* Change to block for stacking */
    width: 100%; /* Ensure cards take full width */
    margin-bottom: 20px; /* Add margin between cards */
  }
  .skills{
    display: inline-flex;
  }
  #fullCard{
    font-size: smaller;
  }
  .experience{
    width: auto;
    font-size: smaller;

  padding-left: 0;
  }
}
.expe{
  width: 88%;
  color: #d9d9d9;
  margin-left:0;
}
.education {

  display: flex;
  flex-wrap: wrap;
  
  /* grid-template-columns: repeat(3, 1fr); */
    justify-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
  /* grid-template-columns: repeat(1, ); */
   /* Allow cards to wrap */
 /* Negative margin to counteract card margins */


  
}
b{
margin: 0;
}
span{
  margin-left:50px;
}

 .skills{
background-color: #d9d9d9;
width: fit-content;
/* margin-bottom: 10px; */
  
}

#fullCard{
  margin-bottom: 50px;
  background-color: #d9d9d9;
  color: #000;
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
.experience{
  color: #d9d9d9;
}
h2{
  color: white;
  text-decoration: underline;
}

</style>