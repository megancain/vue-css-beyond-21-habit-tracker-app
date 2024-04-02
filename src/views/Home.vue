<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>

  <br />
  <img src="/src/views/logo.png" padding="-20px" width="220px" />
  <br />
  <br />
  <div class="home container">
    <div class="home-wrapper">
      <h3>Habits transcend 21 days.</h3>
      <h4>
        Embrace the journey, redefine habits <br />
        &amp; achieve lasting success.
      </h4>
      <button @click="router.push('/signup')" class="button" type="submit">
        Sign Up Today!
      </button>
      <button @click="router.push('/login')" class="button" type="submit">
        User Login
      </button>
      <hr class="rounded" />
      <h4>Features</h4>
    </div>
  </div>
  <div class="description">
    <div class="container">
      <div class="features">
        <div class="block">
          <img src="./CheckMark_Transparent.png" padding="20px" width="220px" />
          <h5>
            Do It <br />
            Everyday
          </h5>
          <a> Daily discipline breeds habits that drive goal achievement</a>
        </div>
         <div class="block">
          <img src="./AllOrNothing.png" padding="20px" width="220px" />
          <h5>
            All or None
          </h5>
          <a> Habits must complete <br />within 24 hours for <br />daily prioritization, <br /> no carryover.</a>
        </div>
        <div class="block">
          <img src="./coaching.png" padding="20px" width="220px" />
          <h5>1 on 1 Coaching</h5>
          <a>
            Your very own habit-tracking buddy, ready to support you every step
            of the way!</a
          >
        </div>
        <div class="block">
          <img src="./BarChart.png" padding="20px" width="220px" />
          <h5>See Your Progress</h5>
          <a> Daily discipline breeds habits that drive goal achievement</a>
        </div>
      </div>
    </div>
  </div>
  <div class="signup-landing">
    <div class="signup-wrapper">
      <div class="signup">
        <br />
        <hr class="rounded" />
        <h3>
          Ready to redefine habits <br />
          and achieve lasting success?
        </h3>
        <h4>Free. Forever. <br /></h4>
        <br />
        <div>
          <button class="button" type="submit" @click="router.push('/signup')">Join the journey now!</button>
        </div>
         <div class="made">
     <p>
      Built during Momentum Team NCCU 1 Cohort in &#128002 Durham, N.C. <br />by 
      <a href="https://LinkedIn.com/in/joannaem">Joanna Matanga </a>,
      <a href="https://linkedin.com/in/austin-cathey"> Austin Cathey </a>, 
      <a href="https://linkedin.com/in/megancgeo"> Megan Cain </a> & 
      <a href="https://www.linkedin.com/in/sanadevkota"> Upasana Devkota</a>
    </p>
  </div>
      </div>
    </div>
  </div>
</template>
<style></style>
