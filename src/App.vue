<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginItem from './components/LoginItem.vue'
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue'
import * as animation from './utils/utils.animation'
import { ref } from 'vue';

let opened = false;
let modal = ref(false);

const openNav = () => {
  if (window.innerWidth < 816) {

    animation.translateX('.nav', opened ? '-182px' : '0px');
    opened = !opened;
  }
}

const openModal = () => {
  modal.value = !modal.value;
  openNav();
};
</script>

<template>
  <div class="logo" @click="openNav">
    <MuzikaloidLogo />
  </div>
  <header class="nav">
    <nav>
        <RouterLink to="/"><h2>Accueil</h2></RouterLink>
        <RouterLink to="/articles"><h2>Articles</h2></RouterLink>
        <RouterLink to="/machines"><h2>Machines</h2></RouterLink>
        <RouterLink to="/components"><h2>Composants</h2></RouterLink>
    </nav>
    <div class="login">
      <LoginItem :modal="modal" @openModal="openModal"/>
    </div> 
  </header>
  <div class="curtains"></div>
<main>
  <RouterView />
</main>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: var(--color-text);
  align-items: center;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  animation: 500ms ease-in-out 1000ms 1 headerAnim forwards;
  z-index: 1;
}

.logo {
  position: fixed;
  z-index: 2;
}

#logo {
  position: fixed;
  animation: 400ms ease-in-out 1000ms 1 logoAnim forwards;
  top: 0;
  left: 0;
  transform: translate(calc(50vw - 134px), 50vh);
  z-index: 2;
}

nav {
  opacity: 0;
  display: flex;
  text-align: center;
  animation: 200ms ease-in-out 800ms 1 showAnim forwards;
  transition: all 500ms ease-in-out;
}

nav > a {
  display: flex;
  align-items: center;
  height: 48px;
  margin: 0 16px 0 16px;
  border-radius: 16px;
}

.router-link-active {
  /* height: 64px; */
  background-color: var(--color-background);
  color: var(--color-text);
}

nav > a > h2 {
  margin: 0 16px 0 16px;
  font-weight: bolder;

}

.login {
  opacity: 0;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 200ms ease-in-out 800ms 1 showAnim forwards;
}

main {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 200ms ease-in-out 1400ms 1 showAnim forwards;
  width: calc(100% - 128px);
}

.curtains {
  position: absolute;
  grid-row: 2;
  background-color: var(--color-background);
  z-index: 1;
  /* height: calc(100vh - 64px); */
  height: 100vh;
  width: 100vw;
  animation: 200ms ease-in-out 1400ms 1 hideAnim forwards;
}

@keyframes headerAnim {
  100% {
    transform: translateX(0);
  }
}

@keyframes showAnim {
  0% {
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideAnim {
  0% {
  }

  100% {
    opacity: 0;
    z-index: 0;
  }
}

@keyframes logoAnim {
  100% {
    transform: translate(0);
  }
}

@media (max-width: 816px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 182px;
    transform: translateY(-100vh);
    transform: translateX(-182px);
  }

  nav {
    left: 0px;
    flex-direction: column;
  }

  nav > a {
  margin: 8px;
}

  .login {
    width: 100%;
    margin-bottom: 96px;
  }

  @keyframes headerAnim {
    100% {
      transform: translateX(-182px);
    }
  }
}
</style>
