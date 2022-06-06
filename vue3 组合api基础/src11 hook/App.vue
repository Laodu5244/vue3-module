<template>
  <button @click="isShow = !isShow">卸载/挂载</button>
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


