<template>
  <nav class="navbar navbar-expand-lg justify-content-center  bg-transparent " data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto text-white" @mouseover="moveOver">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">Education/Experience</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" @click="startSpinner">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>


        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default{
  methods:{
moveOver(){
  console.log('event');
}
  },
  startSpinner() {
      // Emit an event to start the spinner when a router link is clicked
      this.$emit('startSpinner');
    }
}

</script>
<style scoped>
.navbar{
  justify-content: center;
  color: #fff;
  backdrop-filter: blur(40px);
  border-bottom: #1a1a2e 4px solid;
}
</style>