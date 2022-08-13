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
      console.log(data);
      await HttpRequestService.post('http://localhost:3001/api/notes/', data);
      await this.getAllNotes();
    },
    async getAllNotes() {
      let allNotes = await HttpRequestService.get(
        'http://localhost:3001/api/notes/'
      );
      this.notes = allNotes.data;
    },
    async deleteNote(id) {
      await HttpRequestService.delete(`http://localhost:3001/api/notes/${id}`);
    },
    async modifyNote(id, data) {
      console.log(data);
      console.log(id);
      await HttpRequestService.put(
        `http://localhost:3001/api/notes/${id}`,
        data
      );
    },
  },
});
