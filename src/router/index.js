import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // TODO 404 error page
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
    },
    {
      path: "/worksheet",
      component: () =>
        import(/* webpackChunkName: "worksheet" */ "@/views/WorksheetView.vue"),
      children: [
        {
          path: "",
          name: "worksheet",
          component: () =>
            import(
              /* webpackChunkName: "selection" */ "@/views/WorksheetSelectionView.vue"
            ),
        },
        {
          path: "wordsearch",
          component: () =>
            import(
              /* webpackChunkName: "wordsearch" */ "@/views/worksheet/WordsearchView.vue"
            ),
          children: [
            {
              path: "",
              name: "wordsearch",
              component: () =>
                import(
                  /* webpackChunkName: "wordsearch_kr" */ "@/components/wordsearch/LangSelection.vue"
                ),
            },
            {
              path: "kr",
              name: "wordsearch_kr",
              component: () =>
                import(
                  /* webpackChunkName: "wordsearch_kr" */ "@/views/wordsearch/KoreanWordsearchView.vue"
                ),
            },
            {
              path: "en",
              name: "wordsearch_en",
              component: () =>
                import(
                  /* webpackChunkName: "wordsearch_en" */ "@/views/wordsearch/EnglishWordsearchView.vue"
                ),
            },
          ],
        },
        {
          path: "board",
          name: "board",
          component: () =>
            import(
              /* webpackChunkName: "board" */ "@/views/worksheet/BoardView.vue"
            ),
        },
        {
          path: "dobble",
          name: "dobble",
          component: () =>
            import(
              /* webpackChunkName: "dobble" */ "@/views/worksheet/DobbleView.vue"
            ),
        },
      ],
    },

    {
      path: "/suggestion",
      name: "suggestion",
      component: () =>
        import(
          /* webpackChunkName: "suggestion" */ "@/views/SuggestionView.vue"
        ),
    },
  ],
});

export default router;
