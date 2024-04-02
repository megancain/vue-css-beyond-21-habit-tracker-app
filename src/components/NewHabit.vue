<script setup>
import { ref } from "vue";
const newHabitName = ref("");
const newHabitNum = ref("");
const newHabitUnit = ref("");
const newHabitComment = ref("");
const addingHabit = ref(false);
//get token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const emit = defineEmits(["habitAdded"]);
//add habit function
const addNewHabit = () => {
  fetch("http://localhost:3000/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      habitName: newHabitName.value,
      numVal: newHabitNum.value,
      unit: newHabitUnit.value,
      comment: newHabitComment.value,
      completed: false,
      updatedAt: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((addedHabit) => {
      emit("habitAdded", addedHabit);
      resetHabit();
    });
};
//show habit form
const addHabit = (e) => {
  addingHabit.value = e;
};
//refresh textboxes
const resetHabit = () => {
  newHabitName.value = "";
  newHabitNum.value = "";
  newHabitUnit.value = "";
  newHabitComment.value = "";
  addingHabit.value = false;
};
</script>

<template>
  <div>
    <br />
    <form
      v-if="addingHabit"
      @submit.prevent="addNewHabit"
      id="newHabitContainer"
    >
      <label username="" for="newHabitName"> New Habit </label>
      <input
        v-model="newHabitName"
        class="newForm"
        type="text"
        placeholder="e.g., Code 30 Minutes"
      />
      <br />
      <label username="" for="newHabitName">
        Amount in a Day (numeric value)
      </label>
      <input
        v-model="newHabitNum"
        class="newForm"
        type="number"
        placeholder="e.g., 3 "
      />
      <select v-model="newHabitUnit">
        <option disabled value="">Select a unit</option>
        <option>Times</option>
        <option>Min</option>
      </select>
      <br /><label username="" for="newHabitName">
        Additional Comment(s)?
      </label>

      <input
        v-model="newHabitComment"
        class="newForm"
        type="textbox"
        placeholder="e.g., I Do Better Coding at Night After A Workout."
      />
      <br />
      <button class="button" type="submit">Add New Habit</button>

      <button v-if="addingHabit" @click="addHabit(false)" class="button">
        Nevermind
      </button>
    </form>
    <button v-else @click="addHabit(true)" class="button">Add Habit</button>
  </div>
</template>

<style></style>
