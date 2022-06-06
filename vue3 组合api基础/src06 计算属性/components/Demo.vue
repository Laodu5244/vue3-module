<template>
  <div class="box">
    姓: <input type="text" v-model="person.firstname" /><br />
    名: <input type="text" v-model="person.lastname" />
    <div>全名:{{ person.fullname }}</div>
    全名: <input type="text" v-model="person.fullname" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    // 数据
    let person = reactive({
      firstname: "刘",
      lastname: "英",
    });
    // 计算属性(简写)
    /*  person.fullname = computed(() => {
      return person.firstname + "-" + person.lastname;
    }); */
    // 计算属性(完整写法)
    person.fullname = computed({
      get() {
        return person.firstname + "-" + person.lastname;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstname = nameArr[0];
        person.lastname = nameArr[1];
      },
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