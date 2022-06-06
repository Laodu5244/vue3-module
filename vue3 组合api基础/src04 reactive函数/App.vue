<template>
  <div class="box1">
    <div>姓名:{{ name }}</div>
    <div>年龄:{{ age }}</div>
    <h3>工作类型:{{ job.type }}</h3>
    <h3>工作薪水:{{ job.salary }}</h3>
    <h3>爱好:{{ hobby }}</h3>
    <button @click="changeInfo1">修改信息</button>
  </div>
  <div class="box2">
    <div>姓名:{{ person.name }}</div>
    <div>年龄:{{ person.age }}</div>
    <h3>工作类型:{{ person.job.type }}</h3>
    <h3>工作薪水:{{ person.job.salary }}</h3>
    <h3>爱好:{{ person.hobby }}</h3>
    <button @click="changeInfo2">修改信息</button>
  </div>
</template>

<script>
// 引入ref函数
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据ref(): 引用对象
    let name = ref("永强");
    let age = ref(18);
    // proxy的实例对象
    let job = reactive({
      type: "前端工程师",
      salary: "12k",
    });
    let hobby = reactive(["看书", "弹琴", "打代码"]);

    // 整理成对象的写法
    let person = reactive({
      name: "永强",
      age: "18",
      job: {
        type: "前端工程师",
        salary: "12k",
      },
      hobby: ["看书", "弹琴", "打代码"],
    });

    // 方法
    function changeInfo1() {
      name.value = "刘英";
      age.value = 20;
      job.type = "UI设计师";
      job.salary = "18k";
      hobby[0] = "泡妞";
    }
    function changeInfo2() {
      // 整理成对象的写法
      person.name = "刘英";
      person.age = 20;
      person.job.type = "UI设计师";
      person.job.salary = "18k";
      person.hobby[0] = "泡妞";
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo1,
      changeInfo2,
      hobby,
      person,
    };
  },
};
</script>

<style>
.box1 {
  background: pink;
}
.box2 {
  background: skyblue;
}
</style>
