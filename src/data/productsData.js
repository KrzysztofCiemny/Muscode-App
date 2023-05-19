import { ref } from "vue";

const productsData = ref([
  {
    id: 1,
    name: "IPhone 6s Plus 16GB",
    price: 1000,
    salePrice: 649,
    currency: "$",
  },
  {
    id: 2,
    name: "IPad Pro 32GB",
    price: 800,
    salePrice: 600,
    currency: "$",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 8000,
    salePrice: null,
    currency: "PLN",
  },
]);

export default productsData;
