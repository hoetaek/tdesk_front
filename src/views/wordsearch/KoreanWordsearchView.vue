<template>
  <wordsearch-template></wordsearch-template>
</template>

<script>
import WordsearchTemplate from "../../components/wordsearch/WordsearchTemplate.vue";
import { useWsOptionStore } from "@/stores/ws_option.js";

export default {
  components: { WordsearchTemplate },
  mounted() {
    this.store.option_list.push({ title: "정보 입력", isActive: true });
    this.store.option_list.find(
      (o) => o.title === "언어 선택"
    ).isActive = false;
  },
  unmounted() {
    this.store.option_list.pop();
    this.store.option_list.find((o) => o.title === "언어 선택").isActive = true;
  },
  setup() {
    const store = useWsOptionStore();
    // var { option_list } = storeToRefs(store);
    // option_list.push({ title: "언어 선택", isActive: false, to: "wordsearch" });
    // option_list.push({ title: "정보 입력", isActive: true });
    // store.option_list = [
    //   { title: "활동지 만들기", isActive: false, to: "worksheet" },
    //   { title: "언어 선택", isActive: false, to: "wordsearch" },
    //   { title: "정보 입력", isActive: true },
    // ];
    return { store };
  },
};
</script>
