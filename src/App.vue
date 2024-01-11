<template>
  <NavBar/>
  <main class="container-fluid vh-100">
    <router-view/>
    <Spinner/>
  </main>
  <Footer/>
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
    

    
  }
  }
</script>
<style src="@/assets/style.css">
</style>
