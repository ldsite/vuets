/* eslint-disable prettier/prettier */
// import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
// import { routes } from "pages";
// import ArticleListPage from "@/pages/article-list";

// const routes: Array<RouteRecordRaw> = [
//     // eslint-disable-next-line prettier/prettier
//     { path: "/", name: "home", component: ArticleListPage },
// ];
// const router = createRouter({ history: createWebHashHistory(), routes });
// export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routes } from "@/pages/index";

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
// import HomeView from "../views/HomeView.vue";

// const routes: Array<RouteRecordRaw> = [
//     {
//         path: "/",
//         name: "home",
//         component: HomeView,
//     },
//     {
//         path: "/about",
//         name: "about",
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () =>
//             import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//     },
// ];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

// export default router;
