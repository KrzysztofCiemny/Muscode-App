<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  components: {
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <section class="bg-card-background p-4 rounded-lg shadow-card-shadow">
    <slot name="header"></slot>
    <slot name="content"></slot>
  </section>
</template>

<style></style>