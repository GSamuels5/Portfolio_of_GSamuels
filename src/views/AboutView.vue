<template>
  <div class="container-fluid page">
    <div class="row">

      <h2 class="display-2">About</h2>
    </div>
    
    <div class="about fs-4 rounded-5  p-4 text-white bg-transparent shadow">
          <p >
               My name is Ghamzah Samuels and I'm an aspiring software developer .
               I'm an honest, resilient and hardworking person. I have an intelligent mind that
               brings out the energy within me. I'm a reliable person you can always
               depend on me. New tasks brings me independence and will prove my
               ability. Team work is a passion for me.
              </p>
              <div class="hobbbies "> <h5>Hobbies:</h5><p class="justify-content-center align-content-center my-5"><span class="p-4">Jogging</span><img src="../assets/running.gif" alt="" class="img-fluid" style="height: 5rem;"><br>
              <span class="p-4">Reading</span><img src="../assets/book-review.gif" alt="" class="img-fluid" style="height: 5rem;"><br>
              <span class="p-4">Hiking</span><img src="../assets/hiking.png" alt="" class="img-fluid" style="height: 5rem;" ></p>
             </div>
             <div class="birth"><h5>D.O.B</h5><p class="justify-content-center align-content-center ">26/09/1998</p></div>
             
             
             <div class="d-block m-2">
              <button>
  <a href="https://www.linkedin.com/in/ghamzah-samuels-a931722b7" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" class="bi bi-linkedin" viewBox="1 1 14 14">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
  </a>
</button>

     

               <button class="p-4 btn btn-link cv"> <a href="https://drive.google.com/file/d/1pZraQSjiObskaFT-kmMqpdMQ9wVhQ1PI/view?usp=sharing" target="_blank">
                Download my resume
               </a></button>
             </div>
    </div>

  </div>
</template>
<style scoped>
.about{
  /* background-color: #d9d9d9; */
  /* color:#000; */
  font-weight: 500;
  /* background-color: transparent; */
  border: 4px solid black ;
  margin-bottom: 300px;
}
.cv{
  font-size: larger;
}
h5{
  font-size: larger;
  text-decoration: underline;
  margin-bottom: 5px;
}
h6{
  font-size: large;
  padding:10px
}
p{
display: flex;
align-content: center;
justify-self: center;
}
.dob{
  font-weight:  bold;
  font-size: 50%;
  text-decoration: underline;
}
.page {
  max-height: 100vh; /* Set minimum height to 100vh */
}
.hobbies{
  align-content: center;
  justify-items: center;
}

/* Media query for mobile devices */
@media only screen and (max-width: 900px) and (min-width: 300px){
  .page {
    max-height: 100%; /* Set height to auto for small screens */
  }
  p{
    display: block;
  }
  /* .about{
    margin-bottom: 650px;
  } */
}
</style>

