<template>
  <div class="row">

    <h2 class="display-2 mb-2">Contact</h2>
  </div>
   <div class="container d-flex ">
    <div class="formation m-3">
        <form action="https://formspree.io/f/xbjnljop" method="post">
            <div class="forming row cols-3">
                <label for="firtname">First name:</label>
                <input type="text" id="firtname" placeholder="enter your name" required >
            </div>
            <div class="forming row cols-3" >
                <label  for="surname">Surname:</label>
                <input type="text" id="lastname" placeholder="enter your surname" required  >
            </div>
            <div class="forming row cols-3">
                <label for="emailAdd">Email:</label>
                <input type="email" placeholder="enter your Email Address" required id="emailAdd" name="emailAdd">
            </div>
            <div class="forming row cols-3">
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Please enter your message" cols="20" rows="7" required ></textarea>
              </div>
            <div class="forming row cols-3">
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
      <div class="contacts">
        <h2>Reach me via:</h2>
        <p>

          Cell number: 078 594 5217
        </p>
          
          
          <p>

            Email: ghamzahsamuels23@gmail.com
          </p>

        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-github"></i>
      </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>