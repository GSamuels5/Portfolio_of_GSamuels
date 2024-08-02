<template>
  <div>
    <div class="background"></div>
    <NavBar/>
    <main class="container-fluid ">
      <!-- <video id="video-background" autoplay loop muted>
        <source src="./assets/galaxy magic Animated background Free to use.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video> -->
  
    <!-- <div class="background"></div> -->

    
      <Spinner v-if="showSpinner" />
          <router-view v-if="!showSpinner" @routeChangeEnd="stopSpinner" @routeChangeStart="startSpinner"/>
  
        </main>
      
        <Footer/>
  </div>
    
</template>
<script>

import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import Spinner from "./components/Spinner.vue";

export default{
  components:{
    NavBar,
    Footer,
    Spinner
    

    
  },
  data(){
    return{
      showSpinner: true,
    }
  },
  methods:{
    startSpinner(){
      this.showSpinner = true;
    },
    stopSpinner(){
      this.showSpinner = false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.showSpinner = false
      this.$emit("routeChangeStart")
    },1000
  );
    this.$router.beforeEach((to, from, next) => {
      this.startSpinner();
      next();
    });

    this.$router.afterEach(() => {
      this.stopSpinner();}
  
  );}}
  
</script>
<style src="@/assets/style.css">

</style>