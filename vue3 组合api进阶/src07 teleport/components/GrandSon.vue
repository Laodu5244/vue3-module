<template>
  <div class="grandson">
    <h3>grandson组件</h3>
  </div>
  <Dialog />
</template>

<script>
import Dialog from "./Dialog";
export default {
  components: { Dialog },
};
</script>

<style>
.grandson {
  background: skyblue;
  padding: 20px;
}
</style>