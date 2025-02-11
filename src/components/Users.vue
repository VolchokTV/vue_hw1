<template>
  <div>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const users = userStore.getUsers; // Получаем пользователей из хранилища

onMounted(async () => {
  await userStore.fetchUsers(); // Загружаем пользователей при монтировании компонента
});
</script>
