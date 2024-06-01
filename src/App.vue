<script>
import {RouterLink, RouterView} from 'vue-router'


export default{
    components:{
        RouterLink, RouterView
    },
    data: function () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <div class="icon-links text-center">
        <a href="#"><img src="/icones/instagram.svg" class="icon" alt="Instagram"></a>
        <a href="#"><img src="/icones/facebook.svg" class="icon" alt="Facebook"></a>
        <a href="#"><img src="/icones/whats.svg" class="icon" alt="WhatsApp"></a>
    </div>
  </footer>
</template>

<style>

.icon-links {
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 10px;
}

</style>
