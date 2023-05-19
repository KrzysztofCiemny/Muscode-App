<script>
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import productsData from '../data/productsData.js'

export default defineComponent({
  name: 'ProductsListComponent',
  components: {
    CardComponent
  },

  setup() {

    return {
      productsData,
    }
  }
});

</script>

<template>
  <CardComponent>
    <template #header>
      <h5 class="text-base font-medium mb-3">Lista Produktów</h5>
    </template>
    <template #content>
      <table class="min-w-full">
        <thead class="border-b border-border-default">
          <tr>
            <th scope="col" class="table-header-cell">
              #
            </th>
            <th scope="col" class="table-header-cell">
              Nazwa
            </th>
            <th scope="col" class="table-header-cell">
              Promocyjna cena
            </th>
            <th scope="col" class="table-header-cell">
              cena
            </th>
            <th scope="col" class="table-header-cell">
              waluta
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsData" :key="product.id"
            class="border-b border-border-default transition duration-300 ease-in-out hover:bg-row-background-hover">
            <td class="table-data-cell">{{ product.id }}</td>
            <td class="table-data-cell">
              {{ product.name }}
            </td>
            <td class="table-data-cell">
              {{ product.salePrice }}
            </td>
            <td class="table-data-cell">
              {{ product.price }}
            </td>
            <td class="table-data-cell">
              {{ product.currency }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </CardComponent>
</template>

<style></style>