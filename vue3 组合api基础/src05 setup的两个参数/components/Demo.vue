<template>
  <div class="box">
    <div>姓名:{{ person.name }}</div>
    <div>年龄:{{ person.age }}</div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "sex"],
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  setup(props, context) {
    // setup在beforeCreate之前执行
    console.log("---setup---", props, context);
    let person = reactive({
      name: "刘英",
      age: "18",
    });
    return { person };
  },
};
</script>

<style >
.box {
  background: skyblue;
}
</style>