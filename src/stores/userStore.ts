import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  };

  const getUsers = computed(() => users.value);

  return {
    users,
    fetchUsers,
    getUsers,
  };
});
