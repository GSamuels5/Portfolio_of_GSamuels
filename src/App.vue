<template>
  <div>
    <div class="background"></div>
    <NavBar />
    <main class="container-fluid">
      <!-- Spinner -->
      <Spinner v-if="showSpinner" />
      
      <!-- Sections -->
      <section id="home">
        <HomeView />
      </section>

      <section id="about">
        <AboutView />
      </section>

      <section id="resume">
        <ResumeView />
      </section>

      <section id="projects">
        <ProjectsView />
      </section>

      <section id="testimonials">
        <TestimonialsView />
      </section>

      <section id="contact">
        <ContactView />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import Spinner from "./components/Spinner.vue";

// Import all the views
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ResumeView from "./views/ResumeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import TestimonialsView from "./views/TestimonialsView.vue";
import ContactView from "./views/ContactView.vue";

export default {
  components: {
    NavBar,
    Footer,
    Spinner,
    HomeView,
    AboutView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ContactView,
  },
  data() {
    return {
      showSpinner: true,
    };
  },
  methods: {
    startSpinner() {
      this.showSpinner = true;
    },
    stopSpinner() {
      this.showSpinner = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
  },
};
</script>

<style src="@/assets/style.css"></style>
