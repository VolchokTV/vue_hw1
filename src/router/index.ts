import { createRouter, createWebHistory } from 'vue-router';
import Users from '@/components/Users.vue';
import UserDetails from '@/components/UserDetails.vue'; // Дополнительный компонент для отображения данных пользователя

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Users,
    },
    {
      path: '/user/:id',
      name: 'UserDetails',
      component: UserDetails, // Компонент для отображения деталей пользователя
      props: true, // Передаем параметры как пропсы
    },

    //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
