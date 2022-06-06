<template>
  <h3>姓名:{{ name }}</h3>
  <h3>年龄:{{ age }}</h3>
  <h3>薪资:{{ job.salary }}k</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.salary++">修改薪资</button>
</template>

<script>
import { reactive, toRefs, readonly, shallowReadonly } from "vue";

export default {
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        salary: 12,
      },
    });
    // readonly: 让一个数据不可修改(深只读)
    // person = readonly(person);

    // shallowReadonly: 让一个数据不可修改(浅只读,对象里的数据可以修改)
    person = shallowReadonly(person);

    return {
      ...toRefs(person),
    };
  },
};
</script>

