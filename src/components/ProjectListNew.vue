<template>
<!--  这里面只能有一个div，-->
  <div>
<!--el-table，就是elementui提供的子组件，在main。js已经全局导入了-->
<!--    ref是一个元素或者子组件的应用，组件中定义的所有ref都会放在当前组件的$refs属性当中-->
    <el-table

      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      class="project_list_new"

      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
              prop="name"
        label="项目名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="leader"
        label="项目负责人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="app_name"
        label="应用名称"
        width="120">
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
<!--      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

  </div>

</template>

<script>
    export default {
        name: "ProjectList",
      // data中存放数据，method里面存放属性
        data(){
            return {
                project_headers:['项目名称','项目负责人','应用名称'],
                tableData:[
                    {name:'项目1',leader:'小李1',app_name:'应用1'},
                    {name:'项目2',leader:'小李2',app_name:'应用2'},
                    {name:'项目3',leader:'小李3',app_name:'应用3'},
                ],
              multipleSelection:[],
            }
        },
        methods: {
          toggleSelection() {
              //this.$refs. 代表获取当前组件中定义的所有refs，this相当于python类中的self。不是可以调用子组件，还可以调用元素比如div
              //this.$refs.multipleTable.这个就相当于el-table这个子组件，
              //clearSelection();是方法
              this.$refs.multipleTable.clearSelection();
          },
          handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
          }
        }
    }
</script>

<style scoped>
    .project_list_new{
        margin:50px 500px;
    }

</style>