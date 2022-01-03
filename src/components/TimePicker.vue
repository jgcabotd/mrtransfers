<template>
  <q-input
    filled
    v-model="pickupTime"
    mask="time"
    :rules="['time']"
    
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time v-model="pickupTime">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>

import { defineComponent,ref } from "vue";
export default defineComponent({
  components: {  },
  name: "DatePicker",
  setup() {
    return {
      pickupDate: ref("01/02/2019"),
      pickupTime: ref("10:56"),
      paxesOnRoom: ref({ adults: 0, childs: 0, childAges: [] }),
    };
  },
  mounted() {},
  methods: {},
});
</script>
<style lang="sass" scoped>

</style>