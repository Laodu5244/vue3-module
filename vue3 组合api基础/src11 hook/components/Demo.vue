<template>
  <h3>计数器:{{ sum }}</h3>
  <button @click="sum++">++</button>
  <hr />
  <h3>当前点击时鼠标的坐标 x: {{ point.x }} y: {{ point.y }}</h3>
</template>

<script>
import { ref } from "vue";
// 自定义hook的优势: 复用代码,让setup中的逻辑更简洁移动
import usepoint from "../hooks/usepoint";
export default {
  setup() {
    // 数据
    let sum = ref(0);
    let point = usepoint();
    return { sum, point };
  },
};
</script>