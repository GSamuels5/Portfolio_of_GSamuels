<template>
  <div class="container-fluid ">
    <div class="row mb-5">
      <h2 class="display-2 mb-2">Reach Me</h2>
      <div class="from col-md-6 ">
        <div class="formation align-content-center text-white bg-transparent  p-4 ">
          <form action="https://formspree.io/f/mbjnykkk" method="post">
            <div class="mb-3">
              <label for="firstname" class="form-label">First name:</label>
              <input type="text" id="firstname" class="form-control  text-black" placeholder="Enter your name" required>
            </div>
            <div class="mb-3 ">
              <label for="lastname" class="form-label ">Surname:</label>
              <input type="text" id="lastname" class="form-control row-col-1" placeholder="Enter your surname" required>
            </div>
            <div class="mb-3">
              <label for="emailAdd" class="form-label">Email:</label>
              <input type="email" id="emailAdd" class="form-control" placeholder="Enter your Email Address" required name="emailAdd">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message:</label>
              <textarea name="message" id="message" class="form-control" placeholder="Please enter your message" rows="7" required></textarea>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6 text-white bg-transparent shadow  from ">
        <div class="contacts p-4 justify-space-around m-5">
          <h3>Reach me via:</h3>
          <h4>Cell number: 0622989711 <i class="bi bi-whatsapp"></i></h4>
          <p>Email: ghamzahsamuels23@gmail.com</p>
          <button>

            <a href="https://www.linkedin.com/in/ghamzah-samuels-a931722b7" target="_blank">
  
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
            </a>
          </button>
          <button class="">

            <a href="https://github.com/dashboard" target="_blank">
    
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
          </button>
        </div>
        <div class="p-4 my-5">
          <h3>Location</h3>
          <h5><span>Western Cape - Cape Town </span> Lavender Hill Retreat 7945 <i class="bi bi-geo-alt-fill"></i></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.formation {
  display: inline;
  width: 100%;
  /* color: #000; */
  font-size: x-large;
  
  
}
label{
  color: #d9d9d9;
}
.from{
  flex-wrap: wrap;
  /* background-color:#d9d9d9; */
  border: 4px solid black ;
  backdrop-filter: blur(20px);
  border-radius: 10%;
  color: #000;
}

</style>
