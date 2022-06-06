<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">++</button>
  <hr />
  <h3>当前的信息为:{{ msg }}</h3>
  <button @click="msg += '!'">!!</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    let sum = ref(0);
    let msg = ref("你好vue3");

    // 监视ref所定义的单个响应式数据
    // watch(sum, (n, old) => {
    //   console.log("sum变化了", n, old);
    // });
    // 监视ref所定义的多个响应式数据
    watch([sum, msg], (n, old) => {
      console.log("数据变化了", n, old);
    });

    return { sum, msg };
  },
};
</script>