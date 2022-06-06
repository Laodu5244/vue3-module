<template>
  <div class="son">
    <h3>son组件--{{ hero.name }}--{{ hero.age }}</h3>
    <grand-son />
  </div>
</template>

<script>
import { inject } from "vue";
import GrandSon from "./GrandSon.vue";
export default {
  components: { GrandSon },
  setup() {
    let hero = inject("hero");
    return { hero };
  },
};
</script>

<style>
.son {
  background: hotpink;
  padding: 20px;
}
</style>