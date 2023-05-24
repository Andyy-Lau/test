<script setup></script>

<template>
  <body>
    <header>
      <h1>Andy Movies</h1>
      <nav>
        <RouterLink to="/login" custom v-slot="{ navigate }">
          <button @click="navigate">Login</button>
        </RouterLink>
        <RouterLink to="/movie" custom v-slot="{ navigate }">
          <button @click="navigate">Movie</button>
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
          <button @click="navigate">Cart</button>
        </RouterLink>
      </nav>
    </header>
    <div class="content"></div>
    <footer>
      <div>
        <h2>Contact:</h2>
      </div>
      <div>
        <h3>Phone: (416) 396-6675</h3>
        <h3>Motto: Ad Omnia Paratus</h3>
      </div>
    </footer>
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
  background-color: #282a36;
}
header {
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
}
.content {
  position: relative;
  width: 100vw;
  min-height: 80vh;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 10vh;
}
</style>
