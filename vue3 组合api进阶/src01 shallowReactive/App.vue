<template>
  <h3>姓名:{{ person.name }}</h3>
  <h3>年龄:{{ person.age }}</h3>
  <h3>薪资:{{ person.job.salary }}k</h3>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.salary++">修改薪资</button>
  <h4>计数器:{{ x.sum }}</h4>
  <button @click="x.sum++">sum++</button>
</template>

<script>
import { shallowReactive, shallowRef } from "vue";

export default {
  setup() {
    // shallowReactive: 浅层响应,job对象的数据不响应
    let person = shallowReactive({
      sum: 0,
      name: "张三",
      age: 18,
      job: {
        salary: 12,
      },
    });
    // shallowRef: 浅层响应,x对象的数据不响应
    let x = shallowRef({
      sum: 0,
    });

    return { person, x };
  },
};
</script>

