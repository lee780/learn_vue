//导入Vue.js
import Vue from 'vue'
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入子组件
import HelloWorld from "./components/HelloWorld";
//创建全局组件
Vue.component('hello-world',HelloWorld);
//导入vue router对象，
import router from './router/index.js'




// 在创建vue实例之前，要将element-ui插件加入到vue中
Vue.use(ElementUI)

//导入App.vue根组件
import App from './App.vue'

Vue.config.productionTip = false


//创建vue实例
new Vue({
//render是渲染app根组件
  render: h => h(App),
  router,
}).$mount('#app')
