<template>
  <div class="grandson">
    <h3>grandson组件--{{ hero.name }}--{{ hero.age }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    let hero = inject("hero");
    return { hero };
  },
};
</script>

<style>
.grandson {
  background: skyblue;
  padding: 20px;
}
</style>