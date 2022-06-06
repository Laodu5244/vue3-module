// 引入的不再是Vue构造函数,是createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

/* // 创建应用实例对象=>app(类似vue2中的vm)
const app = createApp(App)
// 挂载
app.mount('#app') */

/* // 等两秒卸载app组件
setTimeout(() => {
  app.unmount('#app')
}, 2000); */

// 创建并挂载app(官方写法)
createApp(App).mount('#app')
