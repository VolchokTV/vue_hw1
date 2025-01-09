<template>
  <div :class="theme">
    <ChildHeader @theme-toggled="toggleTheme" :theme-name="themeName" />
    <section>
      <div class="content">
        <div>
          <ChildMain :showAll="showAll" :posts="posts" @toggleList="toggleList" />
        </div>
        <div>
          <ChildSideBar />
        </div>
      </div>
    </section>
    <div class="myFooter">
      <ChildFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ChildHeader from './ChildHeader.vue';
import ChildMain from './ChildMain.vue';
import ChildSideBar from './ChildSideBar.vue';
import ChildFooter from './ChildFooter.vue';
import { posts } from '@/data/posts';

const theme = ref('light'); // Начальная тема
//const posts = ref([]);
//const showAll = ref(false); // Статус отображения всех постов
const showAll = ref(false); // Исходное состояние - сначала 10 постов
// Переключение темы
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };
// Сообщение на кнопке
const themeName = computed(() =>{
  return theme.value === 'light' ? 'dark' : 'light';
});

// Переключение состояния
const toggleList = () => {
    showAll.value = !showAll.value;
  };
</script>

<style scoped>
.myHeader {
  color: brown;
}

.light {
  background-color: aquamarine;
  color: black;
}

.dark {
  background-color: black;
  color: aquamarine;
}

.content {
  display: flex;
}

aside {
  width: 200px;
}

main {
  flex-grow: 1;
}
</style>
