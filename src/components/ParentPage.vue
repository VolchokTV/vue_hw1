<template>
  <div class="myHeader">

    <ChildHeader />
  </div>
  <section>
    <div>
      <div>
        <ChildMain />
      </div>
      <div>
        <ChildSideBar />
      </div>
    </div>
  </section>
  <div class="myFooter">

    <ChildFooter />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChildHeader from './ChildHeader.vue';
import ChildMain from './ChildMain.vue';
import ChildSideBar from './ChildSideBar.vue';
import ChildFooter from './ChildFooter.vue';

export default defineComponent({
  name: 'ParentPage',
  components: { ChildHeader, ChildMain, ChildSideBar, ChildFooter },


});
</script>

<style scoped>
.myHeader {
  color: brown;
  background-color: aquamarine;
}
</style>
