import { ref } from "vue";

const productsData = ref([
  {
    id: 1,
    image: "img1.png",
    name: "IPhone 6s Plus 16GB",
    price: 1000,
    salePrice: 649,
    currency: "$",
  },
  {
    id: 2,
    image: "img2.png",
    name: "IPad Pro 32GB",
    price: 800,
    salePrice: 600,
    currency: "$",
  },
  {
    id: 3,
    image: "img3.png",
    name: "MacBook Pro",
    price: 8000,
    salePrice: null,
    currency: "PLN",
  },
]);

export default productsData;
