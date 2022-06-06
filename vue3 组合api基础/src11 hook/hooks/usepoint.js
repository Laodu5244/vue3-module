import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
  // 数据
  let point = reactive({
    x: 0,
    y: 0,
  });

  // 方法
  function savePoint(event) {
    console.log(event.pageX, event.pageY);
    point.x = event.pageX;
    point.y = event.pageY;
  }
  // 调用挂载后钩子
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  // 调用卸载前钩子
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });
  return point
}