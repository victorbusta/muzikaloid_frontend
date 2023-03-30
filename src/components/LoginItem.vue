<script setup lang="ts">
import { ref } from 'vue';
import LoginIcon from './icons/IconLogin.vue';
import * as animation from './../utils/utils.animation'

defineProps<{
  modal: boolean;
}>();

const emit = defineEmits(['openModal']);

const loginActive = ref(true);

const openLogin = () => {
  navigate(
    document.getElementById('login') as HTMLElement,
    document.getElementById('register') as HTMLElement,
    true
    );
}

const openRegister = () => {
  navigate(
    document.getElementById('login') as HTMLElement,
    document.getElementById('register') as HTMLElement,
    false
    );}

const navigate = (loginEl: HTMLElement, registerEl: HTMLElement, openLogin: boolean) => {
  loginEl?.classList.remove(!openLogin ? "active" : "inactive");
  loginEl?.classList.add(openLogin ? "active" : "inactive");
  registerEl?.classList.remove(openLogin ? "active" : "inactive");
  registerEl?.classList.add(!openLogin ? "active" : "inactive");
  loginActive.value = openLogin;
}

const error = ref();
const login = {email: '', password: ''}
const register = {email: '', name: '', password: ''};
let rePassword = '';

const submitLogin = async () => {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(login), // body data type must match "Content-Type" header
    });

    const response = await res.json();

    console.log(await response.access_token);
}

const submitRegister = () => {

}
</script>

<template>
  <div @click="emit('openModal')">
    <LoginIcon />
  </div>
  <div class="modal" v-if=modal>

    <div class="modalheader">
      <a id="login" class="authnav active" @click="openLogin"><h2>Login</h2></a>
      <a id="register" class="authnav inactive" @click="openRegister"><h2>Register</h2></a>
    </div>

    <div class="modalbody" v-if=loginActive>

      <div class="formInput">
        <label for="email">Email: </label>
        <input v-model="login.email" class="input" type="email" placeholder="victor@muzikaloid.fr">
      </div>

      <div class="formInput">
        <label for="password">Password: </label>
        <input v-model="login.password" class="input" type="password" placeholder="random password">
      </div>

      <button @click="submitLogin">Login</button>

    </div>

    <div class="modalbody" v-else>

      <div class="formInput">
        <label for="email">Email: </label>
        <input v-model="register.email" class="input" type="email" placeholder="victor@muzikaloid.fr">
      </div>

      <div class="formInput">
        <label for="name">Name: </label>
        <input v-model="register.name" class="input" type="text" placeholder="victor">
      </div>

      <div class="formInput">
        <label for="name">City: </label>
        <input v-model="register.name" class="input" type="text" placeholder="victor">
      </div>

      <div class="formInput">
        <label for="password">Password: </label>
        <input v-model="register.password" class="input" type="password" placeholder="random password">
      </div>

      <div class="formInput">
        <label for="password">Re-enter password: </label>
        <input v-model="rePassword" class="input" type="password" placeholder="random password">
      </div>

      <button @click="submitRegister">Register</button>

    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 96px;
  margin: 16px 16px 0 0;
  width: 50vh;
  height: fit-content;
  background-color: var(--color-text);
  right: 0;
  z-index: 1;
  border-radius: 8px;
  color: var(--color-background);
}

.modalheader {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transform: translateY(-36px);
}

.modalbody {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  transform: translateY(-36px);
  transition: all 400ms ease;
}

label {
  margin-top: 32px;
}

input {
  background-color: var(--color-hover);
  border-radius: 16px;
  text-align: center;
  border-width: 1px;
}

input:focus {
  outline:none;
  border-style: outset;
}

::placeholder {
  color: var(--color-background);
  opacity: 0.5; /* Firefox */
}

button {
  margin-top: 64px;
  background-color: var(--color-hover-strong);
  border-radius: 16px;
  text-align: center;
  width: 50%;
}

.formInput {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.authnav {
  width: 50%;
  text-align: center;
  background-color: var(--color-hover-strong);
  transition: all 400ms ease;
}

.inactive:hover {
  background-color: var(--color-text);
}

.active {
  border-radius: 8px 8px 0 0;
  background-color: var(--color-text);
}

.inactive {
  width: 40%;
  height: 90%;
  transform: translateY(-4px);
  border-radius: 8px 8px 8px 8px;
}

h2 {
  font-weight: bold;
}

@media (max-width: 816px) {
  .modal {
    top: -20vh;
    left: 182px;
    width: 40vh;
    margin: 0 0 0 16px;
  }
}

@media (max-width: 424px) {
  .modal {
    width: 30vh;
  }
}
</style>
