//0 。 安装并导入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// // track number of popstate listeners
// let numPopstateListeners = 0
// const listenerCountDiv = document.createElement('div')
// listenerCountDiv.id = 'popstate-count'
// listenerCountDiv.textContent = numPopstateListeners + ' popstate listeners'
// document.body.appendChild(listenerCountDiv)
//
// const originalAddEventListener = window.addEventListener
// const originalRemoveEventListener = window.removeEventListener
// window.addEventListener = function (name, handler) {
//   if (name === 'popstate') {
//     listenerCountDiv.textContent =
//       ++numPopstateListeners + ' popstate listeners'
//   }
//   return originalAddEventListener.apply(this, arguments)
// }
// window.removeEventListener = function (name, handler) {
//   if (name === 'popstate') {
//     listenerCountDiv.textContent =
//       --numPopstateListeners + ' popstate listeners'
//   }
//   return originalRemoveEventListener.apply(this, arguments)
// }

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. 导入组件
import greeting from "../components/greeting";
import HelloWorld from "../components/HelloWorld";
import LoginNew from "../components/LoginNew";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList";
import ProjectListNew from "../components/ProjectListNew";


// 3. Create the router创建路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    //  routes数组中的一个对象，就是一条路由
    { path: '/', component: HelloWorld, name:'home' },
    //  在组建中可以通过this.$router.query来获取字符串参数
    { path: '/greeting', component: greeting, name:'greeting' },
    { path: '/login', component: Login ,name:'login'},
    {
      path: '/login2',
      component: LoginNew,
      name: 'login2',
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        // {path: '', component: ProjectList},

        //  不加/是在login2的基础上进行拼接
        {path: 'project_list2', component: ProjectListNew},

        // {path: '/project_list2', component: ProjectListNew},
      ]
    },
    { path: '/ProjectList', component: ProjectList,name:'project_list' },
    { path: '/project_list2', component: ProjectListNew,name:'project_list2' },
  ]
});

//4. 导出路由
export default router;

