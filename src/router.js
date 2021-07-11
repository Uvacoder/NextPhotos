import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/project"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
