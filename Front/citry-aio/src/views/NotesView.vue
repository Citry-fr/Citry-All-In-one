<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Ici vous pouvez créer des notes / mémos.</p>
    <note-add-modal @confirmed="getNotes" />
    <div class="note__container">
      <div class="note__container__list">
        <note-component
          :title="note.title"
          :content="note.content"
          :priority="note.priority"
          v-for="note in allNotes"
          :key="note._id"
          @modify="modifyNote"
          @delete="deleteNote(note._id)"
        ></note-component>
      </div>
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
const isModify = ref();

const getNotes = async () => {
  await notesStore.getAllNotes();
  allNotes.value = notesStore.notes;
};

const modifyNote = () => {
  isModify.value = true;
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
    display: flex;
    justify-content: center;
    &__list {
      width: 95%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
}
</style>
