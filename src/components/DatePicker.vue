<template>
  <q-input filled v-model="pickupDate" mask="##/##/####" >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="pickupDate" mask="DD/MM/YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
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