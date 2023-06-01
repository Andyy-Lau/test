<script setup>
import { useStore } from "../pinia/index.js";
import Header from "../components/Header.vue";

const store = useStore();

const alert = () => {
  console.log("alert")
}
</script>

<template>
  <body>
    <Header :info="{ site: 'Checkout', path: '/cart', button: 'Back' }" />
    <form @submit="alert()">
      <label for="cardname">Name on Card</label>
      <input type="text" placeholder="Omar Qayum" id="cardname" />
      <label for="cardnumber">Credit Card Number</label>
      <input type="number" placeholder="xxxx-xxxx-xxxx-xxxx" id="cardnumber" />
      <label for="expirydate">Expiry Date</label>
      <input type="number" placeholder="DD/MM" id="expirydate" />
      <label for="securitycode">CVV</label>
      <input type="number" placeholder="123" id="securitycode" />
      <input type="submit" value="Checkout" />
    </form>
  </body>
</template>

<style scoped>
body {
  background-color: rgb(162, 164, 165);
  min-height: 100vh;
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 22px;
  margin-left: 1rem;
  height: 250px;
  gap: 1rem 0;
}
input {
  width: 25vw;
  height: 26px;
  /* justify-self: center; */
  font-size: 16px;
}
label {
  width: 30vw;
  align-self: center;
  /* margin-bottom: 1rem; */
  /* justify-self: center; */
}
input[type="submit"] {
  width: 105px;
  height: 32px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  grid-column-start: 2;
  justify-self: end;
  margin-right: 9rem;
}
#cardname {
  grid-row-start: 2;
}
#expirydate {
  grid-row-start: 4;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::placeholder {
  text-align: center;
}
</style>
