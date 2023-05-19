<script>
import { defineComponent } from 'vue';
import TodoListComponent from '../components/TodoListComponent.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TodoListComponent
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <main class="w-[73.75rem]">
    <TodoListComponent />
  </main>
</template>

<style></style>
