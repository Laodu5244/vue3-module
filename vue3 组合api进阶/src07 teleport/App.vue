<template>
  <div class="app">
    <h3>app组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./components/Son";
export default {
  components: { Son },
};
</script>

<style>
.app {
  background: pink;
  padding: 20px;
}
</style>