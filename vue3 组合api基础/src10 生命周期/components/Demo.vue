<template>
  <h3>计数器:{{ sum }}</h3>
  <button @click="sum++">++</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  setup() {
    // 数据
    let sum = ref(0);

    // 通过组合api的形式去使用生命周期钩子
    // 组合api中创建前,创建后两个钩子被setup()取代
    onBeforeMount(() => {
      console.log("onBeforeMount被调用了");
    });
    onMounted(() => {
      console.log("onMounted被调用了");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate被调用了");
    });
    onUpdated(() => {
      console.log("onUpdated被调用了");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount被调用了");
    });
    onUnmounted(() => {
      console.log("onUnmounted被调用了");
    });

    return { sum };
  },
  // 通过配置项形式使用生命周期钩子
  //#region
  /* // 创建前
  beforeCreate() {
    console.log("beforeCreate钩子执行了");
  },
  // 创建后
  created() {
    console.log("created钩子执行了");
  },
  // 挂载前
  beforeMount() {
    console.log("beforeMount钩子执行了");
  },
  // 挂载后
  mounted() {
    console.log("mounted钩子执行了");
  },
  // 更新前
  beforeUpdate() {
    console.log("beforeUpdate钩子执行了");
  },
  // 更新后
  updated() {
    console.log("updated钩子执行了");
  },
  // 卸载前
  beforeUnmount() {
    console.log("beforeUnmount钩子执行了");
  },
  // 卸载后
  unmounted() {
    console.log("unmounted钩子执行了");
  }, */
  //#endregion
};
</script>