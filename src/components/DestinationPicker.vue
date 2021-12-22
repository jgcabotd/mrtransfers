<template>
  <q-select
    bg-color="white"
    outlined
    v-model="react.destination"
    use-input
    input-debounce="0"
    label="Destino"
    :options="react.options"
    @filter="filterFn"
    behavior="dialog"
    hide-dropdown-icon
    @update:model-value="emitValue"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>

    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-icon :name="codifyIcon(scope.opt.type)" />
        </q-item-section>
        <q-item-section>
          <q-item-label v-html="mainDescription(scope.opt)" />
          <q-item-label caption>{{
            codifyDescription(scope.opt)
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Http from "src/services/http";

const http = new Http();

export default defineComponent({
  name: "DestinationPicker",
  setup() {
    return {
      react: ref({
        destination: null,
        options: [],
      }),
    };
  },
  methods: {
    codifyDescription(item) {
      return (
        this.nullCode(item.countryCode) +
        ", " +
        this.nullCode(item.destinationName) +
        (item.subZoneName === null ? '' : ", " + item.subZoneName) +
        (item.hotelName === null ? '' : ", " + item.hotelName)
      );
    },
    codifyIcon(icon) {
      switch (icon) {
        case "DESTINATION":
          return "o_room";
        case "ZONE":
          return "o_apartment";
        default:
          return "o_home";
      }
    },
    nullCode(item) {
      return item === null || item === undefined || item === "null" ? "" : item;
    },
    mainDescription(item){
      return item.hotelName === null ? (item.subZoneName === null ? (item.destinationName !== null ? item.destinationName : '') : item.subZoneName) : item.hotelName;
    },
    codifyCode(item) {
      return (
        this.nullCode(item.countryCode) +
        "|" +
        this.nullCode(item.destinationCode) +
        "|" +
        this.nullCode(item.subZoneCode) +
        "|" +
        this.nullCode(item.hotelCode)
      );
    },
    emitValue(value) {
      this.$emit("destination-selected", value);
    },
    filterFn(val, update, abort) {
      if (val.length < 2) {
        abort();
        return;
      }

      update(() => {

        http.filterZones(val.toLowerCase()).then(response => {
          this.react.options = ref(response.data);
        });
       
      });
    },
  },
});
</script>
