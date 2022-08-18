<template>
  <div>
    <worksheet-template>
      <template v-slot:options>
        <!-- TODO go backwards when clicking deactivated option -->
        <worksheet-option :isActive="false">활동지 만들기</worksheet-option>
        <worksheet-option :isActive="false">언어 선택</worksheet-option>
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
