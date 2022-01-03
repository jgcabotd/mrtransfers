<template>
  <q-card class="my-card">
    <q-card-section class="q-pa-md">
      <div class="row justify-center">
        <!-- fila principal / columnas principales -->
        <div class="col-12 col-md-4">
          <div class="row justify-center">
            <destination-picker
              label="Pickup point"
              class="col-12"
            ></destination-picker>
          </div>
          <div class="row justify-between q-mt-xs">
            <date-picker class="col-6"></date-picker>
            <time-picker class="col-6 q-pl-xs"></time-picker>
          </div>
        </div>

        <div class="row col-12 col-md-1 justify-center">
          <q-icon name="navigate_next" size="lg" />
        </div>

        <div class="col-12 col-md-4">
          <div class="row">
            <destination-picker
              label="Drop off"
              class="col-12"
            ></destination-picker>
          </div>
          <div class="row justify-between q-mt-xs">
            <date-picker class="col-6"></date-picker>
            <time-picker class="col-6 q-pl-xs"></time-picker>
          </div>
        </div>
        <div class="col-12 col-md-3 q-pl-sm">
         
            <paxes-on-room
              :paxesOnRoomParam="paxesOnRoom"
              class="col-12"
            ></paxes-on-room>
            <q-btn color="primary" class="full-width q-ma-xs" label="Search" size="lg"/>
          
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import DestinationPicker from "src/components/DestinationPicker.vue";
import PaxesOnRoom from "./PaxesOnRoom.vue";
import DatePicker from "./DatePicker.vue";
import TimePicker from "./TimePicker.vue";

export default defineComponent({
  components: { DestinationPicker, PaxesOnRoom, DatePicker, TimePicker },
  name: "Search",
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
.my-card
    width: 100%
</style>

