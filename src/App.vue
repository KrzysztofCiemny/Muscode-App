<script>
import { defineComponent } from 'vue';
import MainPage from './pages/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <div class="flex flex-col items-center">
    <header>
      <h1 class="font-bold text-3xl my-9">Muscode App</h1>
    </header>
    <MainPage />
  </div>
</template>

<style></style>