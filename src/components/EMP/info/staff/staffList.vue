<template>
    <div class="empTable">
       <h4>员工信息列表</h4>
        <table>
            <tr>
                <th>员工编号</th>
                <th>员工姓名</th>
                <th>员工工作</th>
                <th>员工工资</th>
            </tr>
            <tr v-for="item in listData.data">
                <td>{{item._id}}</td>
                <td>{{item.empName}}</td>
                <td>{{item.job}}</td>
                <td>{{item.sal}}</td>
            </tr>
        </table>
        <div>
            当前页: 
            <select v-model='listData.curPage' :value="listData.curPage" @change="getEmpByPage()">
                <option v-for="page in listData.maxPage" :value='page'>{{page}}</option>
            </select>
            每页显示条数: <input v-model="listData.eachPage" type="text" value="listData.eachPage" @change="getEmpByPage()">
            总条数: <span>{{listData.count}}</span>
            总页数: <span>{{listData.maxPage}}</span>
        </div>
        <div>
            <input type="button" value="首页" @click="getEmpByPage(1)">
            <input type="button" value="上一页" @click="getEmpByPage(--listData.curPage)">
            <input type="button" value="下一页" @click="getEmpByPage(++listData.curPage)">
            <input type="button" value="尾页" @click="getEmpByPage(listData.maxPage)">
        </div>
    </div>
</template>

<script>
    //获取babel-polyfill(使用generator函数的必需支持)
    import "babel-polyfill"
    import axios from "axios"
    
    export default {
        name:"staffList",
        data(){
            return{
                listData:{
                    curPage:1,
                    eachPage:10,
                    maxPage:1,
                    count:0,
                    data:[]
                }
            }
        },
        created(){
            this.getEmpByPage()
        },
        methods:{
            async getEmpByPage(curPage = this.listData.curPage, eachPage = this.listData.eachPage){
                //限制当前页在1到最大页之内
                if(curPage < 2){
                    curPage = 1;
                    this.listData.curPage = 1
                }
                if(curPage > this.listData.maxPage){
                    curPage = this.listData.maxPage;
                    this.listData.curPage = this.listData.maxPage
                }
                let result = await axios.get('http://localhost:3001/emp/getEmpByPage',{
                    params:{
                        curPage:curPage,
                        eachPage:eachPage
                    }
                });
                this.listData = result.data
            }
        }
    }
</script>

<style>
    .empTable th, .empTable td{
        border: 1px solid;
    }
</style>