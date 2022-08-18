<template>
  <div>
    <div class="flex flex-row">
      <worksheet-option
        v-for="(option, index) in option_list"
        :key="index"
        :isActive="option.isActive"
        :to="option.to"
      >
        {{ option.title }}
      </worksheet-option>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
import WorksheetOption from "@/components/worksheet/WorksheetOption.vue";
import { useWsOptionStore } from "@/stores/ws_option.js";
import { storeToRefs } from "pinia";
export default {
  components: { WorksheetOption },
  mounted() {
    console.log("mounted");
    this.store.option_list = [
      { title: "활동지 만들기", isActive: true, to: "worksheet" },
    ];
  },
  setup() {
    const store = useWsOptionStore();

    const { option_list } = storeToRefs(store);
    return { store, option_list };
  },
};
</script>
