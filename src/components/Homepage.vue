<script setup>
import { useStore } from "../pinia/index.js"

const store = useStore();

console.log(store.name)
</script>

<template>
  <header>
    <h1>Andy Movies</h1>
    <nav>
      <RouterLink to="/login" custom v-slot="{ navigate }">
        <button @click="navigate">Login</button>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
  }
  h1 {
    display: inline;
    margin: 0;
  }
  nav {
    display: inline;
    align-items: center;
  }
</style>
