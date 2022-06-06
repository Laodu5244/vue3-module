<template>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.salary + "k" }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.salary++">涨薪</button>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "张三",
      age: "24",
      job: {
        salary: 15,
      },
    });

    // 监视reactive所定义的响应式数据
    /* 几个注意点: 1 无法正确获取old
                  2 强制开启深度监视(deep配置无效) */
    /* watch(person, (n, old) => {
      console.log("person变化了", n, old);
    },{deep:false}); //此处的deep配置无效 */

    // 监视reactive所定义的某一个属性
    watch(
      // 监视reactive的某一个属性要写成函数
      () => person.age,
      (n, old) => {
        console.log("person变化了", n, old);
      }
    );

    // 监视reactive所定义的对象(要加deep:true)
    watch(
      // 监视reactive的某一个属性要写成函数
      () => person.job,
      (n, old) => {
        console.log("person变化了", n, old);
      },
      { deep: true }
    );

    return { person };
  },
};
</script>