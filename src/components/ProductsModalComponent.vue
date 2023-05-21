<script>
import { defineComponent, ref, watchEffect } from 'vue';
import productsData from '../data/productsData';

export default defineComponent({
  name: 'ProductsModalComponent',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    productIndex: {
      type: Number,
      required: true,
    }
  },
  components: {

  },

  setup(props, { emit }) {
    const productName = ref(productsData.value[props.productIndex].name);
    const productPrice = ref(productsData.value[props.productIndex].price);
    const productSalePrice = ref(productsData.value[props.productIndex].salePrice);
    const productCurrency = ref(productsData.value[props.productIndex].currency);

    watchEffect(() => {
      productName.value = productsData.value[props.productIndex].name;
      productPrice.value = productsData.value[props.productIndex].price;
      productSalePrice.value = productsData.value[props.productIndex].salePrice;
      productCurrency.value = productsData.value[props.productIndex].currency;
    });

    const submitChange = () => {
      productsData.value[props.productIndex].name = productName.value;
      productsData.value[props.productIndex].price = productPrice.value;
      productsData.value[props.productIndex].salePrice = productSalePrice.value;
      productsData.value[props.productIndex].currency = productCurrency.value;
      emit('isClosed', true);
    }

    const cancelChange = () => {
      productName.value = productsData.value[props.productIndex].name;
      productPrice.value = productsData.value[props.productIndex].price;
      productSalePrice.value = productsData.value[props.productIndex].salePrice;
      productCurrency.value = productsData.value[props.productIndex].currency;
      emit('isClosed', true);
    }

    return {
      productName,
      productPrice,
      productSalePrice,
      productCurrency,
      productsData,
      submitChange,
      cancelChange
    }
  }
});

</script>

<template>
  <div v-if="isOpen" class="fixed top-0 left-0 w-screen h-screen bg-gray-600 opacity-75"></div>
  <section :class="isOpen ? 'transform-none' : 'translate-x-full'"
    class="fixed top-0 right-0 flex flex-col h-screen w-1/3 bg-white transition-transform">
    <div class="flex flex-row items-center border-b-[3px] border-blue-800 pl-1.5 py-3">
      <h5 class="text-base font-medium">Edycja produktu: {{ productsData[productIndex].name }}</h5>
    </div>
    <div class="flex flex-col items-center py-7">
      <div :style="`background-image: url(${productsData[productIndex].image})`"
        class="w-52 h-52 rounded-full bg-center bg-cover"></div>
    </div>
    <div class="pl-1.5 flex-grow">
      <div class="text-xs">
        <span class="modal-input-span">Nazwa produktu</span>
        <input v-model="productName" type="text" id="name" class="modal-input" placeholder="Podaj nową nazwe" />
      </div>
      <div class="text-xs mt-3">
        <span class="modal-input-span">Cena</span>
        <input v-model="productPrice" type="number" id="price" class="modal-input" placeholder="Podaj nową conę" />
      </div>
      <div class="text-xs mt-3">
        <span class="modal-input-span">Promocyjna cena</span>
        <input v-model="productSalePrice" type="number" id="salePrice" class="modal-input"
          placeholder="Podaj nową promocyjną cenę" />
      </div>
      <div class="text-xs mt-3">
        <span class="modal-input-span">Waluta</span>
        <select v-model="productCurrency" class="modal-input cursor-pointer">
          <option>$</option>
          <option>PLN</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
    <div class="flex px-1.5 py-2 gap-2 border-t border-border-default">
      <button type="button" class="w-16 h-7 bg-button-active border border-border-default text-white"
        @click="submitChange">Zapisz</button>
      <button type="button" class="w-16 h-7 border border-border-default" @click="cancelChange">Anuluj</button>
    </div>
  </section>
</template>

<style></style>