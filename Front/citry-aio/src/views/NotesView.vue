<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Ici vous pouvez créer des notes / mémos.</p>
    <TestModal />
    <div v-for="item in allNotes" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { useNoteStore } from '@/stores/note.js';
import TestModal from '../components/modals/TestModal.vue';
export default {
  setup() {
    const notesStore = useNoteStore();
    return { notesStore };
  },
  data() {
    return {
      allNotes: [],
    };
  },
  components: {
    TestModal,
  },
  methods: {
    async getNotes() {
      await this.notesStore.getAllNotes();
      this.allNotes = this.notesStore.notes;
      console.log(this.allNotes);
    },
  },
  beforeMount() {
    this.getNotes();
  },
};
</script>

<style lang="scss" scoped>
.note {
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
}
</style>
