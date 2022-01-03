<template>
  <div class="my-card">
    <q-dialog
      v-model="prompt"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6 row">
            <div class="col">New search</div>
            <div class="col text-right">
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-card-section id="dateRangeContainer">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pb-md q-px-xs">
              <destination-picker
                v-on:destination-selected="destinationSelected"
              ></destination-picker>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pb-md q-px-xs">
              <date-picker
                bg-color="white"
                v-on:range-selected="rangeSelected"
              ></date-picker>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pb-md q-px-xs">
              <paxes-on-room
                v-on:paxes-selected="paxesOnRoomSelected"
                :paxesOnRoomParam="paxesOnRoom"
              ></paxes-on-room>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 justify-end">
              <q-btn class="full-width" color="secondary" size="lg">Search</q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal class="q-px-md">
        <div class="col">
          <div class="text-h6">Palma de Mallorca, Illes Balears</div>
          <div class="row">
            <div class="col-8">
              <div class="text-subtitle1">01 Aug - 07 Aug</div>
            </div>
            <div class="col">
              2
              <q-icon name="perm_identity" size="xs" style="transform: translateY(-9%)" />
            </div>
          </div>
        </div>

        <q-card-actions vertical class="justify-center q-px-sm col-3">
          <q-btn color="red" class="q-pa-lg" @click="openSearch"> Search </q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import DatePicker from "./PeriodDatePicker.vue";

import DestinationPicker from "../components/DestinationPicker.vue";
import PaxesOnRoom from "src/components/PaxesOnRoom.vue";

export default defineComponent({
  name: "AvailabilitySearch",
  setup() {
    return {
      stars: ref(0),
      prompt: ref(false),
      maximizedToggle: ref(true),
    };
  },
  mounted() {},
  methods: {
    openSearch() {
      this.prompt = true;
    },
    rangeSelected(start, end) {
      console.log(start);
      console.log(end);
    },
    destinationSelected(dest) {
      console.log(dest);
      this.destination = ref(dest);
    },
    paxesOnRoomSelected(obj) {
      this.paxesOnRoom = ref(obj);
    },
  },
  components: {
    DatePicker,
    DestinationPicker,
    PaxesOnRoom,
  },
  props: ["hotel"],
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
