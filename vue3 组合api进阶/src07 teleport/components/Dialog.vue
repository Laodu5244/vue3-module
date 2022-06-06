<template>
  <div>
    <button @click="isShow = true">弹窗</button>
    <!-- teleport: 把这段结构传到body中 -->
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>Dialog组件</h3>
          <button @click="isShow = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 200px;
  background: green;
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>