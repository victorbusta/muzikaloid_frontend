<script setup lang="ts">
import type { IFormData } from '../../utils/form/utils.form';
import { formDataToJson } from '../../utils/form/utils.form';
import { loginRequest } from '../../requests/post.auth.login';
import FormComponent  from './FormComponent.vue';
import { ref } from 'vue';

const loginFields: IFormData[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter email',
    value: '',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    value: '',
  }
]

const success = ref(false);

const submitLogin = async () => {
    success.value = false;

    const response = await loginRequest(formDataToJson(loginFields))

    if (response.statusCode !== undefined) {
      // errors.value = response.message;
      return;
    }

    localStorage.setItem('access_token', await response.access_token);
    success.value = true;
}
</script>

<template>
  <FormComponent buttonPlaceHolder="Login" :formFields="loginFields" @submitForm="submitLogin"/>

  <div v-if="success">User logged in succesfully</div>
</template>

<style scoped>
</style>
