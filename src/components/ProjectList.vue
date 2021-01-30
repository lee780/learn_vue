<template>
<!--    <table>-->
<!--        <tr>-->
<!--            <th>项目名称</th>-->
<!--            <th>项目负责人</th>-->
<!--            <th>应用名称</th>-->
<!--        </tr>-->
<!--        <tr>-->
<!--            <td>项目一</td>-->
<!--            <td>小李</td>-->
<!--            <td>应用一</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--            <td>项目2</td>-->
<!--            <td>小王</td>-->
<!--            <td>应用2</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--            <td>项目3</td>-->
<!--            <td>小张</td>-->
<!--            <td>应用3</td>-->
<!--        </tr>-->

<!--    </table>-->
    <table>
        <tr>
<!--            vue2版本中，v-for必须使用key-->
            <th v-for="project in project_headers" :key="project.id">{{ project }}</th>
        </tr>
        <tr v-for="item in projects" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.leader}}</td>
            <td>{{item.app_name}}</td>
        </tr>
    </table>


</template>

<script>
    export default {
        name: "ProjectList",
        data(){
            return {
                project_headers:['项目名称','项目负责人','应用名称'],
                projects:[
                    {name:'项目1',leader:'小李1',app_name:'应用1'},
                    {name:'项目2',leader:'小李2',app_name:'应用2'},
                    {name:'项目3',leader:'小李3',app_name:'应用3'},
                ]
            }
        }
    }
</script>

<style scoped>
    table{
        margin: 50px auto;
        border-collapse: collapse;
        width: 50%;
    }

</style>