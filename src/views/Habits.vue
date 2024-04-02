<script setup>
import { ref } from "vue";
import ListHabits from "../components/ListHabits.vue";
import NewHabit from "../components/NewHabit.vue/";
import HabitRecord from "../components/HabitRecord.vue";
const userInfo = ref([]);
//store token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
//get user
fetch("http://localhost:3000/user", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    return res.json();
  })
  .then((data) => {
    userInfo.value = data;
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
</script>
<template>
  <br />
  <img src="/src/views/logo.png" padding="-20px" width="220px" />
  <br />
  <br />
  <div class="Hello user container">
    <h3>Hello {{ userInfo.username }}!</h3>
    <!-- habits container -->
    <h4>Let's get after it! Ready. Set. Go!</h4>
  </div>
  <div>
    <ListHabits />
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="dataViz">
    <!--  <iframe
      style="
        background: #21313c;
        border: none;
        border-radius: 2px;
        box-shadow: 0 2px 10px 0 rgba(70, 76, 79, 0.2);
        width: 100vw;
        height: 100vh;
      "
      src="https://charts.mongodb.com/charts-habit-tracker-rkcfu/embed/dashboards?id=63cab595-3b49-4aca-97c2-d7014bc059c3&theme=dark&autoRefresh=true&maxDataAge=300&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
    ></iframe> -->
  </div>
</template>
