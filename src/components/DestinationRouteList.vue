<template>
  <div class="row justify-around q-mt-lg">
    <q-select outlined
              v-model="airport"
              :options="airports"
              :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : '- Null -'"
              label="Aeropuerto"
              emit-value
              map-options
              class="col-5"
    />
    <q-select outlined
              @update:model-value="selectDestination($event)"
              v-model="destination"
              :options="destinations"
              :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : '- Null -'"
              emit-value
              map-options
              label="Destinos"
              class="col-5"
    />
  </div>
  <div v-for="destination in selectedDestinations" >
    <div class="row justify-around q-mt-lg">
      <q-input outlined @change="refresh" v-model="destination.code" type="text" label="Code" />
      <q-input outlined @change="refresh" v-model="destination.name" type="text" label="Name" />
      <q-input outlined @change="refresh" v-model="destination.distanceKm" type="number" label="Km" />
      <q-btn color="primary" icon="my_location" />
      <q-btn color="primary" icon="delete" />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "DestinationRouteList",
  props:["destinations"],
  setup() {
    return {
      selectedDestinations: [],
      airport: ref(null),
      airports: [
        {code: 'PMI', name: 'Aeroport de Palma'},
      ],
      destination: ref(null),
    }
  },
  methods: {
    refresh() {
      this.$forceUpdate();
    },
    selectDestination({code, name}) {
      this.selectedDestinations.push(
        {code, name, distanceKm: 0}
      );
    }
  }
}
</script>

<style scoped>

</style>
