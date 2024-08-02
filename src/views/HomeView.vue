<template>
 <div class="container-fluid home ">
 
  
    <div class="row" >
      <div class="col welcome">
        <br>
        <br><br>
  



        <h1 class="greet" style="width: 100%;">Welcome </h1>
        <h2 class="log2" style="width: 100%">Portfolio of Ghamzah Samuels<br>
          <span class="">Software Developer</span>
        </h2>
      </div>
<div class="col mb-5 ">

<div class="floating mt-5">
  <img class='picture' src="https://i.ibb.co/Vvg5Z1X/20231009-110208p-p.jpg" alt="picture" loading="lazy">
</div>
</div>
<div>
<router-link to="/about"><button class="about my-5 p-3"><span>Learn more</span></button></router-link>
  
</div>
</div>


  

<!-- <div>
<router-link to="/about"><button class="about my-5 p-3"><span>Learn more</span></button></router-link>
  
</div> -->
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
  backdrop-filter: blur(40px);
  /* outline-color: white; */
  border: 4px solid #1a1a2e;
  color: #d9d9d9;
  font-weight: bolder;
  font-size: 20px;
}

        /* Optional styling for content overlay */
       
@media screen and (min-width: 300px) and (max-width: 900px) {
.greet{
  height: auto;
  width: 100%;
  font-size: 30px;
  
}
.log2{
  margin-bottom: 20px;
  height: auto;
  width: 100%;
  font-size: 30px;
}
.floating{
  align-self: auto;

}
.picture{
  width: auto;
}h1,h2{
  width: 10rem;
}
}
.log2 {
  /* border: 4px solid black; */
  background-color: transparent;
  width: 540px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25% 25% 0 0;
  position: relative;
  overflow: hidden;
  /* opacity: 0; Initially hide the text */
  animation: slideIn  7s forwards;
  color: #d9d9d9;
}
.row{
  align-content: center;
  justify-content: center;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1; /* Show the text when animation completes */
    transform: translateX(0);
  }
}

.greet{
  /* border: 4px solid black; */
  background-color: transparent;
  width: 540px;
  margin-left: auto;
  margin-right: auto;
  border-radius:  25% 25% ;
  position: relative;
  overflow: hidden;
  margin: auto;
  transform: translateY(-10px);
  opacity: 0;
  animation: fallIn 1s 1s forwards;
  color: #d9d9d9;
  margin-bottom: 20px;
  /* font-size: x-large; */
}
.welcome{
  font-size: x-large;
}
.home{
  margin-bottom: 100px;
}
@keyframes fallIn {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.log h2 {
  margin: 0;
  padding: 20px;
  text-align: center;
}
h1, h2{
  font-size: 50px;
}
.log span {
  display: block;
  /* font-size: 0.8em; */
  color: #d9d9d9;
}
</style>
