<template>
  <div>
    <div
      class="border-solid border-4 rounded-full text-center py-4 w-48 mr-5 font-bold text-2xl"
      :class="[
        isActive ? 'border-secondary' : 'border-gray-600',
        isActive ? 'text-secondary' : 'text-gray-600',
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorksheetOption",
  props: { isActive: Boolean },
};
</script>
