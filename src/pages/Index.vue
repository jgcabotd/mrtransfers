<template>
  <q-page class="constrain q-pa-lg">
   <search></search>
   <destination-route-list :destinations="destinations"></destination-route-list>
  </q-page>
</template>

<script>
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue';
import DestinationRouteList from "src/components/DestinationRouteList";

export default defineComponent({
  components: { Search, DestinationRouteList },
  name: 'PageIndex',
  setup() {
    return {
      destinations: [
        {code: '34', name: 'Alcudia'},
        {code: '64', name: 'Palma'},
        {code: '83', name: 'Marratxi'},
        {code: '23', name: 'Pollensa'},
        {code: '15', name: 'Manacor'}
      ]
    }
  }
})
</script>
