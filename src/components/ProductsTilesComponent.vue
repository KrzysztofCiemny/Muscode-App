<script>
import { defineComponent, ref } from 'vue';
import CardComponent from './CardComponent.vue';
import productsData from '../data/productsData';
import ProductsModalComponent from '../components/ProductsModalComponent.vue'

export default defineComponent({
  name: 'ProductsTilesComponent',
  components: {
    CardComponent,
    ProductsModalComponent
  },

  setup() {
    const isOpen = ref(false);
    const productIndex = ref(0)
    const displayModal = (id) => {
      isOpen.value = true;
      productIndex.value = id - 1;
    }
    return {
      productsData,
      isOpen,
      displayModal,
      productIndex,
    }
  }
});

</script>

<template>
  <section class="grid grid-cols-3 gap-4">
    <CardComponent v-for="product in productsData" :key="product.id" class="relative overflow-hidden cursor-pointer"
      @click="displayModal(product.id)">
      <template #header>
        <h5 class="text-base font-medium mb-3">{{ product.name }}</h5>
        <div v-if="product.salePrice"
          class="absolute top-[2rem] -right-[4.063rem] flex flex-row justify-center items-center w-52 bg-black text-white rotate-45 text-xs">
          -{{ Math.floor(((product.price - product.salePrice) / product.price) * 100) }}%
        </div>
      </template>
      <template #content>
        <div class="flex flex-col items-center gap-3">
          <img :src="product.image" class="max-h-[175px]" />
          <div class="flex flex-col items-center">
            <p v-if="product.salePrice" class="text-button-active font-semibold text-xl">{{ product.salePrice }} {{
              product.currency }}</p>
            <p :class="!product.salePrice ? 'text-button-active font-semibold text-xl' : 'line-through'">{{ product.price
            }} {{ product.currency }}</p>
          </div>
        </div>
      </template>
    </CardComponent>
    <ProductsModalComponent :isOpen="isOpen" :productIndex="productIndex" @isClosed="isOpen = false" />
  </section>
</template>

<style></style>
