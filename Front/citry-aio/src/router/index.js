import { createRouter, createWebHistory } from 'vue-router';
import Notes from '../views/NotesView.vue';
import Counters from '../views/CountersView.vue';
import Timers from '../views/TimersView.vue';
import Home from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
    },
    {
      path: '/counters',
      name: 'counters',
      component: Counters,
    },
    {
      path: '/timers',
      name: 'timers',
      component: Timers,
    },
  ],
});

export default router;
