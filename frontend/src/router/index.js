import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import About from '@/views/About.vue';
import ListEvaluations from '@/components/ListEvaluations.vue';
import { useAuthStore } from '@/stores/auth';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/historico', component: ListEvaluations, meta:{requiresAuth: true} },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  auth.checkAuth(); // restaurar sesión si existe en localStorage

  // proteger rutas privadas
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return next('/login');
  }
  next();
})

export default router