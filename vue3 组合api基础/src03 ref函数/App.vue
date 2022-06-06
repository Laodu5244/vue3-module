<template>
  <h3>一个人的信息</h3>
  <div>姓名:{{ name }}</div>
  <div>年龄:{{ age }}</div>
  <h3>工作类型:{{ job.type }}</h3>
  <h3>工作薪水:{{ job.salary }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
// 引入ref函数
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据ref(): 引用对象
    let name = ref("永强");
    let age = ref(18);
    // 对象类型数据: proxy
    let job = ref({
      type: "前端工程师",
      salary: "12k",
    });
    // 方法
    function changeInfo() {
      name.value = "刘英";
      age.value = 20;
      job.value.type = "UI设计师";
      job.value.salary = "18k";
    }
    // 返回一个对象
    return { name, age, job, changeInfo };
  },
};
</script>

