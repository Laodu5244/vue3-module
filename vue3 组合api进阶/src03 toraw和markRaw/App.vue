<template>
  <h3>姓名:{{ name }}</h3>
  <h3>年龄:{{ age }}</h3>
  <h3>薪资:{{ job.salary }}k</h3>
  <h3 v-show="person.sex">性别:{{ person.sex }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.salary++">修改薪资</button>
  <button @click="showRawPerson">原始的person</button>
  <button @click="addsex">addsex</button>
  <button @click="person.sex.nan += '!'">男</button>
  <button @click="person.sex.nv += '!'">女</button>
</template>

<script>
import { reactive, toRefs, toRaw, markRaw } from "vue";

export default {
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        salary: 12,
      },
    });
    function showRawPerson() {
      // 还原成原始对象(只能处理reactive的响应数据)
      let p = toRaw(person);
      console.log(p);
    }
    function addsex() {
      let sex = { nan: "男", nv: "女" };
      // 让新添加的对象取消响应式(原数据其实修改了)
      person.sex = markRaw(sex);
    }

    return {
      ...toRefs(person),
      showRawPerson,
      addsex,
      person,
    };
  },
};
</script>

