<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userName = ref("");
const userEmail = ref("");
const password = ref("");
/* const confirmPassword = ref(""); */

const addNewUser = () => {
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName.value,
      email: userEmail.value,
      password: password.value,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Login failed");
      }
      return res.json();
    })
    .then((data) => {
      router.push("/login");
    })
    .catch((error) => {
      console.log("Login failed:", error);
    });
};
</script>

<template>
  <div>
  <br />
    <img src="./logo.png" padding="-20px" width="220px" />
    <br />
    <br />

    
      <h3> Truth is, habits take longer <br />than 21 days to create.</h3>
      <h4>Embrace the journey
      with Beyond 21 and transform your habits into lasting
      lifestyle changes.</h4>
    <br /> <br />
<div id="signupContainer">
    <form>
      <label Username for="UserName"> Username </label>
      <input
        v-model="userName"
        type="text"
        placeholder="e.g., Luuuke"
        class="form-control"
      />
      <br />

      <label Email for="userEmail"> Email</label>
      <input
        v-model="userEmail"
        type="text"
        placeholder="e.g., michelangelo@example.com"
        class="form-control"
      />
      <br />

      <label Password for="password"> Password</label>
      <input
        v-model="password"
        type="password"
        placeholder="e.g., *******************"
        class="form-control"
      />
      <br />
     </form>
      <p><sup> By signing up you are accepting Beyond21's<br/> Terms and Conditions and Privacy Policy</sup> </p>
      <button class="button" type="button" @click="addNewUser">Sign up</button>

      <div class="strike"></div>

      <h2>OR</h2>
      <sup>Already have a Beyond21 account?</sup>
      <br />
      <button class="button" type="click" @click="router.push('/login')">Login</button>
      <br />
    </div>
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
</template>

<style></style>
