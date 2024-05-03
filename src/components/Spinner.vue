<template>
    <div class="spin d-flex justify-content-center align-content-center">
        <div class="loader"></div> 

    </div>
</template>

<script scoped>
    export default {
        name: 'spinnerComp',
    //     data(){
    //         return{
    //             showSpinner: true,
    //         }
    //     },
    //     mounted(){

    //         

    //     }
        
    }
</script>

<style scoped>
.spin{
margin-bottom: 50%;
}
.loader {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  color: #000;
  border: 4px solid;
  box-sizing: border-box;
  border-radius: 50%;
  background: 
    radial-gradient(circle 5px, currentColor 95%,#0000),
    linear-gradient(currentColor 50%,#0000 0) 50%/4px 60% no-repeat;
  animation: l1 2s infinite linear;
}
.loader:before {
  content: "";
  flex: 1;
  background:linear-gradient(currentColor 50%,#0000 0) 50%/4px 80% no-repeat;
  animation: inherit;
}
@keyframes l1 {
  100% {transform: rotate(1turn)}
}
</style>