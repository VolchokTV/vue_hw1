<template>
  <div :class="theme">

    <ChildHeader @theme-toggled="toggleTheme" :theme-name="themeName" />

    <section>
      <div class="content">
        <div>
          <ChildMain :posts="visiblePosts" @visibility-toggled="togglePostVisibility" />

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

<script lang="ts">
import { defineComponent } from 'vue';
import ChildHeader from './ChildHeader.vue';
import ChildMain from './ChildMain.vue';
import ChildSideBar from './ChildSideBar.vue';
import ChildFooter from './ChildFooter.vue';
import { posts } from '@/data/posts';

export default defineComponent({
  name: 'ParentPage',
  components: { ChildHeader, ChildMain, ChildSideBar, ChildFooter },
  data() {
    return {
      theme: 'light', // Начальная тема
      posts,
      showAll: false // Статус отображения всех постов
    };
  },
  computed: {
    themeName() {
      return this.theme === 'light' ? 'dark' : 'light'; // Сообщение на кнопке

    },
    visiblePosts() {
      return this.showAll ? this.posts : this.posts.slice(0, 10); // Возвращаем 10 или все посты
    },

  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';// Переключение темы
    },
    togglePostVisibility() {
      this.showAll = !this.showAll; // Переключение состояния
    }
  }

});
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
