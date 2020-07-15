import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/css"
  },
  {
    path: "/css",
    name: "css",
    component: () => import("../views/Css.vue")
  },
  {
    path: "/interview",
    name: "interview",
    component: () => import("../views/Interview/Interview.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
