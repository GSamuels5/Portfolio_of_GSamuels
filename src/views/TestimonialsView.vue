<template>
  <div class="container-fluid vh-100 ">
    <div class="row mb-4">
      <h2 class="display-2">Testimonials</h2>
    </div>
    <!-- <div class="addition d-flex flex-sm-wrap " >
      <div v-for="test in displayTestimonials" :key="test.id" class="col-md-4 mb-3">
        <div class="card-container h-100">
            <div class="card m-0 p-1 w-auto ">
              <img :src="test.profile" class="card-img-top" alt="profile">
              <div class="card-body">
                <h5 class="card-title">{{ test.name }}</h5>
                
                <p class="card-text">{{ test.quotes }}</p>
              </div>
              <div class="card-footer"> 
<h6>{{ test.position }}
                      </h6>
              </div>
            </div>
          </div>
  </div>
</div>  -->
  <div  v-if="displayTestimonials" id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
      <!-- Loop through testimonials to generate carousel items -->
    <div v-for="(test, index) in displayTestimonials" :key="test.id" :class="{ 'carousel-item': true, 'active': index === 0 }">
      <img :src="test.profile" class="d-block w-100" alt="profile">
      <div class="carousel-caption mb-2 d-md-block">
        
       
        <h5>{{ test.name }}</h5>
        <h6>{{ test.quotes }}</h6>
      </div>
      <div class="carousel-body g-2">
         <h4>{{ test.position }}</h4>
  
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

@media (min-width: 300px) and (max-width: 900px) {
  .addition {
    font-size: smaller;
    flex-direction: column;
  }

  .addition .col-md-4 {
    flex: 0 0 calc(50% - 20px); /* Display two testimonials per row */
    max-width: calc(50% - 20px);
    margin-right: 20px;
    margin-bottom: 20px; /* Add some bottom margin for spacing */
  }

  .addition .col-md-4:last-child {
    margin-right: 0;
  }
}
</style>

 
