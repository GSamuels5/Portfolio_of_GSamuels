<template>
    <div>
        <div class="container">
    <div class="row">

      <h2 class="display-2">Resume</h2>
    </div>
    <h3>School</h3>
    <div class="education d-flex flex-sm-wrap w-75" v-if="education">
      <div v-for="(edu, index) in education" :key="index" class="mx-3">
          <p>{{ edu.instutition }}:</p>
          <p>{{ edu.description }} :</p>
          <p>{{ edu.year }} :</p>
          <p>{{ edu.type }} :</p>
          </div>
          <div class="mx-3">
            <p>Grade 12</p>
            <p>2016</p>
            <p>Crestway High School</p>

          </div>
          
        </div>
    </div>
  
  </div>
    </div>
</template>

<script>
    export default {
      data() {
    return {
      education: [] // Initialize education as an empty array
    };
  },
  methods: {
    async fetchEducationData() {
      try {
        // Fetch education data from the API or external source
        const response = await fetch('https://example.com/education'); // Replace with your data URL
        const data = await response.json();
        this.education = data.education; // Assuming the education data is in the 'education' field
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    }
  },
  mounted() {
    this.fetchEducationData(); // Fetch education data when the component is mounted
  }
};
        

</script>

<style scoped>

</style>