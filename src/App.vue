
<!-- 负责展示给用户，相当于mvvm中的 v，视图-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
<!--    <img alt="Vue logo" src="./assets/Snipaste_2.png">-->
<!--    <Login></Login>-->
<!--    <ProjectList></ProjectList>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App1111111111"/>-->
<!--&lt;!&ndash;    这里也要导入&ndash;&gt;-->
<!--    <greeting></greeting>-->
<!--    <hello-world msg="这是一个msg" :title="title"></hello-world>-->
<!--    <ProjectListNew></ProjectListNew>-->

<!--    router-link -->
    <ul>
<!--      to属性默认为path路径值-->
<!--      <li><router-link to="/">主页</router-link></li>-->
<!--      <li><router-link to="/greeting">问候snow</router-link></li>-->
<!--      <li><router-link to="/Login">登录1</router-link></li>-->
<!--      <li><router-link to="/LoginNew">登录2</router-link></li>-->
<!--      <li><router-link to="/ProjectList">项目列表</router-link></li>-->
<!--      <li><router-link to="/ProjectListNew">项目列表2</router-link></li>-->

<!--      通过name来定义-->
      <li><router-link :to="{name:'home'}">主页</router-link></li>
      <li><router-link :to="{name:'greeting'}">问候snow</router-link></li>
      <li><router-link :to="{name:'greeting'}">登录1</router-link></li>
      <li><router-link :to="{name:'greeting'}">登录2</router-link></li>
      <li><router-link :to="{name:'greeting'}">项目列表</router-link></li>
      <li><router-link :to="{name:'greeting'}">项目列表2</router-link></li>


    </ul>


<!--    展示路由的页面内容-->
    <router-view></router-view>



  </div>
</template>
<!-- 放js代码-->
<script>

  // 导入子组件
// import HelloWorld from './components/HelloWorld.vue'
// import greeting from './components/greeting'
//   import ProjectList from "./components/ProjectList";
// import ProjectListNew from "./components/ProjectListNew";
// import Login from "./components/Login";

export default {
  // 定义组件名称
  name: 'App',
  components: {
    // 声明子组件
    // HelloWorld,
    // greeting,
    // ProjectList,
    // ProjectListNew,
    // Login,
  },
  data(){
    return {
      title: "kkkkk"
    }
  }
}
</script>
<!-- 放css代码，负责样式管理 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
