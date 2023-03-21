<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginItem from './components/LoginItem.vue'
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue'
import * as animation from './utils/utils.animation'

var opened = false;

function openNav() {
  if (window.screen.width < 688) {
    animation.translateX('.nav', opened ? '-142px' : '0px');
    opened = !opened;
  }
}

</script>

<template>
  <div @click="openNav">
    <MuzikaloidLogo />
  </div>
  <header class="nav">
    <div class="logo"></div>
    <nav>
        <RouterLink to="/"><span>Accueil</span></RouterLink>
        <RouterLink to="/articles"><span>Articles</span></RouterLink>
        <RouterLink to="/machines"><span>Machines</span></RouterLink>
        <RouterLink to="/components"><span>Composants</span></RouterLink>
    </nav>
    <div class="login">
      <LoginItem />
    </div>
  </header>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="salut leo" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
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

@keyframes logoAnim {
  100% {
    transform: translate(0);
  }
}

  header {
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #444444;
    align-items: center;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    animation: 500ms ease-in-out 300ms 1 headerAnim forwards;
  }

  .logo {
    width: 96px;
  }

  #logo {
    position: fixed;
    animation: 400ms ease-in-out 300ms 1 logoAnim forwards;
    top: 0;
    left: 0;
    transform: translate(calc(50vw - 134px), 50vh);
    z-index: 1;
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
    background-color: var(--vt-c-black);
    color: #444444;
  }

  nav > a > span {
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

  @media (max-width: 688px) {
    header {
      flex-direction: column;
      align-items: flex-start;
      height: 100vh;
      width: 142px;
      transform: translateY(-100vh);
      transform: translateX(-142px);
    }

    .logo {
    height: 96px;
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
    }

    @keyframes headerAnim {
      100% {
        transform: translateX(-142px);
      }
    }
  }
</style>
