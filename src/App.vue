<template>
  <NavBar/>
  <main class="container-fluid">

    <router-view/>
  </main>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default{
  components:{

    NavBar
  }
}
</script>
<style src="@/assets/style.css">
</style>
