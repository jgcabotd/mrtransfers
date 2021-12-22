<template>
  <q-card>
    <q-card-section class="bg-primary text-white">
      <div class="text-h6 row">
        <div class="col">Sort</div>
        <div class="col text-right">
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-lg">
      <div class="row justify-center q-pb-md">
        <div class="col-12 q-pb-xl">Sort by:</div>

        <div class="col-12 q-px-xl">
          <q-option-group v-model="sort" :options="sortOptions" color="primary" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn class="full-width" color="secondary" v-close-popup @click="emitValue"
        >APPLY</q-btn
      >
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: {},
  name: "SortCard",
  setup() {
    return {
       sortOptions: [
        {
          label: "Recommended",
          value: "rec",
        },
        {
          label: "Price (low to high)",
          value: "plow",
        },
        {
          label: "Price (high to low)",
          value: "phigh",
        },
        {
          label: "Stars (5 to 1)",
          value: "stars",
        },
        {
          label: "Distancy from city center",
          value: "dist",
        },
      ], 
      sort: ref(null),
    };
  },
  mounted() {},
  methods: {
    emitValue() {
      this.$emit("sort-applied", null);
    },
  }
});
</script>
