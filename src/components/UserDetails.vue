<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
  </div>
  <div v-else>
    <p>Загрузка...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();
const user = ref(null);

onMounted(() => {
  const userId = Number(route.params.id); // Получаем ID пользователя из параметров маршрута
  user.value = userStore.users.find(u => u.id === userId); // Ищем пользователя в хранилище
});
</script>
