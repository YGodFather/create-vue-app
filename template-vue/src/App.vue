<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
