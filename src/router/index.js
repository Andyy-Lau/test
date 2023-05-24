import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/HomepageView.vue"
import Login from "../views/LoginView.vue"
import Movie from "../views/MovieView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/movie',
            component: Movie
        },
    ],
});

export default router;