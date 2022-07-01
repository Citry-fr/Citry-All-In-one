<template>
  <div class="note">
    <h2 class="note__title">Note</h2>
    <p>Ici vous pouvez créer des notes / mémos.</p>
    <TestModal />
    <button @click="readNote">test</button>
  </div>
</template>

<script>
import { useNoteStore } from '@/stores/note.js';
import TestModal from '../components/modals/TestModal.vue';
export default {
  setup() {
    const note = useNoteStore();
    return { note };
  },
  components: {
    TestModal,
  },
  methods: {
    readNote() {
      console.log(this.note.note);
    },
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
