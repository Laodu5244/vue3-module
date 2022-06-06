<template>
  <h3>一个人的信息</h3>
  <div>姓名:{{ name }}</div>
  <div>年龄:{{ age }}</div>
  <div>性别:{{ sex }}</div>
  <button @click="sayhi">sayhi</button>
  <hr />
  <button @click="test1">测试vue2读取vue3的内容</button>
  <hr />
  <button @click="test2">测试vue3读取vue2的内容</button>
</template>

<script>
export default {
  name: "App",
  // 在vue3项目中尽量不要写vue2的配置(测试)
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    test1() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayhi);
    },
  },
  // 测试setup
  setup() {
    // 数据
    let name = "tom";
    let age = 18;
    // 方法
    function sayhi() {
      alert(`我叫${name},我${age}岁了`);
    }
    // vue3的setup无法访问vue2中的配置
    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayhi);
      console.log(this.sex); //undefined
    }
    // 返回一个对象
    return { name, age, sayhi, test2 };
  },
};
</script>

