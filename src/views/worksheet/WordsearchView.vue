<template>
  <div>
    <worksheet-template>
      <template v-slot:options>
        <worksheet-option :isActive="false" to="worksheet"
          >활동지 만들기</worksheet-option
        >
        <worksheet-option :isActive="false" to="wordsearch"
          >언어 선택</worksheet-option
        >
        <worksheet-option :isActive="true">정보 입력</worksheet-option>
      </template>
    </worksheet-template>
    <router-view></router-view>
  </div>
</template>

<script>
import WorksheetTemplate from "@/components/worksheet/WorksheetTemplate.vue";
import WorksheetOption from "@/components/worksheet/WorksheetOption.vue";

export default {
  data() {
    return {};
  },

  components: { WorksheetTemplate, WorksheetOption },
};
</script>
