<script
  setup
  lang="ts"
>
import { ref } from 'vue'
import { MyButton, MultiLanguageInput } from '@scbd/vue-components'
import type { MyButtonMessage } from '@scbd/vue-components'
import '@scbd/vue-components/style.css';

const msg: MyButtonMessage = 'Hola'

const langValues = ref({
  en: 'English value',
  fr: 'La valeure française'
})
const customLangValues = ref({
  en: "We are Klingons!",
  kl: "tlhIngan maH!",
});
</script>

<template>
  <div
    style="width: fit-content; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; align-items: center; margin: auto"
  >
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
    <MultiLanguageInput
      label="Multi Language Input (custom languages)"
      v-model="customLangValues"
      :languages="[
        { locale: 'en', name: 'English', direction: 'ltr' },
        { locale: 'kl', name: 'Klingon', direction: 'ltr' },
      ]"
    />
  </div>
</template>
