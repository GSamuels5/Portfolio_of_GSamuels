<template>
     <div class="container-fluid">
    <div class="row ">

      <h2 class="display-2">Projects</h2>
    </div>
    
      <div class="proj d-flex flex-wrap justify-content-center" v-if="displayProjects">
    <div v-for="pros in displayProjects" :key="pros.id" >
      <div class="row row-cols-1 d-sm-inline  mb-4 ">
    <div class="col">
      <div class="card " style="width: 17rem; height: 26rem;">
        <img :src="pros.image" class="card-img-top d-flex justify-content-center  " alt="image" style="width: 16.4rem ; height: 13rem;">
        <div class="card-body">
          <h5 class="card-title">{{ pros.name }}</h5>
          <p class="card-text d-flex">{{ pros.description }}</p>
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
        <h3><u>Collaborations</u></h3>
        <div class="extra-projects">

          <h4>Scrum</h4>
          <img src="https://i.ibb.co/dGdnvns/SCRUM.png" alt="scrum_picture" class="img-fluid" >
         
        </div>
        <button class="btn mb-5" ><a href="https://drive.google.com/file/d/11ZE93DsdmES30BobwkS7jNxX2kDRYBCu/view?usp=sharing" class="text-black"  target="_blank">See More</a></button>
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


<style scoped>
@media screen and (min-width: 300px) and (max-width: 900px) {
 .proj {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-right: 0;
    padding-right: 0;
    width: 250px;

  }
  .row{
    width: 250px
  }.col{
    border: none ;
    margin-left:0;
    align-content: center;
    width: 250px;

  }.card{
    border: 5px solid black;
    margin-right: 0;
    width: 248px;
  }
}
span{
  padding: 10px;
  
 
}
button{
  background-color: rgb(16, 130, 237);
  border: 2px solid;
  border-radius: 15%;
  margin-right:5px
}
.card{
border: 5px solid black;
  background-color: transparent;
  color: #d9d9d9;
}

.btn,.card:hover{
  font-size:x-large;
  font-weight: 500 bold;
}
</style>
