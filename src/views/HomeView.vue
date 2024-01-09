<template>
 <div class="container">
    <div class="row">

      <h2 class="display-2">Home</h2>
    </div>
    <div class="row" >
      <p class="lead">{{ jobTitle }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle
    }
  },
  mounted(){
    this.$store.dispatch('fetchJobTitle')
  }
}
</script>
