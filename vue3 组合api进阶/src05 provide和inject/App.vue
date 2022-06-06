<template>
  <div class="app">
    <h3>grandfather组件: {{ name }}--{{ age }}</h3>
    <Son />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Son from "./components/Son";
export default {
  components: { Son },
  setup() {
    let hero = reactive({ name: "东邪", age: "38" });
    // 给后代组件传递数据
    provide("hero", hero);
    return { ...toRefs(hero) };
  },
};
</script>

<style>
.app {
  background: pink;
  padding: 20px;
}
</style>