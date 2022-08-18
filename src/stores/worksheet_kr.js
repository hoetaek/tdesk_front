import { defineStore } from "pinia";

export const useWorksheetKrStore = defineStore({
  id: "worksheetKr",
  state: () => ({
    text1: "",
  }),
  //   getters: {
  //     doubleCount: (state) => state.counter * 2,
  //   },
  //   actions: {
  //     increment() {
  //       this.counter++;
  //     },
  //   },
});
