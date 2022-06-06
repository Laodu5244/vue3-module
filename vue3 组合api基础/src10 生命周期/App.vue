<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <demo v-if="isShow" />
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo";
export default {
  components: { Demo },
  setup() {
    let isShow = ref(true);
    return { isShow };
  },
};
</script>


