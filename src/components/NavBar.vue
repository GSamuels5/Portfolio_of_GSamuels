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
            <a href="#home" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#resume" class="nav-link">Education/Experience</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link" @click="startSpinner">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#testimonials" class="nav-link">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
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
      // Emit an event href start the spinner when a router link is clicked
      this.$emit('startSpinner');
    }
}

</script>
<style scoped>
.navbar{
  position: sticky;
  top: 0; /* Positions it at the top of the page */
  width: 100%; /* Ensures it spans the full width of the page */
  z-index: 1000; 

  justify-content: center;
  color: #fff;
  backdrop-filter: blur(40px);
  border-bottom: #1a1a2e 4px solid;
  margin-bottom: 100px;
}
</style>