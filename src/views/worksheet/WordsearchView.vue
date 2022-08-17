<template>
  <div>
    <worksheet-template contentClass="flex flex-row justify-evenly">
      <template v-slot:options>
        <worksheet-option :isActive="false">활동지 만들기</worksheet-option>
        <worksheet-option :isActive="true">언어 선택</worksheet-option>
      </template>
      <template v-slot:content>
        <div class="flex bg-primary h-44 w-104 rounded-2xl">
          <div class="m-auto text-white font-bold text-5xl">한국어</div>
        </div>
        <div class="flex bg-primary h-44 w-104 rounded-2xl">
          <div class="m-auto text-white font-bold text-5xl">English</div>
        </div>
      </template>
    </worksheet-template>
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
