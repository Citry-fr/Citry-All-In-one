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
      HttpRequestService.post('http://localhost:3001/api/notes/', data);
    },
    async getAllNotes() {
      let test = await HttpRequestService.get(
        'http://localhost:3001/api/notes/'
      );
      this.notes = test.data;
    },
  },
});
