<template>
  <div class="container ">
    <div class="row">
      <h2 class="display-2">Testimonials</h2>
    </div>
    <div class="education d-flex flex-sm-wrap " v-if="displayTestimonials">
      <div v-for="test in displayTestimonials" :key="test.id" class="col-md-4 mb-3">
        <div class="card-container">
            <div class="card h-100">
              <img :src="test.profile" class="card-img-top" alt="profile">
              <div class="card-body">
                <h5 class="card-title">{{ test.name }}</h5>
                <h6>{{ test.position }}
                      </h6>
                <p class="card-text">{{ test.quotes }}</p>
              </div>
            </div>
          </div>
  </div>
</div> 
    <!-- <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
  <!-- </div>
  <div class="carousel-inner"> -->
    <!-- <div class="carousel-item active">
      <img src={{test.profile[0]}} class="d-block w-100" alt="profile">
      <div class="carousel-caption d-none d-md-block bg-light">
        <h5>{{ test.name[0] }}</h5>
        <h6>{{ test.position[0] }}
              </h6>
        <p>{{ test.quotes[0] }}</p>
        <img  class="d-block w-100" alt="profile">
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
      
        <p>{{ test.quotes }}</p>
      </div>
    </div> -->
    <!-- <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div> -->
  <!-- </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  -->
    <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <img :src="test.profile" class="d-block w-100" alt="profile" />
      <h5></h5>
      <div class="carousel-inner d-flex">
          <div class="carousel-item active">
            <div class="carousel-caption d-none d-md-block">
              <h6>{{ test.position }}
              </h6>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
    </div> -->
    <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div v-for="test in displayTestimonials" :key="test.id">
          <div class="card border-secondary mb-3" style="max-width: 20rem;">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="test.profile" class="d-block w-100" alt="profile" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{ test.name }}</h5>
                  <h6>{{ test.position }}
                  </h6>
                  <p></p>
                </div>
              </div>
              {{ test.quotes }}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div> -->
        <!-- <div class="card-header"></div>
      <div class="card-body text-secondary">
        <p class="card-title">Name:{{  }}</p>
        <p class="card-title">Year:</p>
        <p class="card-title">Certificate:{{  }}</p>
        
       -->
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

<style scoped></style>
