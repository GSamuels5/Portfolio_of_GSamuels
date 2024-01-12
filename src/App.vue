<template>
  <div>

    <NavBar/>
    <main class="container-fluid ">
      <Spinner v-if="showSpinner"/>
          <router-view @routeChangeStart="startSpinner" @routeChangeEnd="stopSpinner" />
  
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
      this.$emit("routeChangeEnd")
    },1000)
  }
  }
  
</script>
<style src="@/assets/style.css">
</style>
