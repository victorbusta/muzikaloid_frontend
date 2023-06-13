<script setup lang="ts">
import { RouterView } from 'vue-router'
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue'
</script>

<template>
  <div class="logo">
    <MuzikaloidLogo/>
  </div>

  <main>
    <RouterView />
  </main>

</template>

<style scoped>
#logo {
  height: 128px;
}
.logo {
  width: fit-content;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
}

main {
  width: fit-content;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
}

@media (max-width: 768px) {
  #logo {
    height: 64px;
  }
}
</style>
