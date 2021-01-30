<template>
    <div class="login">

    <el-form :model="ruleForm" status-icon :rules="rules"
             ref="ruleForm" label-width="70px" class="demo-ruleForm" :label-position="labelPostion">
          <el-form-item label="用户名">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>

    </el-form>
        <p>你输入的用户名为{{ruleForm.username}}</p>
        <p>你输入的密码为{{ruleForm.password}}</p>
    <p>==================================</p>
        <!--    展示路由的页面内容-->
    <router-view></router-view>
    </div>


</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                labelPostion:'left',
                username:'lihc',
                password:'123123',
                ruleForm: {
                  username: '',
                  password: '',

                },
            }

        }
    }
</script>

<style scoped>
    input{
        margin: 10px auto;
        font-size: medium;
    }
    label{
        margin-right: 10px;
    }
    .el-form{
        width: 350px;
        margin: 50px auto;


    }
</style>