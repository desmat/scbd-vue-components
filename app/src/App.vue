<script setup lang="ts">
import { ref } from 'vue'
import { MyButton, MultiLanguageInput } from 'my-vue-library'
import type { MyButtonMessage } from 'my-vue-library'
import 'my-vue-library/style.css';

const msg: MyButtonMessage = 'Hola'

const langValues = ref({
  en: 'English value',
  fr: 'La valeure française'
})
</script>

<template>
  <h2 class="bar">this is the app</h2>
  <MyButton :msg="msg" />
  <MultiLanguageInput
    label="Multi Language Input"
    v-model="langValues"
  />
  <MultiLanguageInput
    label="Multi Language Input (valid)"
    :valid="{ en: true, fr: true }"
  />
  <MultiLanguageInput
    label="Multi Language Input (invalid)"
    :valid="{ en: false }"
  />

</template>
