<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <h2 class="display-2">Testimonials</h2>
    </div>

   
<!-- 
    <div v-if="displayTestimonials" id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <! Loop through testimonials to generate carousel items -->
        <!-- <div v-for="(test, index) in displayTestimonials" :key="test.id" :class="{ 'carousel-item': true, 'active': index === 0 }">
           
       <div class="row">
      <div class="col mb-5"> <img :src="test.profile" class="carousel-image d-block w-100 img-fluid rounded-5" alt="profile"></div>
      <div class="col-lg-8 carousel-caption   bg-black rounded-5"> 
            <h5>{{ test.name }}</h5>
            <h6>{{ test.quotes }}</h6>
            <h4 class="bg-white text-black"></h4>
          </div>
    </div>
         

        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span> -->
      <!-- </button> -->
    <!-- </div> --> 
    <div  v-if="displayTestimonials" id="carouselExampleAutoplaying" class="carousel slide bg-black" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
        <img :src="testimonial.profile" class="d-block w-100" alt="Testimonial">
        <div class="carousel-caption">
          <h5>{{ testimonial.name }}</h5>
          <p>{{ testimonial.quotes }}</p>
        </div>
      </div> -->
      <div class="card mb-3 w-100" v-for="(test, index) in displayTestimonials" :key="test.id" :class="{ 'carousel-item': true, 'active': index === 0 }">
        <!-- {{ testimonial.quotes }} -->
        <div class="row g-0 bg-black rounded-2">
          <div class="we col-lg-4 bg-black my-auto">
            <img :src="test.profile" class="carousel-image d-block w-100 img-fluid rounded-5" alt="profile">
          </div>
          <div class="we col-lg-8 bg-black">
            <div class="card-body">
              <h5 class="card-title text-white text-decoration-underline fs-3">{{ test.position }}</h5>
              <h6>{{ test.name }}</h6>
              <p class="card-text text-white">{{ test.quotes }}</p>
            </div>
          </div>
        </div>
      </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span> 
    </div>
  </div>

  </div>
</template>

<script>
export default {
  computed: {
    displayTestimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.card-container {
  width: 95%;
  padding: 10px;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  height: auto;
}

.card-body {
  flex-grow: 1;
}

.card-title,
h6,
.card-text {
  margin-bottom: 0;
}

.carousel-image {
  height: 350px; /* Set a fixed height */
  width: auto; /* Automatically adjust the width to maintain aspect ratio */
}

.carousel-caption {

  text-align: center;
  color: white;
}

@media screen and (min-width: 300px) and (max-width: 900px) {
.carousel-{
  display: none;
}
}
</style>
