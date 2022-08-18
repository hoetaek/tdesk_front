<template>
  <worksheet-option-list :optionList="optionList"></worksheet-option-list>
  <wordsearch-template></wordsearch-template>
</template>

<script>
import WordsearchTemplate from "../../components/wordsearch/WordsearchTemplate.vue";
import WorksheetOptionList from "@/components/worksheet/WorksheetOptionList.vue";

export default {
  data() {
    return {
      optionList: [
        { title: "활동지 만들기", isActive: false, to: "worksheet" },
        {
          title: "언어 선택",
          isActive: false,
          to: "wordsearch",
        },
        { title: "정보 입력", isActive: true },
      ],
    };
  },
  components: { WorksheetOptionList, WordsearchTemplate },
};
</script>
