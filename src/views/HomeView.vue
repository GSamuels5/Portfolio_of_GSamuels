<template>
 <div class="container-fluid ">
 
  <br><br>
    <div >
<h1 class="greet">Welcome </h1>
<h2 class="log2">Portfolio of Ghamzah Samuels<br>
  <span class="text-white">Software Developer</span>
</h2>
</div>


  
<div class="row">

  <div class="floating ">
    <img class='picture' src="https://i.ibb.co/Vvg5Z1X/20231009-110208p-p.jpg" alt="picture" loading="lazy">
  </div>
</div>
<div>
<router-link to="/about"><button class="about my-5 p-3"><span>Learn more</span></button></router-link>
  
</div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
 

  }

</script>
<style scoped>
.about{
  background: none;
  outline-color: white;
  border: 4px solid white;
  color: white;
  font-weight: bolder;
  font-size: 20px;
}

        /* Optional styling for content overlay */
       
@media screen and (min-width: 300px) and (max-width: 900px) {
.greet{
  width: auto;
  font-size: smaller;
}
.log2{
  width: auto;
  font-size: smaller;
}
.floating{
  align-self: auto;

}
.picture{
  width: auto;
}
}
</style>
