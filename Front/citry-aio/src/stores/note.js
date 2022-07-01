import { defineStore } from 'pinia';

export const useNoteStore = defineStore({
  id: 'note',
  state: () => ({
    note: {},
  }),
  getters: {
    getNote(state) {
      return state.note;
    },
  },
  actions: {
    setNote(data) {
      this.note = data;
      console.log(this.note);
    },
  },
});
