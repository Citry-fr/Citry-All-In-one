<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Ici vous pouvez créer des notes / mémos.</p>
    <note-add-modal @confirmed="getNotes" />
    <div v-for="item in allNotes" :key="item.id">
      {{ item.title }}
    </div>
    <button @click="logNotes">Test</button>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/note.js';
import NoteAddModal from '../components/modals/NoteAddModal.vue';
import { ref, onMounted } from 'vue';

const notesStore = useNoteStore();

const allNotes = ref([]);

const getNotes = async () => {
  await notesStore.getAllNotes();
  allNotes.value = notesStore.notes;
};

const logNotes = () => {
  console.log(allNotes.value);
};

onMounted(() => {
  getNotes();
});
</script>

<style lang="scss" scoped>
.note {
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
}
</style>
