<template>
  <router-view></router-view>
</template>

<script>
import { useWsOptionStore } from "@/stores/ws_option.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.store.option_list.push({
      title: "언어 선택",
      isActive: true,
      to: "wordsearch",
    });
    this.store.option_list.find(
      (o) => o.title === "활동지 만들기"
    ).isActive = false;
  },
  unmounted() {
    this.store.option_list.pop();
    this.store.option_list.find(
      (o) => o.title === "활동지 만들기"
    ).isActive = true;
  },

  setup() {
    const store = useWsOptionStore();
    return { store };
  },
};
</script>
