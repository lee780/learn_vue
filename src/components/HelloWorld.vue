<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{title}}</h1>
        <el-image :src="url" fit="cover"> </el-image>
<!--        插槽slot用法-->
<!--        第一种方式-->
<!--        <slot></slot>-->
<!--第二种方法-->
            <slot><p>我们一起学猫叫</p></slot>
<!--        第三种方式，命名插槽-->
    <slot name="part1"></slot>

    <slot name="part2"></slot>

    <slot name="part3"></slot>
<!-- 插槽作用域-->
    <slot name="part4" :user="username"></slot>

    <slot name="part5" user="icon"></slot>

    <slot name="part6" user="power"></slot>

        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>

    </div>
</template>

<script>
    // import axios from 'axios'
    import {dogs} from '../api/api'
    export default {
        name: 'HelloWorld',
        props: {
            //从父组件中获取msg数据
            msg: String,
            title: Number,

        },
        data() {
            return {
                url: '',
                username:'木子'
            }
        },
        mounted() {
            // 方式一：不推荐、不行）
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //     .then(function (response) {
            //         console.log(response);
            //         console.log(response.data);
            //         //这里的this指定的不是vue对象， 而是这个局部的（function（response））的对象
            //         //此时的this指的是当前函数的应用，
            //         this.url=response.data.message
            //     })
            //     .catch(function (err) {
            //         console.log(err);
            //     });

            //    方式二：定义成箭头函数,放到了api.js里面
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //     .then(response => {
            //         console.log(response);
            //         console.log(response.data);
            //
            //         this.url=response.data.message
            //     })
            //     .catch(function (err) {
            //         console.log(err);
            //     });
            //方式三：
            dogs()
                .then(response => {
                    console.log(response);
                    console.log(response.data);

                    this.url=response.data.message
                })
                .catch(function (err) {
                    console.log(err);
                });


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
