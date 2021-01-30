<template>
    <div class="login">
        <form method="post" action="">
            <label for="username">用户名：</label>
<!--            v-bind是单向绑定，只能讲model中的数据传给template绑定的属性-->
<!--            <input type="text" id="username" placeholder="请输入用户名" :username="username">-->
<!--v-model 是双向绑定，既可以讲model中的数据传给绑定的属性，也可以将用户输入的内容传给model-->
            <input type="text" id="username" placeholder="请输入用户名" v-model="username">
            <br>
            <label for="password">密码：</label>
            <input type="password" id="password" placeholder="请输入密码" v-model="password">
        </form>


        <p>你输入的用户名为{{ruleForm.username}}</p>
        <p>你输入的密码为{{ruleForm.password}}</p>
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