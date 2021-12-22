<template>
  <div>
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
            <div class="col">Pasajeros</div>
            <div class="col text-right">
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-lg">
          <div class="row justify-center q-pb-md">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <number-picker
                label="Adultos"
                type="A"
                :initValue="paxesOnRoom.adults"
                v-on:number-selected="numberSelected"
              ></number-picker>
            </div>
          </div>
          <div class="row justify-center q-pb-md">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <q-separator />
            </div>
          </div>

          <div class="row justify-center q-pb-md">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <number-picker
                label="Niños"
                type="C"
                :initValue="paxesOnRoom.childs"
                v-on:number-selected="numberSelected"
              ></number-picker>
            </div>
          </div>

          <div class="row justify-center q-py-xl">
            <div
              class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-pb-md"
              v-for="child in paxesOnRoom.childs"
              :key="child"
            >
              <child-age-picker
                label="Niño"
                :child="child"
                v-on:age-selected="ageSelected"
              ></child-age-picker>
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn class="full-width" color="secondary" v-close-popup @click="emitValue"
            >ACEPTAR</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-input
      bg-color="white"
      outlined
      v-model="paxesOnRoomStr"
      label="Personas en habitación"
      @click="prompt = true"
      readonly
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import ChildAgePicker from "./ChildAgePicker.vue";
import NumberPicker from "./NumberPicker.vue";

export default defineComponent({
  components: { NumberPicker, ChildAgePicker },
  name: "PaxesOnRoom",
  setup() {

    return {
      paxesOnRoom: ref({ adults: ref(0), childs: ref(0), childAges: ref([]) }),
      prompt: ref(false),
      maximizedToggle: ref(true),
      childAges: ref([]),
      paxesOnRoomStr: "No pax selected.",
    };

  },
  mounted() {
  
  },
  methods: {
    numberSelected(obj) {
      if (obj.type === "A") {
        this.paxesOnRoom.adults = obj.value;
      } else {
        if (obj.type == "C") {
          this.paxesOnRoom.childs = obj.value;
        }
      }

      console.log(this.paxesOnRoom);
    },
    ageSelected(obj) {
      this.paxesOnRoom.childAges[obj.child] = obj.age;
      console.log(this.paxesOnRoom);
    },
    emitValue() {
      this.$emit("paxes-selected", this.paxesOnRoom);

      this.paxesOnRoomStr = `${this.paxesOnRoom.adults} Adulto(s), ${this.paxesOnRoom.childs} Niño(s)`;
    },
  },
  props: ["paxesOnRoomParam"],
});
</script>
