<script setup lang="ts">
import { HTTP } from '@/http';
import { delay } from '@/utils.animation';
import { ref } from 'vue';

const errMessage = ref();
const msgTtl = 5000;

interface FormData {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
}

const formData: FormData = {
  email: '',
  password: '',
  username: '',
  firstname: '',
  lastname: '',
};

function submitForm() {
  // Process the form data, e.g., send it to the server
  console.log(formData);

  HTTP.post('/auth/register', {...formData})
  .then(res => {
    const toast = document.getElementById('register-succeed');
    toast?.classList.remove('toast-closed');
    delay(msgTtl).then(() => toast?.classList.add('toast-closed'));
  })
  .catch(err => {
    errMessage.value = err.response.data.message;
    const toast = document.getElementById('register-fail');
    toast?.classList.remove('toast-closed');
    delay(msgTtl).then(() => toast?.classList.add('toast-closed'));
  });
}

const toggle = () => {
  document.getElementById('main-wrap')?.classList.toggle('show-register');
}
</script>

<template>
  <h1>Register</h1>

  <form @submit.prevent="submitForm">

    <div>
      <input placeholder="Email" type="email" id="email-register" v-model="formData.email" required/>
      <input placeholder="Password" type="password" id="password-register" v-model="formData.password" required/>
      <input placeholder="Username" type="text" id="username" v-model="formData.username" required/>
      <input placeholder="First Name" type="text" id="firstname" v-model="formData.firstname" required/>
      <input placeholder="Last Name" type="text" id="lastname" v-model="formData.lastname" required/>
    </div>

    <div id="submit">
      <button type="submit">Register</button>
    </div>
  </form>

  <a href="#" @click="toggle">Already have an account ?</a>

  <div id="register-toast">
    <div id="register-succeed" class="toast-closed">
      <h3>Registered 🤟</h3>
      <p>please check your email to validate your account</p>
    </div>
    <div id="register-fail" class="toast-closed">
      <h3>Registration failed 🤧</h3>
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

  #register-toast {
    height: 64px;
    width: 90%;
    user-select: none;
  }

  #register-toast > div {
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

  #register-succeed {
    background-color: rgba(0, 128, 0, 0.5);
  }

  #register-fail {
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