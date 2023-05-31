import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: "tmdb",
    password: "movies",
    movies: [],
    cart: [],
    counter: 0,
  }),
  actions: {
    // addToCart(posterPath, movieTitle) {
    //   this.cart.push({
    //     poster: posterPath,
    //     title: movieTitle,
    //   });
    addToCart(posterPath, movieTitle, movieRelease, movieOverview) {
      this.counter = 1;
      console.log(this.cart.length);
      if (this.cart.length == 0) {
        this.cart.push({
          poster: posterPath,
          title: movieTitle,
          release: movieRelease,
          overview: movieOverview,
          quantity: 1,
        });
      } else {
        for (var i = 0; i < this.cart.length; i++) {
          if (movieTitle == this.cart[i].title) {
            this.counter += this.cart[i].quantity;
            this.cart.splice([i], 1);
          }
        }
        this.cart.push({
          poster: posterPath,
          title: movieTitle,
          release: movieRelease,
          overview: movieOverview,
          quantity: this.counter,
        });
      }
      console.log(this.cart);
    },
  },
});
