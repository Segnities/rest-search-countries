import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import Country from "./components/pages/Country.vue";

import NotFound from "./components/pages/NotFound.vue";

const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/country/:id', component: Country },
   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
   history: createWebHistory(),
   routes
});