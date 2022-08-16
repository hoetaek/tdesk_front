<template>
  <div class="flex flex-row mb-9">
    <worksheet-option>활동지 만들기</worksheet-option>
    <worksheet-option>언어 선택</worksheet-option>
    <worksheet-option>정보 입력</worksheet-option>
  </div>
  <div class="flex flex-row justify-between">
    <div class="" v-for="(worksheet, index) in worksheetData" :key="index">
      <worksheet-card
        :worksheet="worksheet"
        @click.prevent="selectWorksheet(index)"
        class="cursor-pointer"
      ></worksheet-card>
    </div>
  </div>
</template>

<script>
import WorksheetOption from "../components/WorksheetOption.vue";
import WorksheetCard from "../components/WorksheetCard.vue";

export default {
  data() {
    return {
      worksheetData: [
        {
          filename: "wordsearch_image.png",
          liked: true,
          isReady: true,
          title: "낱말 찾기",
          description: "주어진 낱말에서 학습할 낱말 찾기",
          heartNum: 10,
        },
        {
          filename: "wordsearch_image.png",
          liked: true,
          isReady: false,
          title: "말판 놀이",
          description: "주사위를 굴러 먼저 도착하기",
          heartNum: 7,
        },
        {
          filename: "wordsearch_image.png",
          liked: true,
          isReady: false,
          title: "도블",
          description: "같은 것 먼저 외치기",
          heartNum: 20,
        },
      ],
      selectedWorksheet: null,
    };
  },
  methods: {
    selectWorksheet(index) {
      this.selectedWorksheet = index;
      console.log(this.selectedWorksheet);
    },
  },
  components: { WorksheetOption, WorksheetCard },
};
</script>
