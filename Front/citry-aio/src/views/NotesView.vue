<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Click on create note to start creating notes !</p>

    <note-add-modal @confirmed="getNotes" />
    <div class="note__container">
      <ul class="note__container__list">
        <li
          class="note__container__list__elem"
          v-for="note in allNotes"
          :key="note._id"
        >
          <note-component
            :notes="note"
            :confirmed="getNotes"
            @delete="deleteNote(note._id)"
          ></note-component>
        </li>
      </ul>
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
  console.log(allNotes.value);
};

const deleteNote = async (id) => {
  console.log(id);
  await notesStore.deleteNote(id);
  getNotes();
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
    margin-top: 20px;
    &__list {
      float: left;
      display: flex;
      justify-content: flex-start;
      justify-self: center;
      flex-wrap: wrap;
      gap: 20px;
      &__elem {
        list-style-type: none;
      }
    }
  }
}
</style>
