<template>
  <div class="app">
    <h3>app组件</h3>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  setup() {
    let sum = ref(0);
    let hero1 = reactive({ name: "东邪", age: "38" });
    let hero2 = readonly(hero1);

    // 判断响应式数据的类型
    console.log(isRef(sum));
    console.log(isReactive(hero1));
    console.log(isReadonly(hero2));
    console.log(isProxy(hero1));
    console.log(isProxy(hero2));

    return { sum, hero1, hero2 };
  },
};
</script>

<style>
.app {
  background: pink;
  padding: 20px;
}
</style>