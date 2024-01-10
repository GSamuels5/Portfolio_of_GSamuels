<template>
    
    <div class="container-fluid bg-success fixed-bottom">
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