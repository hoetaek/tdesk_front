import { defineStore } from "pinia";

export const useWsOptionStore = defineStore({
  id: "WsOption",
  state: () => ({
    option_list: [],
  }),
});
