import { defineStore } from 'pinia';
import HttpRequestService from '../services/HttpRequestService.js';

export const useNoteStore = defineStore({
  id: 'note',
  state: () => ({
    notes: [],
  }),
  getters: {
    getNote: (state) => {
      return state.note;
    },
  },
  actions: {
    async setNote(data) {
      await HttpRequestService.post('http://localhost:3001/api/notes/', data);
      await this.getAllNotes();
    },
    async getAllNotes() {
      let allNotes = await HttpRequestService.get(
        'http://localhost:3001/api/notes/'
      );
      this.notes = allNotes.data;
    },
  },
});
