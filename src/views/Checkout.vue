<script setup>
import { useStore } from "../pinia/index.js";
import Header from "../components/Header.vue";

const store = useStore();

const alert = () => {
  console.log("alert");
};
</script>

<template>
  <body>
    <Header :info="{ site: 'Checkout', path: '/cart', button: 'Back' }" />
    <div class="form-container">
      <form>
        <div class="input-container">
          <input type="text" id="name" required />
          <label for="name">First Name</label>
        </div>

        <div class="input-container">
          <input type="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <div class="input-container">
          <input type="number" id="cardnumber" required />
          <label for="cardnumber">Card Number</label>
        </div>
        <div class="input-container">
          <input type="number" id="securitycode" required />
          <label for="securitycode">Security Code</label>
        </div>
        <div class="input-container">
          <input type="text" id="expirydate" required />
          <label for="expirydate">Expiry Date</label>
        </div>
        <div class="input-container">
          <input type="submit" value="Checkout"/>
        </div>
      </form>
    </div>
  </body>
</template>

<style scoped>
:root {
  --accent-color: #6200ee;
}

body {
  margin: 0;
  font-family: Roboto, sans-serif;
  min-height: 100vh;
  background-color: #dcdcdc;
}

.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 95%;
  max-width: 500px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%), 0 0 15px 0 rgb(0 0 0 / 2%),
    0 0 20px 4px rgb(0 0 0 / 6%);
}

.input-container {
  background-color: #f5f5f5;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
}

.input-container:hover {
  background-color: #ececec;
}

.input-container:focus-within {
  background-color: #dcdcdc;
}

label {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
}

input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: var(--accent-color);
  border: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;
}
input[type=submit] {
  border: 1px solid black;
  max-width: 40%;
  padding-top: 6px;
}
input:focus {
  outline: none;
  border-bottom-width: 2px;
  border-bottom-color: var(--accent-color);
}

input:focus + label {
  color: var(--accent-color);
}

input:focus + label,
input.is-valid + label {
  transform: translateY(-100%) scale(0.75);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
