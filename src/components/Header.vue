<script setup>
import router from "../router/index.js";

const header = defineProps({
  info: Object,
});

function Clicked() {
  router.push(header.info.path);
}
</script>

<template>
  <div class="header">
    <h1>{{ info.site }}</h1>
    <nav>
      <button @click="Clicked()">{{ info.button }}</button>
    </nav>
  </div>
</template>

<style scoped>
.header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #414568;
  border-radius: 12px;
  margin-bottom: 1rem;
}
h1 {
  padding-left: 1rem;
}
nav {
  display: flex;
  width: auto;
  justify-content: space-evenly;
  margin-right: 1rem;
}
button {
  padding: 6px 24px;
  font-size: 20px;
  border-radius: 8px;
  border: none;
}
</style>
