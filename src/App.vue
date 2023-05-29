<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginItem from './components/LoginItem.vue'
import LoginIcon from './components/icons/IconLogin.vue';
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue'
import * as animation from './utils/utils.animation'
import { ref } from 'vue';

let opened = false;
let modal = ref(false);

const openNav = () => {
  if (window.innerWidth < 816) {

    animation.translateX('.nav', opened ? '-132px' : '0px');
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
        <RouterLink to="/hardwares"><h2>Hardwares</h2></RouterLink>
        <i>
          <LoginIcon @click="openModal"/>
        </i>

        <LoginItem v-if="modal" />
    </nav>
  </header>
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
  background-color: var(--color-background);
  align-items: center;
  top: 0;
  left: 0;
  height: 64px;
  transform: translateX(-100%);
  animation: 500ms ease-in-out 1000ms 1 headerAnim forwards;
  z-index: 1;
  filter: drop-shadow(0 0 0.5rem black);
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
  align-items: center;
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
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-background);
  color: var(--color-text);
}

nav > a:hover {
  border-color: var(--color-text);
}

nav > i {
  margin-right: 32px;
}

.router-link-active {
  /* height: 64px; */
  background-color: var(--color-text);
  color: var(--color-background);
}

nav > a > h2 {
  margin: 0 16px 0 16px;
  font-weight: bolder;
  font-size: small;
}

main {
  opacity: 0;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 200ms ease-in-out 1400ms 1 showAnim forwards;
  width: 90%
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
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-text);
    height: 100vh;
    width: 132px;
    transform: translateY(-100vh);
    transform: translateX(-132px);
  }

  nav {
    left: 0px;
    flex-direction: column;
  }

  nav > i {
    margin: 0;
  }

  nav > a {
    border-color: var(--color-text);
    color: var(--color-background);
    width: 100%;
    margin: 8px;
  }

  nav > a:hover {
    border-color: var(--color-background);
  }

  .router-link-active {
    /* height: 64px; */
    background-color: var(--color-background);
    color: var(--color-text);
  }

  main {
    width: 99%;
  }

  @keyframes headerAnim {
    100% {
      transform: translateX(-132px);
    }
  }
}
</style>
