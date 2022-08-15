import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/worksheet",
      name: "worksheet",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/WorksheetView.vue"),
    },
    {
      path: "/wordsearch",
      name: "wordsearch",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/WordsearchView.vue"),
    },
    {
      path: "/suggestion",
      name: "suggestion",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/SuggestionView.vue"),
    },
  ],
});

export default router;
