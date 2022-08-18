<template>
  <td
    class="py-7 text-center hover:cursor-text"
    @click.prevent="$refs.text.focus()"
  >
    <input
      type="text"
      class="input"
      ref="text"
      v-model="inputText"
      @input="onDataChanged"
    />
  </td>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    onDataChanged() {
      this.$emit("inputTextChanged", this.inputText);
    },
  },
  emits: ["inputTextChanged"],
};
</script>
