<!-- for testing locally -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import MyButton from './components/my-button.vue'
import MultiLanguageInput from './components/multi-language-input.vue';

const langValues = ref({
  en: 'English value',
  fr: 'La valeure française'
})
</script>

<template>
  <div style="width: fit-content; padding: 1rem; display: flex; flex-direction: column; align-items: center; margin: auto">
    <h2>this is the lib</h2>
    <div class="d-flex flex-column gap-2">
      <MyButton msg="Allo" />
      <MyButton msg="Hello" />
      <MultiLanguageInput label="Multi Language Input" v-model="langValues"/>
      <MultiLanguageInput
        label="Multi Language Input (valid)"
        :valid="{ en: true, fr: true }"
      />
      <MultiLanguageInput
        label="Multi Language Input (invalid)"
        :valid="{ en: false }"
      />
    </div>
  </div>
</template>
