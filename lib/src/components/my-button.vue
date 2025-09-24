<script lang="ts">
export type MyButtonMessage = 'Hello' | 'Allo' | 'Hola';
</script>

<script
  setup
  lang="ts"
>
import { CButton } from '@coreui/vue'

const props = withDefaults(defineProps<{
  msg?: MyButtonMessage,
}>(), 
{
  msg: 'Hello',
});
</script>

<template>
  <CButton
    color="primary"
    variant="outline"
    class="d-flex align-items-center gap-[0.5rem]"
  >
      <img
        src="../assets/vue.svg"
        class="logo vue"
      />
      <img
        src="../assets/vite.svg"
        class="logo vite"
      />
      {{ msg }}
  </CButton>
</template>

<style scoped>
.logo {
  height: 0.75rem;
  width: 0.75rem;
}
button .logo.vite {
  display: none;
}
button:hover .logo.vite {
  display: block;
}
button:hover .logo.vue {
  display: none;
}  
</style>