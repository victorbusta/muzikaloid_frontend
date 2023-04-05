<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './forms/LoginForm.vue';
import RegisterForm from './forms/RegisterForm.vue';

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

</script>

<template>
  <div class="modal">

    <div class="modalheader">
      <a id="login" class="authnav active" @click="openLogin"><h2>Login</h2></a>
      <a id="register" class="authnav inactive" @click="openRegister"><h2>Register</h2></a>
    </div>

    <div class="modalbody" v-if=loginActive>
      <LoginForm />
    </div>

    <div class="modalbody" v-else>
      <RegisterForm />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 64px;
  margin: 16px 16px 0 0;
  width: 256px;
  height: fit-content;
  right: 0;
  z-index: 1;
  border-radius: 8px;
  color: var(--color-background);
  background-color: var(--color-text);
  filter: drop-shadow(0 0 0.5rem black);
}

.modalheader {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.modalbody {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  transition: all 400ms ease;
}

.authnav {
  width: 50%;
  text-align: center;
  background-color: var(--color-hover-strong);
  transition: all 400ms ease;
  /* border-radius: 8px; */
}

.authnav:first-child {
  border-radius: 8px 0 0 0;
}

.authnav:last-child {
  border-radius: 0 8px 0 0;
}

.inactive {
  /* width: 40%;
  height: 90%;
  transform: translateY(-4px);
  border-radius: 8px 8px 8px 8px; */
  box-shadow:inset 0 0 2px #000;
}

.inactive:hover {
  /* background-color: var(--color-text); */
}

.active {
  /* border-radius: 8px 8px 0 0; */
  background-color: var(--color-text);
}


h2 {
  font-weight: bold;
  font-size: small;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 816px) {
  .modal {
    /* top: calc(-15vh); */
    top: 10vh;
    left: 148px;
    /* width: 70vw; */
    margin: 0 0 0 16px;
  }
}

@media (max-width: 424px) {
  .modal {
    /* width: 70vw; */
  }
}
</style>
