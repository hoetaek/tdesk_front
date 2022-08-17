<template>
  <div>
    <div class="flex flex-row mb-9">
      <slot name="options"></slot>
    </div>
    <div :class="contentClass">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentClass: String,
  },
};
</script>
