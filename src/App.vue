<script setup lang="ts">
import { RouterView } from 'vue-router';
import MuzikaloidLogo from './components/logos/LogoMuzikaloid.vue';
import NavItem from './components/items/NavItem.vue';
import MenuItem from './components/items/MenuItem.vue';
import { useUserStore } from './stores/user';
import { ref, watch } from 'vue';


const userStore = useUserStore();
userStore.initData();

// scroll indicator handling and paralax

const scrollIndicatorWidth = ref(0);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollIndicatorWidth.value = progress;
};

window.addEventListener('scroll', handleScroll);

// watch(scrollIndicatorWidth, () => {  
//   anim.translate('#deco', `${scrollIndicatorWidth.value * .5}%`, `${scrollIndicatorWidth.value * .5}%`, 0);

//   scrollIndicatorStyle.value = `width: ${scrollIndicatorWidth.value}%`;
// });
</script>

<template>
  <header>
    <RouterLink id="logo-wrap" to="/">
      <MuzikaloidLogo height="32"/>
    </RouterLink>

    <NavItem />
  </header>

  <aside id="menu">
    <MenuItem />
  </aside>

  <section>
    <RouterView />
  </section>

  <div id="decoration" :style="`top: ${250 - (scrollIndicatorWidth * 0.5)}vh;`">
    <div :style="`top: -${scrollIndicatorWidth * 0.25}%;`"></div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  height: 48px;
  z-index: 1;
}

#logo-wrap {
  height: 100%;
  display: flex;
  align-items: center;
}

#logo {
  margin: 0 8px;
}

aside {
  position: fixed;
  padding: 8px;
  top: 48px;
  left: 0;
  width: 192px;
  border-right: 1px solid var(--color-border);
  height: calc(100vh - 48px);
  background-color: var(--color-background);
  z-index: 1;
  transition: all .2s ease-in-out;
}

section {
  position: relative;
  top: 48px;
  left: 192px;
  overflow-y: scroll;
  width: calc(100vw - 192px);
  min-height: calc(100vh - 48px);
  padding: 8px;
  perspective: 100px;
  transform-style: preserve-3d;
}

.aside-opened {
  transform: translateX(0);
}

#decoration {
  position: fixed;
  height: 100vh;
  width: 300vh;
  background-color: var(--color-foreground-bis);
  z-index: -1;
  rotate: -45deg;
  transform: translateX(50%) translateZ(-10px) scale(1.5);
  right: 0;
  overflow: hidden;
}

#decoration > div {
  position: relative;
  height: 20%;
  width: 300vh;
  transform: translateY(100%);
  background-color: var(--color-background-bis);
}

@media (max-width: 768px) {
  aside {
    transform: translateX(-100%);
    width: 50%;
  }

  section {
    left: 0;
    width: 100%;
  }
}
</style>
