<template>
 <div class="container-fluid ">
 
  <br><br>
    <div >
<h1 class="greet">Welcome </h1>
<h2 class="log2">Portfolio of Ghamzah Samuels<br>
  <span class="text-dark">Software Developer</span>
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
.log2 {
  border: 4px solid black;
  background-color: rgb(54, 27, 187);
  width: 540px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25% 25% 0 0;
  position: relative;
  overflow: hidden;
  opacity: 0; /* Initially hide the text */
  animation: slideIn  7s forwards;
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
  border: 4px solid black;
  background-color: rgb(54, 27, 187);
  width: 540px;
  margin-left: auto;
  margin-right: auto;
  border-radius:  25% 25% ;
  position: relative;
  overflow: hidden;
  margin: auto;
  transform: translateY(-10px);
  opacity: 0;
  animation: fallIn 1.5s 1.5s forwards
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

.log span {
  display: block;
  font-size: 0.8em;
  color: white;
}
</style>
