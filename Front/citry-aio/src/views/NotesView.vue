<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Ici vous pouvez créer des notes / mémos.</p>
    <note-add-modal @confirmed="getNotes" />
    <div class="note__container">
      <note-component
        :title="note.title"
        :content="note.content"
        :priority="note.priority"
        v-for="note in allNotes"
        :key="note.id"
      ></note-component>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/note.js';
import NoteAddModal from '../components/modals/NoteAddModal.vue';
import { ref, onMounted } from 'vue';
import NoteComponent from '../components/notes/NoteComponent.vue';

const notesStore = useNoteStore();

const allNotes = ref([]);

const getNotes = async () => {
  await notesStore.getAllNotes();
  allNotes.value = notesStore.notes;
};

onMounted(() => {
  getNotes();
});
</script>

<style lang="scss" scoped>
.note {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
