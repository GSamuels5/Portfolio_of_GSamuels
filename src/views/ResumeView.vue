<template>
  <div class="container-fluid">
       <div class="row">
     
     <h2 class="display-2">Experience</h2>
     </div>
   


      <div class="worker my-4 ">
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
       
   <h2 class="text-white">Education</h2>
<div class="educat  mx-2 d-grid gap-2 my-3 mb-4 " v-if="displayEducation">
  <div v-for="edu in displayEducation" :key="edu.id" id='fullCard' class="card border-secondary h-100 shadow mb-3 ">
  
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
        <div class="education my-5 gap-5 mx-4  " v-if="displaySkills">
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
    <h2> Soft Skills</h2>
    <div class="education  my-5 gap-5   " v-if="displaySoft">
              <div v-for="skill in displaySoft" :key="skill.id" >
<div class="card soft skills my-3 h-100  " style="width: 15rem;" >
  <img :src="skill.pictures" class="card-img-top  img-skill " alt="image" style=" height: 10rem; ">
  <div class="card-body">
    <h4 class="card-title">{{ skill.softy }}</h4>
  
   
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
},
displayExperience(){
  return this.$store.state.experience
},
displaySoft(){
  return this.$store.state.soft
}
  },
mounted(){
  this.$store.dispatch('fetchEducation')
this.$store.dispatch('fetchSkills')
this.$store.dispatch('fetchExperience')
this.$store.dispatch('fetchSoft')

}
}

</script>

// <style scoped>
.experience .educat{
  width: 87.3rem;
  padding-left: 100px;
  /* align-items: center; */
  /* justify-self: center; */
  /* margin-right:100px ; */

}
#fullCard:hover {
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;/* Increase shadow intensity */
  transform: translateY(-50px); /* Move the card slightly upwards */
  transition: all 0.3s ease;
  background-color: #000;
}

.education .card:hover .card-img-top {
  transform: scale(1.1); /* Increase scale on hover */
  transition: transform 0.5s ease;
}

.card-title .card-text:hover  {
  font-size: 10rem; /* Increase font size on hover */
  transition: font-size 0.3s ease;
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
  .soft.card{
  width:250px;
}
  .skills{
    display: inline-flex;
  }
  #fullCard{
    font-size: smaller;
  }
  .img-skill{

    width: 230px;
  }
  .experience{
    width: auto;
    font-size: smaller;

  padding-left: 0;
  }
  
}
.expe{
  width: 88%;
  color: #fff;
  margin-left:0;
}
/* .img-skill{
  width: ;
} */
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
background-color: transparent;
backdrop-filter: blur(20px);
width: fit-content;
/* margin-bottom: 10px; */
color: #d9d9d9;
  
}

#fullCard{
  margin-bottom: 50px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  color: #d9d9d9;
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
.card{
  border: 5px solid black;
}

.experience{
  color: #d9d9d9;
}
h2{
  color: white;
  text-decoration: underline;
}

</style>
