<template>
  <div>
    <div
      class="flex flex-row justify-between border-solid border-2 border-black rounded-4xl p-7"
    >
      <div class="font-bold text-2xl">난이도</div>
      <div class="flex flex-row text-xl gap-2">
        <small-button>쉬움</small-button>
        <small-button>보통</small-button>
        <small-button>어려움</small-button>
      </div>
    </div>
  </div>
</template>

<script>
import SmallButton from "@/components/SmallButton.vue";

export default {
  components: {
    SmallButton,
  },
};
</script>
