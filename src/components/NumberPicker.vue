<template>
  <div class="row">
    <div class="col-7 q-pl-xl">
      {{ label }}
    </div>
    <div class="col-5">
      <q-btn
        class="q-px-xs q-mr-sm"
        color="secondary"
        size="md"
        icon="remove"
        @click="pickRemove"
      />

      {{ number }}

      <q-btn
        class="q-px-xs q-ml-sm"
        color="secondary"
        size="md"
        icon="add"
        @click="pickAdd"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "NumberPicker",
  setup() {
    return {
      number: ref(0),
    };
  },
  mounted() {
    this.number = this.initValue;

  },
  methods: {
    pickAdd() {
      this.number++;
      this.emitValue();
    },
    pickRemove() {
      if (this.number > 0) {
        this.number--;
      } else {
        this.number = 0;
      }
      this.emitValue();
    },
    emitValue() {
      let obj = { type: this.type, value: this.number };
      this.$emit("number-selected", obj);
    },
  },
  props: ["label", "type", "initValue"],
});
</script>
