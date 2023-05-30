import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: "tmdb",
    password: "movies",
    movies: [],
    cart: [],
  }),
  actions: {
    addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
      console.log(this.cart);
    }
  }
});
