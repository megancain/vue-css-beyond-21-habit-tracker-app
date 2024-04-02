<script setup>
import { ref } from "vue";
const deleting = ref(false);
const props = defineProps(["habitId"]);

const emit = defineEmits(["delete"]);

const deleteHabit = () => {
  fetch("http://localhost:3000/habits/" + props.habitId, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      // Check if response is empty
      if (res.status === 204) {
        // No content to parse
        return null;
      }
      return res.json();
    })
    .then((deletedHabit) => {
      // Check if deletedHabit is not null (valid response)
      if (deletedHabit !== null) {
        emit("habitDeleted", deletedHabit);
      } else {
        console.log("Habit deleted successfully.");
        // Handle success or emit a different event if needed
      }
    })
    .catch((error) => {
      console.error("Error deleting habit:", error);
    });
};

function confirmDelete(e) {
  deleting.value = e;
}
const handleDelete = () => {
  deleteHabit();
  emit("delete");
};
</script>

<template>
  <form>
    <button v-if="deleting" @click="confirmDelete(false)" class="recordButton">
      Keep habit
    </button>
    <button v-else @click="confirmDelete(true)" class="recordButton">
      Delete
    </button>
    <form v-if="deleting">
      <button type="button" @click="handleDelete" class="deleteButton">
        No really, delete habit
      </button>
    </form>
  </form>
</template>
