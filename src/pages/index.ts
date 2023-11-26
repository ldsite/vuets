/* eslint-disable prettier/prettier */
import { RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/dist/index.html",
        name: "main",
        component: () => import("./main"),
    },
];
