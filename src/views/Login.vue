<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userEmail = ref("");
const password = ref("");
/* const loggedIn = ref(false); */
let token = ref(null);
/* const state = reactive({ token: null }); */

const initiateLogin = () => {
  fetch("http://localhost:3000/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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
      console.log(data.auth);
      /* loggedIn.value = true; */
      token = data.auth;
      localStorage.setItem("token", JSON.stringify(token));
      /* state.token = data.auth; */
      router.push("/habits");
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

    <form id="loginContainer" @submit.prevent="initiateLogin">
      <label Email for="userName"> Email (case-sensitive) </label>
      <input
        v-model="userEmail"
        type="text"
        placeholder="Email (case-sensitive)"
        class="form-control"
      />
      <br />
      <label Email for="password"> Password </label>
      <a class="float-right forgot-password"> Forgot Password? </a>
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="form-control"
      />
      <br />

      <br />
      <button class="button" type="submit">Login</button>
      <br />

      <div class="strike"></div>
      <h2>OR</h2>
      <sup>Don't have a Beyond 21 account?</sup>
      <br />
      <button class="button" @click="router.push('/signup')" type="submit">New User Sign up</button>
    </form>
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
