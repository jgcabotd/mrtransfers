<template>
  <q-page class="constrain q-pa-lg">
   <search></search>
  </q-page>
</template>

<script>
import Search from 'src/components/Search.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Search },
  name: 'PageIndex'
})
</script>
