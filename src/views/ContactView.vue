<template>
  <div class="container-fluid ">
    <div class="row mb-5">
      <h2 class="display-2 mb-2">Contact</h2>
      <div class="from col-md-6 ">
        <div class="formation align-content-center p-4 ">
          <form action="https://formspree.io/f/mbjnykkk" method="post">
            <div class="mb-3">
              <label for="firstname" class="form-label">First name:</label>
              <input type="text" id="firstname" class="form-control " placeholder="Enter your name" required>
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
        <div class="contacts p-4 ">
          <h3>Reach me via:</h3>
          <h4>Cell number: 06229789711 <i class="bi bi-whatsapp"></i></h4>
          <p>Email: ghamzahsamuels23@gmail.com</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </div>
        <div class="p-4">
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
  color: aliceblue;
  font-size: larger;
  
}
.from{
  flex-wrap: wrap;
  background-color:rgb(54, 27, 187);
  border: 4px solid black ;
  border-radius: 10%;
}

</style>
