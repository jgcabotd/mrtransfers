<template>
  <div class="row q-pl-xl">
    <div class="col-7 q-pl-xl">
      {{ label }} &nbsp; {{child}}
    </div>
    <div class="col-5">
      <q-select outlined v-model="age" :options="options" dense style="width:75px" @update:model-value="emitSelected"/>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

const constOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
 const defaultAge = constOptions[5];

export default defineComponent({
  name: "ChildAgePicker",
  setup() {
    return {
      age: ref(defaultAge),
      options: ref(constOptions),
    };
  },
  mounted(){
    this.emitValue(this.child,defaultAge);
  },
  methods: {
    emitSelected(value){
        this.emitValue(this.child,value);
    },
    emitValue(child,value) {
      this.$emit("age-selected", {child:child, age:value});
    },
  },
  props: ["label", "child"],
});
</script>
