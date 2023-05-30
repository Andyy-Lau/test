import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: "tmdb",
    password: "movies",
    movies: [],
    cart: [],
  }),
  actions: {
    addToCart(posterPath, movieTitle) {
      this.cart.push({
        poster: posterPath,
        title: movieTitle,
      });
      console.log(this.cart);
    },
  },
});
