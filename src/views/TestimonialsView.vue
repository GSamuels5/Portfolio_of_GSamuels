<template>
  <div class="container-fluid mb-4 tests">
    <div class="row mb-4 test">
      <h2 class="display-2">Testimonials</h2>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/b5ytvbw/joel2-1.jpg" class="d-block w-100" alt="image">
              </div>
              <div class="card-body">
                <h5 class="card-title">Joel Mukanya</h5>
                <h6>Lecturer</h6>
                <p >Ghamzah is a creative, and well-behaved individual who always prioritizes his work. He excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/3cT5qxM/DSC-0299.jpg" class="d-block w-100" alt="buy">
              </div>
              <div class="card-body">
                <h5 class="card-title">Rezaar Osman</h5>
                <h6>Colleague</h6>
                <p >Ghamzah Samuels patience is immeasurable. He has persistent composure in the face of stress. His efficient and has meticulous work ethic as if he was born to be an engineer. Nothing, in my opinion, could prevent him from being modest. I would expect and be proud to see him in high places someday.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/Rpr8Dmn/20231009-110338.jpg" class="d-block w-100" alt="guy">
              </div>
              <div class="card-body">
                <h5 class="card-title">Tashreeq Lee</h5>
                <h6>Colleague</h6>
                <p >Ghamzah Samuels is an excellent communicator, always willing to help out and take initiative. The energy he brings always lightens up the room and he always goes above and beyond to ensure that the job gets done and that it's done right.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/4gmP4x8/20231009-110254.jpg" class="d-block w-100" alt="colleaugue">
              </div>
              <div class="card-body">
                <h5 class="card-title">Carl James</h5>
                <h6>Colleague</h6>
                <p >Ghamzah is one of the best people I've worked with. His Developer skills are considered to be one of the top and if not he will find a way. He pays attention to detail when it comes to his work on a small and larger scale. Other than technical skills he is effective at communication. Wherever he goes he will be a great asset.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/PFpBVrB/DSC-0302.jpg" class="d-block w-100" alt="guy">
              </div>
              <div class="card-body">
                <h5 class="card-title">Razien Mackenzie</h5>
                <h6>Colleague</h6>
                <p > Ghamzah has been an amazing help in my team. He's always finding solutions to even the most challenging problems. He is a very kind person, yet he takes his work extremely seriously. He is definitely my go-to guy in a crunch, so I'm sure he'll make a valuable addition to your team.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-container">
            <div class="card">
              <div class="img-wrapper">
                <img src="https://i.ibb.co/z2wQK8r/20231009-110714.jpg" class="d-block w-100" alt="guy">
              </div>
              <div class="card-body">
                <h5 class="card-title">Zukisa Eric Maza</h5>
                <h6>Colleague</h6>
                <p >Ghamzah an Aspiring Software Developer, has shown remarkable dedication and hard work in his pursuit of a career in the tech industry. At Life Choices Academy where he honed his skills in modern web languages and developed future-oriented skills, such as data management and problem-solving. Ghamzah's strong work ethic and commitment  has allowed him to excel in his studies and gain valuable experience in the field.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Additional carousel items can be added here -->
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import 'jquery';
import 'materialize-css/dist/js/materialize.min.js'; // Ensure Materialize JS is imported

export default {
  name: 'TestimonialsView',
  setup() {
    onMounted(() => {
      // Initialize the Materialize carousel
      const $ = require('jquery');
      $('.carousel').carousel({
        padding: 50,
      });
      autoplay();

      function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
      }
    });
  },
};
</script>
<style scoped>
.test{
  margin-bottom: 250px;
}
.carousel {
  margin-bottom: 250px;
  padding-top: 20px;
  height: 600px; 
  perspective: 250px;    
}

.card-container {
  height: 100%;
  display: flex; /* Aligns cards next to each other */
  justify-content: center; /* Center align cards in the carousel */
  align-items: center; /* Align cards at the middle */
  transform-style: preserve-3d; /* Enable 3D transformations */
  transition: transform 0.5s ease; /* Smooth transition for scaling */
}

.carousel .carousel-item {
  padding: 20px; /* Adjust padding if needed */
}

.card {
  width: 30%; 
  background: #fff;
  text-align: center;
  border-radius: 15px;
  margin: 0 10px; /* Space between cards */
  transition: transform 0.3s ease; /* Smooth transition for pop-out effect */
}

/* Pop-out effect */
.carousel-item.active .card-container {
  transform: scale(1.1); /* Scale up the middle card */
}

.card-body {
  display: inline-block;
  padding-bottom: 50px;

}
p{
  font-weight: bold;
  color: #000;

}
.card-text{
  color: black;
}
.card:hover {
  transform: scale(1.05); /* Scale up the card on hover */
}

.img-wrapper {
  padding-bottom: 20px;
  overflow: hidden;
  height: max-content;
  border-radius: 15px; /* Rounded corners for image */
}


/* Responsive adjustments */
@media screen and (max-width: 450px) {
  .card {
    width: 90%;
  }
  .card-body {
    font-size: 0.9rem;
  }
}
.test{
  margin-bottom: 300px;
}
</style>
