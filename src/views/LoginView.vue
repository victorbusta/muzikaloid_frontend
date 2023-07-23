<script setup lang="ts">
import LoginItem from '@/components/items/LoginItem.vue';
import RegisterItem from '@/components/items/RegisterItem.vue';
import AccountItem from '@/components/items/AccountItem.vue';
import LogoShortMuzikaloid from '@/components/logos/LogoShortMuzikaloid.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const switchLogin = (event: Event) => (event.currentTarget as HTMLElement).parentElement?.classList.toggle('show-register');

</script>

<template>
  <main>
    <div id="main-wrap" v-if="!userStore.user.token">
      <div id="content-wrap">
        <LogoShortMuzikaloid width="128"/>
        <RegisterItem/>
      </div>
      <div id="content-wrap">
        <LogoShortMuzikaloid width="128"/>
        <LoginItem/>
      </div>
      <div id="img-wrap" @click="switchLogin">
        <h1>Welcome to<br>the community!</h1>
        <img src="../../literal_art.jpg" alt="">
      </div>
    </div>
    <div v-else id="account-wrap">
      <AccountItem/>
    </div>
  </main>
</template>

<style scoped>
main {
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: translate_main .2s ease-in-out forwards;
  transform: translateY(100%);
}

@keyframes translate_main {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

#main-wrap {
  position: absolute;
  height: 512px;
  width: 70%;
  border-radius: 16px;
  background-color: var(--color-background-bis);
  /* padding: 8px 4px; */
  display: flex;
  align-items: center;
}

#content-wrap {
  position: relative;
  background-color: var(--color-text);
  color: var(--color-background-bis);
  height: calc(100% - 8px);
  width: calc(50% - 8px);
  margin: 0 4px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    margin-top: 32px;
  }
}

/* #content-wrap > svg {} */

#img-wrap {
  cursor: pointer;
  position: absolute;
  height: calc(100% - 8px);
  border-radius: 16px;
  width: calc(50% - 8px);
  margin: 0 4px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

#img-wrap > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#img-wrap > h1 {
  position: absolute;
  z-index: 1;
  right: 0;
  margin-right: 4px;
  font-size: 28px;
  line-height: 26px;
  font-weight: bolder;
  color: white;
}

.show-register > #img-wrap {
  transform: translateX(calc(100% + 8px));
}

#account-wrap {
  width: 90%;
  height: 90%;
  overflow: hidden;
}

@media (max-width: 768px) {
  #content-wrap {
    position: absolute;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
  }

  #img-wrap {
    display: none;
  }

  div {
    height: 384px;
    width: 100%;
  }

  .show-register > #content-wrap:first-child {
    z-index: 1;
  }
}
</style>