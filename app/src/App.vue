<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { MyButton } from 'my-vue-library'
import type { MyButtonMessage } from 'my-vue-library'
import 'my-vue-library/style.css';

const msg: MyButtonMessage = 'Hola'
</script>

<template>  
  <h2 class="bar">this is the app</h2>
  <MyButton :msg="msg"/>
</template>
