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
    addToCart(posterPath, movieTitle) {
      this.counter = 1
    if (this.cart.length == 0) {
          this.cart.push({
            poster: posterPath,
            title: movieTitle,
            quantity: 1,
          });    
    } else {
      for (let i = 0; i < this.cart.length; i++) {
        if (movieTitle == this.cart[i].title) {
          this.counter += this.cart[i].quantity
        }
      }
      this.cart.splice([i],1);    
      this.cart.push({
        poster: posterPath,
        title: movieTitle,
        quantity: this.counter
      });    
    }
      console.log(this.cart);
    },
  },
});
