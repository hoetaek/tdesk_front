<template>
  <div>
    <div class="font-bold text-3xl mb-5">
      01 찾을 낱말 <span class="text-primary">(모두 안채워도 괜찮아요!)</span>
    </div>

    <div class="flex flex-col">
      <!-- TODO fee validate -> 한글이랑 영어만 되도록 하기 -->
      <table>
        <tr>
          <td-input
            @input-text-changed="textInputChanged(0, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(1, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(2, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(3, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(4, $event)"
          ></td-input>
        </tr>
        <tr>
          <td-input
            @input-text-changed="textInputChanged(5, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(6, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(7, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(8, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(9, $event)"
          ></td-input>
        </tr>
        <tr>
          <td-input
            @input-text-changed="textInputChanged(10, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(11, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(12, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(13, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(14, $event)"
          ></td-input>
        </tr>
        <tr>
          <td-input
            @input-text-changed="textInputChanged(15, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(16, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(17, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(18, $event)"
          ></td-input>
          <td-input
            @input-text-changed="textInputChanged(19, $event)"
          ></td-input>
        </tr>
      </table>
    </div>
    <div class="font-bold text-3xl mt-10">02 문제 옵션</div>
    <br />
    <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4 justify-between">
      <option-selection
        optionName="난이도"
        :optionList="['쉬움', '보통', '어려움']"
        :valueList="['EASY', 'NORMAL', 'DIFFICULT']"
        @button-selected-event="selectLevel"
      ></option-selection>
      <option-selection
        optionName="초성 힌트 제공"
        :optionList="['예', '아니오']"
        :valueList="[true, false]"
        @button-selected-event="selectIsScramble"
      ></option-selection>
    </div>
    <br />
    <br />
    <br />
    <button
      class="bg-primary text-white rounded-lg w-full py-7"
      @click="download"
    >
      <icon-download class="mr-4 align-middle inline-block"></icon-download>
      <span class="font-bold text-5xl align-middle inline-block"
        >활동지(한글 파일) 다운로드</span
      >
    </button>
  </div>
</template>

<script>
import OptionSelection from "@/components/OptionSelection.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import TdInput from "@/components/TdInput.vue";

export default {
  data() {
    return {
      listOfText: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      level: "EASY",
      isScramble: true,
    };
  },
  methods: {
    // TODO 다운로드 받는 기능
    download() {},
    textInputChanged(idx, text) {
      this.listOfText[idx] = text;
    },
    selectLevel(level) {
      this.level = level;
    },
    selectIsScramble(isScramble) {
      this.isScramble = isScramble;
    },
  },
  components: {
    OptionSelection,
    IconDownload,
    TdInput,
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
