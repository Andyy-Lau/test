<script setup>
import { useStore } from "../pinia/index.js";

const store = useStore();

console.log(store.cart);
</script>

<template>
  <Header :info="{ site: 'Checkout', path: '/cart', button: 'Back' }" />
  <div>
    <label for="cardname">Name on Card</label>
    <input type="text" placeholder="Omar Qayum" id="cardname" />
    <label for="cardnumber">Credit Card Number</label>
    <input type="number" placeholder="xxxx-xxxx-xxxx-xxxx" id="cardnumber" />
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
