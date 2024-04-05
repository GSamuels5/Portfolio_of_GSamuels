<template>
  <div class="container-fluid mb-4 tests">
    <div class="row mb-4 test">
      <h2 class="display-2">Testimonials</h2>
    </div>

    <div v-if="displayTestimonials" id="carouselExampleAutoplaying" class="carousel slide mt-5 mb-5 " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(testimonial, index) in displayTestimonials" :key="testimonial.id" :class="{ 'carousel-item': true, active: index === 0 }">
          <div class="row   carry rounded-5 text-black">
            <div class="col-lg-4">
              <img :src="testimonial.profile" class="carousel-image d-inline img-fluid " alt="profile" style="height:20rem;width: 30rem;">
            </div>
            <div class="col-lg-8  ">
              <div class="card-body">
                <h4 class="card-title text-black text-decoration-underline fs-3">{{ testimonial.position }}
                </h4>
                <h5 class="mb-5">{{ testimonial.name }}</h5>
                <p class="card-text text-black mb-4 px-3">{{ testimonial.quotes }}</p>
              </div>
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
      </button>
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
.tests{
  min-height: 100vh;
}
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
.card-text{
  font-size: 20px
}

/* .card-body {
  flex-grow: 1;
} */

.carry{
  background-color: #d9d9d9;
}

.carousel-caption {
  text-align: center;
  color: white;
}
.carousel-image {
  object-fit: cover;
}
.test{
  margin-bottom: 500px;
}

@media screen and (min-width: 300px) and (max-width: 900px) {
  .carousel-item {
    /* display: flex; */
    flex-direction: column;
    font-size: smaller;

  }
  .proj{
    width: 250px;
  }
  .card-body{
    display: inline;
    height: 600px;
    padding-bottom: 10px;
    font-size: smaller;
  }
  h5{
    margin-bottom: 0;
  }
}
</style>
