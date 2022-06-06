<template>
  <div class="app">
    <h3>app组件</h3>
    <!-- Suspense: 当异步加载网速比较慢
    组件加载完成前先展示v-slot:fallback的内容
    加载完成后正常加载子组件内容 -->
    <Suspense>
      <template v-slot:default>
        <Son />
      </template>
      <!-- 当网速比较慢可以看到v-slot:fallback的效果 -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Son from "./components/Son";
// 异步引入(动态引入)
import { defineAsyncComponent } from "vue";
let Son = defineAsyncComponent(() => import("./components/Son"));
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