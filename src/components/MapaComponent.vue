<template>
    <div class="row justify-content-center">
      <div
        class="card mt-5"
        style="width: 700px; height: 600px; position: relative;"
      >
        <l-map
          ref="map"
          v-model:zoom="zoom"
          :center="filtrarEstado"
          style="height: 100%; width: 100%; border-radius: 0.25rem; overflow: hidden;"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
        </l-map>
      </div>
    </div>
  </template>
  

<script>
// Importando VUE LEAFLET
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";


export default {
  components: {
    LMap, LTileLayer,  LMarker, LTooltip
  },
  data: function () {
    return {
        filtrarEstado: [-23.5505, -46.6333],
        teste: [-23.5505, -46.6333],
        zoom: 18,
    };
  },
  computed: {

  },
  methods: {

  },
  mounted: function () {

  },
};
</script>

<style>
body {
  color: #1a202c;
  background-color: #e2e8f0;
}

.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
  background-color: #fff;
  overflow: hidden; /* Garante que o mapa respeite os limites do card */
}

.row {
  margin: 0;
}

.l-map {
  display: block;
}
</style>
