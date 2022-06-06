<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 使用vue提供的内置ref
    // let keyWord = ref("hello");

    // 自定义一个ref:名为myRef
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`myRef中的${value}被读取了`);
            track(); // 通知Vue追踪value的变化
            return value;
          },
          set(val) {
            console.log(`myRef中的${val}被修改了`);
            clearTimeout(timer);
            // 防抖计时器
            timer = setTimeout(() => {
              value = val;
              trigger(); // 通知Vue重新解析模板
            }, delay);
          },
        };
      });
    }

    let keyWord = myRef("hello", 500);
    return { keyWord };
  },
};
</script>

