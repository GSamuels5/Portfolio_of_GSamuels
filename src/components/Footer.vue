<template>
    
    <div class="container-fluid feet">
        <div class="row">
            <p class="lead"> Portfolio of Ghamzah Samuels 
                &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name:'footerComp',
        data(){
            return{

                currYear:new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>


</style>