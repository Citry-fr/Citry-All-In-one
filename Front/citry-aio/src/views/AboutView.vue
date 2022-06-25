<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <h2>{{ note.title }}</h2>
      <p>{{ note.content }} | {{ note.priority }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    getAllNotes() {
      axios
        .get('http://localhost:3001/api/notes/')
        .then((response) => {
          this.notes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllNotes();
  },
};
</script>

<style lang="scss" scoped></style>
