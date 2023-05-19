<script>
import { defineComponent } from 'vue';
import TodoListComponent from '../components/TodoListComponent.vue';
import ProductsListComponent from '../components/ProductsListComponent.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TodoListComponent,
    ProductsListComponent
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <main class="w-[73.75rem]">
    <TodoListComponent />
    <ProductsListComponent />
  </main>
</template>

<style></style>
