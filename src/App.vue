<template>
  <NavBar/>
  <main class="container-fluid">

    <router-view/>

  </main>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Footer/>
</template>
<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
export default{
  components:{
    NavBar,
    Footer

  }
}
</script>


<style src="@/assets/style.css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
