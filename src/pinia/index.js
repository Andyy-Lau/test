import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      user: 'tmdb',
      password: 'movies',
      name: 'Eduardo',
    }
  },
})