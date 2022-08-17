<template>
  <div>
    <router-view></router-view>
    <worksheet-template contentClass="flex flex-row justify-between">
      <template v-slot:options>
        <worksheet-option :isActive="true">활동지 만들기</worksheet-option>
      </template>
      <template v-slot:content>
        <div class="" v-for="(worksheet, index) in worksheetData" :key="index">
          <worksheet-card
            :worksheet="worksheet"
            class="cursor-pointer"
          ></worksheet-card>
        </div>
      </template>
    </worksheet-template>
  </div>
</template>

<script>
import WorksheetOption from "@/components/worksheet/WorksheetOption.vue";
import WorksheetCard from "@/components/worksheet/WorksheetCard.vue";
import WorksheetTemplate from "@/components/worksheet/WorksheetTemplate.vue";

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
          route: "wordsearch",
        },
        {
          filename: "wordsearch_image.png",
          liked: true,
          isReady: false,
          title: "말판 놀이",
          description: "주사위를 굴러 먼저 도착하기",
          heartNum: 7,
          route: "board",
        },
        {
          filename: "wordsearch_image.png",
          liked: true,
          isReady: false,
          title: "도블",
          description: "같은 것 먼저 외치기",
          heartNum: 20,
          route: "dobble",
        },
      ],
    };
  },

  components: { WorksheetOption, WorksheetCard, WorksheetTemplate },
};
</script>
