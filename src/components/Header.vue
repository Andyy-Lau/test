<script setup>
import router from "../router/index.js"
</script>

<template>
    <div class="header">
      <h1>Andy Movies</h1>
      <nav>
          <button @click="router.push('/login')">Login</button>
          <button @click="router.push('/purchase')">Movies</button>
          <button @click="router.push('/cart')">Cart</button>
      </nav>
    </div>
</template>

<style scoped>
.header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191f4f;
  border-radius: 12px;
}
h1 {
  padding-left: 1rem;
}
nav {
  display: flex;
  width: 30vw;
  justify-content: space-evenly;
}
button {
  padding: 6px 24px;
  font-size: 20px;
  border-radius: 8px;
  border: none;
}</style>