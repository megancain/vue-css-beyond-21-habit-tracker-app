<script setup>
import { ref } from "vue";
//user token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);

const props = defineProps(["habitId", "note"]);
const emit = defineEmits(["missedHabit"]);

const addFailedRecord = () => {
  fetch(`http://localhost:3000/habits/${props.habitId}/missed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      note: props.note,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add record");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Record added successfully:", data);
      // Perform any additional actions afterding the record
    })
    .then((habitMissed) => {
      emit("missedHabit", habitMissed);
    })
    .catch((error) => {
      console.error("Error adding record:", error);
    });
};
</script>

<template>
  <button class="recordButton" type="button" @click="addFailedRecord">
    Incomplete
  </button>
</template>
