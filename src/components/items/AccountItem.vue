<script setup lang="ts">
import { HTTP } from '@/http';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

// console.log(userStore.user);

// HTTP.get()

</script>

<template>
  <div id="wrap">
    <h1>account</h1>

    <div id="submit">
      <button type="submit" @click="userStore.removeUser()">LOGOUT</button>
    </div>
  </div>
</template>

<style scoped>
  #wrap {
    height: 100%;
    width: 100%;
    background-color: var(--color-background-bis);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    width: 90%;
    text-align: center;
  }

  #submit {
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    height: fit-content;
    margin-top: 16px;
    background-color: var(--color-background-bis);
  }

  button {
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    background-color: var(--color-heading);
    transform: translate(4px, -4px);
    transition: all .2s ease-in-out;
  }

  button:active {
    transform: translate(0);
  }

</style>