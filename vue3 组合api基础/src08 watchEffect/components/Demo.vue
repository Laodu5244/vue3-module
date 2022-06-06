<template>
  <h3>计数器:{{ sum }}</h3>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.salary + "k" }}</h2>
  <button @click="sum++">++</button>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watchEffect } from "vue";
export default {
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: "24",
      job: {
        salary: 15,
      },
    });
    // 智能监视 (函数体使用谁就监视谁)
    watchEffect(() => {
      const x = sum.value;
      const y = person.job.salary;
      console.log("watchEffect被执行了");
    });

    return { person, sum };
  },
};
</script>