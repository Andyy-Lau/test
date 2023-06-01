<script setup>
import { useStore } from "../pinia/index.js";
import { ref } from "vue";
import router from "../router/index.js";

const store = useStore();
const password = ref();
const user = ref();

const Login = () => {
  if (password.value == store.password && user.value == store.user) {
    router.push("/purchase");
  }
};
</script>

<template>
  <body>
    <header>
      <h1>Login</h1>
    </header>
    <form @submit.prevent="Login">
      <div class="user">
        <label for="user">Username</label>
        <input id="user" v-model="user" type="text" />
      </div>
      <div class="password">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </body>
</template>

<style scoped>
:root {
  --accent-color: #6200ee;
}
header {
  text-align: center;
}
h1 {
  padding-top: 10px;
  margin-bottom: 1rem;
}
form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  justify-items: center;
}
form > * {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
label {
  margin-right: 1rem;
}
</style>
