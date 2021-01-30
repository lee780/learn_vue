<template>
    <div class="msg">
<!--        插值表达式-->
        <p>{{message}}---from:{{name}}</p>
<!--        title是悬浮标签，把dream当做属性来做-->
<!--        v-开头的为vue中质量零，使用v-bind来绑定属性,没用v-bind的时候，dream就是实参，加了v-bind后dream变成了形参-->
        <span v-bind:title = "dream">学号vue不是梦</span>
<!--       v-if：每次都会重新删除或者创建元素-->
        <p v-if="islihc">不会开车的老师不是好老师</p>
<!--        v-show：每次不会重新进行dom的删除和创建操作，只是切换了元素的状态，在f12中是存在这个元素的，只不过style是display：none，-->
        <p v-show="islihc">这个是v-show，</p><br>
<!--        v-on：click 是一个点击事件，点击之后，原来的username会变成路人-->
<!--        v-on为vue中指令，用于绑定事件（各种事件），事件触发之后，可以执行js操作-->
<!--        v-on可以缩写为@
-->
<!--        <span v-on:click="username='路人'">有一天，{{username}}想去网吧上网！</span>-->
<!--        <span @click="username='路人'">有一天，{{username}}想去网吧上网！</span>-->

        <span @click="changeUsername">有一天，{{username}}想去网吧上网！</span>
        <p v-if="age>=70">{{username}}，年龄超过70，回去锻炼身体吧</p>
        <p v-else-if="age>=18">{{username}}，年龄大于18岁，愉快玩耍</p>
        <p v-else>{{username}}，年龄小于于18岁，不可以进入</p>



    </div>
</template>

<script>
    export default {
        name: "greeting",
        // data当做m，用于存放数据
        data(){
            return {
                message : "测试人你好",
                name:"lihc",
                dream:"一个亿的小目标",
                islihc:false,
                username:"小马仔",
                age:19,

            }
        },
        methods:{
            changeUsername:function(){
                // this相当于python中的self
                this.username='一个没有钱的人'
                // 在template里面看        <span @click="changeUsername">有一天，{{username}}想去网吧上网！</span>


            }
        },
        created() {
            console.log('实例创建之后，能获取到this');
            console.log('username为',this.name);
            this.username = this.$route.query.name;
            this.age = this.$route.query.age;

        },
        mounted() {
            console.log('vue实例挂载到DOM');
        }
    }
</script>

<style scoped>
    .msg p{
        color: red;
    }
</style>