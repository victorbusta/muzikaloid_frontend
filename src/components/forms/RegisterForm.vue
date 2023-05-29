<script setup lang="ts">
import { ref } from 'vue';
import type { IFormData } from '../../utils/form/utils.form';
import { formDataToJson } from '../../utils/form/utils.form';
import { loginRequest } from '../../requests/post.auth.login';
import { registerRequest } from '../../requests/post.auth.register';
import FormComponent  from './FormComponent.vue';

const registerFields: IFormData[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'user name',
    value: '',
  },
  {
    name: 'firstname',
    type: 'text',
    placeholder: 'First Name',
    value: '',
  },
  {
    name: 'lastname',
    type: 'text',
    placeholder: 'Last name',
    value: '',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter email',
    value: '',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter password (> 8 characters)',
    value: '',
  },
  {
    name: 'rePassword',
    type: 'password',
    placeholder: 'Confirm password',
    value: '',
  }
]

const errors = ref('');

const submitRegister = async () => {
  errors.value = '';

  const jsonData = formDataToJson(registerFields);

  if (jsonData.rePassword !== jsonData.password) {
    errors.value = 'password confirmation invalid';
    return;
  }

  delete jsonData.rePassword  

  const res = await registerRequest(jsonData);

  if (res.statusCode !== undefined) {
    errors.value = res.message;
    return;
  }

  delete jsonData.username
  delete jsonData.firstname
  delete jsonData.lastname

  const response = await loginRequest(jsonData)

  if (response.statusCode !== undefined) {
    errors.value = response.message;
    return;
  }

  localStorage.setItem('access_token', await response.access_token);    
  errors.value = 'succesfully registered';
}
</script>

<template>
  <FormComponent buttonPlaceHolder="Register" :formFields="registerFields" @submitForm="submitRegister"/>
  {{ errors }}
  <!-- <div v-for="error in errors" v-bind:key="error">
    {{ error }}
  </div> -->
</template>

<style scoped>
</style>
