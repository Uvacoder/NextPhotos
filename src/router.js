import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;
