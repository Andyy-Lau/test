import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/HomepageView.vue"
import Login from "../views/LoginView.vue"
import Purchase from "../views/PurchaseView.vue"
import Cart from "../views/CartView.vue"

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
            path: '/purchase',
            component: Purchase
        },
        {
            path: '/cart',
            component: Cart
        },
    ],
});

export default router;