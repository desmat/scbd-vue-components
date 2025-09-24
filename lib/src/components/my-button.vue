<script lang="ts">
export type MyButtonMessage = 'Hello' | 'Allo' | 'Hola';
</script>

<script
  setup
  lang="ts"
>
const props = withDefaults(defineProps<{
  msg?: MyButtonMessage,
}>(), 
{
  msg: 'Hello',
});
</script>

<template>
  <button>
    <img
      src="../assets/vue.svg"
      class="logo vue"
    /><img
      src="../assets/vite.svg"
      class="logo vite"
    />
    {{ msg }}
  </button>
</template>

<style scoped>
button {
  background: lightgrey;
  border: solid 0.5px grey;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  padding: 0.25rem 1rem;
}
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