<template>
  <q-input
    stack-label
    label="Fechas"
    name="daterange"
    type="text"
    outlined
    style="text-transform: uppercase"
    autocomplete="off"
  />
</template>

<script>
import { defineComponent } from "vue"

const localeES = {
  format: "ddd DD, MMMM",
  separator: " --> ",
  applyLabel: "Aceptar",
  cancelLabel: "Cancelar",
  fromLabel: "Desde",
  toLabel: "Hasta",
  customRangeLabel: "Custom",
  weekLabel: "W",
  daysOfWeek: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  firstDay: 1,
};

export default defineComponent({
  name: "DatePicker",
  methods: {
  
  },
  mounted() {
    moment.locale("es");
    var pare = this
    jQuery(function () {
      jQuery('input[name="daterange"]').daterangepicker(
        {
          opens: "center",
          locale: localeES,
          parentEl: '#dateRangeContainer'      
        },
        function (start, end, label) {
            pare.$emit('range-selected',start,end)
        }
      );
    });
  },
});
</script>
