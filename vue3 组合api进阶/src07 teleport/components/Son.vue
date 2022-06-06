<template>
  <div class="son">
    <h3>son组件</h3>
    <grand-son />
  </div>
</template>

<script>
import GrandSon from "./GrandSon";
export default {
  components: { GrandSon },
};
</script>

<style>
.son {
  background: hotpink;
  padding: 20px;
}
</style>