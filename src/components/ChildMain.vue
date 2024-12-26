<template>
  <section class="mainSection">
    <main>
      <h2>Главная секция</h2>
      <h2>Посты</h2>
      <ul>
        <li v-for="post in posts" :key="post.id" class="post">
          <h5>{{ post.title }}</h5>
          <p>{{ post.content }}</p>
        </li>
      </ul>
      <button @click="toggleVisibility">
        {{ toggleButtonText }}
      </button>
    </main>
  </section>
</template>


<script lang="ts">
import type { IPost } from '@/data/posts';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
      posts: {
      type: Array<IPost>,
      required: true,
    },
    },
  computed: {
    toggleButtonText() {
      return this.showAll ? 'Показать первые 10' : 'Показать все';
    }
  },

  data() {
    return {
      showAll: false // Исходное состояние - сначала 10 постов
    };
  },
  methods: {
    toggleVisibility() {
      this.showAll = !this.showAll; // Переключаем состояние видимости постов
      this.$emit('visibility-toggled'); // Эмитируем событие для родительского компонента
    }
  }

});

</script>

<style scoped>
.mainSection {
  color: green;
  font-size: 48px;
}

main {
  padding: 20px;
}

.post {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

ul {
  list-style-type: none;
}

button {
  margin-top: 10px;
  padding: 20px;
}

h5 {
  font-size: 20px;
}

p {
  font-size: 15px;
}
</style>
