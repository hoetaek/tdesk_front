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
      component: () =>
        import(
          /* webpackChunkName: "worksheet" */ "../views/WorksheetView.vue"
        ),
      children: [
        {
          path: "",
          name: "worksheet",
          component: () =>
            import(
              /* webpackChunkName: "selection" */ "../views/WorksheetSelectionView.vue"
            ),
        },
        {
          path: "wordsearch",
          name: "wordsearch",
          component: () =>
            import(
              /* webpackChunkName: "wordsearch" */ "../views/worksheet/WordsearchView.vue"
            ),
        },
        {
          path: "board",
          name: "board",
          component: () =>
            import(
              /* webpackChunkName: "board" */ "../views/worksheet/BoardView.vue"
            ),
        },
        {
          path: "dobble",
          name: "dobble",
          component: () =>
            import(
              /* webpackChunkName: "dobble" */ "../views/worksheet/DobbleView.vue"
            ),
        },
      ],
    },

    {
      path: "/suggestion",
      name: "suggestion",
      component: () =>
        import(
          /* webpackChunkName: "suggestion" */ "../views/SuggestionView.vue"
        ),
    },
  ],
});

export default router;
