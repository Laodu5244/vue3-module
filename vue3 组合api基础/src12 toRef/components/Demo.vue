<template>
  <h3>
    计数器:{{ sum }}
    <button @click="sum++">sum++</button>
  </h3>
  <h3>姓名:{{ name }}</h3>
  <h3>年龄:{{ age }}</h3>
  <h3>薪资:{{ job.salary }}k</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.salary++">修改薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  setup() {
    // 数据

    let person = reactive({
      sum: 0,
      name: "张三",
      age: 18,
      job: {
        salary: 12,
      },
    });

    return {
      sum: toRef(person, "sum"),
      ...toRefs(person),
    };
  },
};
</script>