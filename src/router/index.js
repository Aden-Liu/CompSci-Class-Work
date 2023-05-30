import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import PurchasePage from "../pages/PurchasePage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/purchase",
      component: PurchasePage,
    },
    {
      path: "/cart",
      component: CartPage,
    }
  ],
});
