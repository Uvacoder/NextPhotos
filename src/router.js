import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/project.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
