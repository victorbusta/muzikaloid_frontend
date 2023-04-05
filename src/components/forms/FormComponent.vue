<script setup lang="ts">
import type { IFormData } from '../../utils/form/utils.form';

defineProps<{
  formFields: IFormData[];
  buttonPlaceHolder: string;
}>();

const emit = defineEmits(['submitForm']);

</script>

<template>

  <input v-for="field in formFields" v-bind:key="field.name" v-model="field.value" class="input" :type="field.type" :placeholder="field.placeholder" required>

  <button @click="emit('submitForm')">{{ buttonPlaceHolder }}</button>

</template>

<style scoped>
input {
  background-color: var(--color-background);
  color: var( --color-heading);
  font-size: small;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 32px;
  margin: 16px;
  text-align: center;
  border-radius: 8px;
}

input:first-child {
  margin-top: 32px;
}

input:focus {
  outline:none!important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var( --color-heading) !important;
}

::placeholder {
  color: var( --color-heading);
  opacity: 0.5; /* Firefox */
}

button {
  margin: 16px;
  background-color: var(--color-hover-strong);
  border-radius: 8px;
  text-align: center;
  font-size: small;
  font-weight: bolder;
  width: 50%;
}
</style>
