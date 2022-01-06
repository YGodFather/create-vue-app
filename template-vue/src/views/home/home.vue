<script setup>
  import {inject} from "vue";
  const httpEnum = inject('$Enum')

</script>
<template>
  <div class="home-viewer">
    <h1>home</h1>
    <h2>{{httpEnum.getDescByValue('HTTP_METHOD', 'POST')}}</h2>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  mounted() {
  },
  computed: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.home-viewer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
}
</style>
