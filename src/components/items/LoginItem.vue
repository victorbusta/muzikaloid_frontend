<script setup lang="ts">
import { HTTP } from '@/http';
import { delay } from "@/utils.animation";
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const errMessage = ref();
const msgTtl = 5000;

interface FormData {
  email: string;
  password: string;
}

const formData: FormData = {
  email: '',
  password: '',
};

function submitForm() {
  HTTP.post('/auth/login', {...formData})
  .then(res => {    
    userStore.setUser(res.data.user)
    const toast = document.getElementById('login-succeed');
    toast?.classList.remove('toast-closed');
    delay(msgTtl).then(() => toast?.classList.add('toast-closed'));
  })
  .catch(err => {
    errMessage.value = err.response.data.message;
    const toast = document.getElementById('login-fail');
    toast?.classList.remove('toast-closed');
    delay(msgTtl).then(() => toast?.classList.add('toast-closed'));
  });
}

const toggle = () => {
  document.getElementById('main-wrap')?.classList.toggle('show-register');
}

</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="submitForm">

    <div>
      <input placeholder="Email" type="email" id="email-login" v-model="formData.email" required/>
      <input placeholder="Password" type="password" id="password-login" v-model="formData.password" required/>
    </div>

    <div id="submit">
      <button type="submit">LOGIN</button>
    </div>
  </form>

  <a href="#" @click="toggle">No account ?</a>

  <div id="login-toast">
    <div id="login-succeed" class="toast-closed"><h3>Logged In 🤟</h3></div>
    <div id="login-fail" class="toast-closed">
      <h3>Log In Failed 🤧</h3>
      <p>{{ errMessage }}</p>
    </div>
  </div>

</template>

<style scoped>
  h1 {
    width: 90%;
    text-align: center;
    border-bottom: 1px solid var(--color-background-bis);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form > div {
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 8px 0;
  }

  input {
    margin: 4px 0;
    border: 0;
    border-bottom: 1px solid var(--color-background-bis);
    background-color: var(--color-text);
    color: var(--color-background-bis);
    outline: none;
  }

  #submit {
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

  a {
    margin-top: 16px;
    color: var(--color-background-bis);
    padding: 0 4px;
    border-radius: 4px;
  }

  a:hover {
    background-color: var(--color-hover-bis);
  }

  #login-toast {
    height: 64px;
    width: 90%;
    user-select: none;
  }

  #login-toast > div {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
  }

  .toast-closed {
    opacity: 0;
  }

  #login-succeed {
    background-color: rgba(0, 128, 0, 0.5);
  }

  #login-fail {
    background-color: rgba(128, 0, 0, 0.5);
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    text-align: center;
    line-height: 12px;
  }
</style>