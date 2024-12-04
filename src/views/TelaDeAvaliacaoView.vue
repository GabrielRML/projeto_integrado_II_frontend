<template>
  <NavBarComponent></NavBarComponent>
  <ListAvaliacaoComponent/>
</template>

<script>
import ListAvaliacaoComponent from '@/components/ListAvaliacaoComponent.vue';
import NavBarComponent from '../components/NavBarComponent.vue';

export default {
  components: {
    ListAvaliacaoComponent,
    NavBarComponent
  },
  data() {
    return {

    }
  }
}
</script>