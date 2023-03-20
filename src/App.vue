<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginItem from './components/LoginItem.vue'
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue'
</script>

<template>
  <header>
    <MuzikaloidLogo />
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
  0% {
    transform: translate(-50%, -50%);
  }

  50% {
    transform: translate(-50vw, -50vh);
  }

  100% {
    width: 100%;
    border-bottom-style: solid;
    border-color: black;
    border-width: 1px;
    transform: translate(-50vw, -50vh);
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
  0% {
    height: 96px;
  }

  100% {
    height: 64px;
    transform: translate(0);
  }
}

  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translate(-50%, -50%);
    animation: 500ms ease-in-out 600ms 1 headerAnim forwards;
  }

  svg {
    position: absolute;
    animation: 400ms ease-in-out 600ms 1 logoAnim forwards;
  }

  nav {
    opacity: 0;
    left: 246px;
    display: flex;
    text-align: center;
    /* justify-content: space-between; */
    animation: 200ms ease-in-out 1100ms 1 showAnim forwards;
  }

  nav > a {
    display: flex;
    align-items: center;
    height: 48px;
    margin: 0 16px 0 16px;
    border-radius: 8px;
  }

  nav > a > span {
    margin: 0 16px 0 16px;
    font-weight: bolder;
  }

  .login {
    opacity: 0;
    height: 64px;
    width: 64px;
    animation: 200ms ease-in-out 1100ms 1 showAnim forwards;
  }
</style>
