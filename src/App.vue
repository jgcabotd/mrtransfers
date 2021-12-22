<template>
  <router-view />
</template>
<script>
import { defineComponent,provide } from 'vue';

export default defineComponent({
  name: 'App',
  setup(){
    provide('googleMapApiKey','AIzaSyD0tqGP5XynrRl1TY7O2F7lQzJ68FebZ0E');
  }
})
</script>
