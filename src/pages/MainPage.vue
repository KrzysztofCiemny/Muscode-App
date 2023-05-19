<script>
import { defineComponent } from 'vue';
import TodoListComponent from '../components/TodoListComponent.vue';
import ProductsListComponent from '../components/ProductsListComponent.vue';
import ProductsTilesComponent from '../components/ProductsTilesComponent.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TodoListComponent,
    ProductsListComponent,
    ProductsTilesComponent
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <main class="grid grid-cols-3 gap-4 w-[73.75rem] mb-10">
    <TodoListComponent />
    <ProductsListComponent class="col-span-2" />
    <ProductsTilesComponent class="col-span-3" />
  </main>
</template>

<style></style>
