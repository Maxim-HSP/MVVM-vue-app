<template>
    <div class="empTable">
       <h4>员工信息列表</h4>
        <table>
            <tr>
                <th>员工编号</th>
                <th>员工姓名</th>
                <th>员工工作</th>
                <th>员工工资</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in listData.data">
                <td>{{item._id}}</td>
                <td>{{item.empName}}</td>
                <td>{{item.job}}</td>
                <td>{{item.sal}}</td>
                <td><button @click="delFn(item._id)">删除</button></td>
            </tr>
        </table>
        <div>
            当前页: 
            <select v-model="pageData.curPage" :value="listData.curPage" @change="getEmpByPage()">
                <option v-for="page in listData.maxPage" :value='page'>{{page}}</option>
            </select>
            每页显示条数: <input type="text" v-model="pageData.eachPage" value="listData.eachPage" @change="getEmpByPage()">
            总条数: <span>{{listData.count}}</span>
            总页数: <span>{{listData.maxPage}}</span>
        </div>
        <div>
            <input type="button" value="首页" @click="getEmpByPage(1)">
            <input type="button" value="上一页" @click="getEmpByPage(--pageData.curPage)">
            <input type="button" value="下一页" @click="getEmpByPage(++pageData.curPage)">
            <input type="button" value="尾页" @click="getEmpByPage(listData.maxPage)">
        </div>
    </div>
</template>

<script>
    //获取map辅助函数
    import {mapState,mapMutations,mapActions} from "vuex"
    import "babel-polyfill"
    
    export default {
        name:"staffList",
        data(){
            return {
                pageData:{
                    curPage:1,
                    eachPage:10
                }
            }  
        },
        computed:{
            ...mapState({
                listData: state => state.EMP.listData
            })
        },
        created(){
            this.getEmpByPage()
        },
        methods:{
            //发送当前页和每页条目，为了v-model绑定监听，使用组件data，而不使用store中的state(但template中的value属性使用state)
            getEmpByPage(curPage = this.pageData.curPage, eachPage = this.pageData.eachPage){
                //限制当前页在1到最大页之内
                if(curPage < 2){
                    curPage = 1;
                    this.pageData.curPage = curPage
                }
                else if(curPage >= this.listData.maxPage){
                    curPage = this.listData.maxPage;
                    this.pageData.curPage = curPage
                }
                this.asyncGetListData({curPage,eachPage});
            },
            delFn(_id){
                this.asyncDelFn({
                    _id : _id,
                    curPage : this.pageData.curPage,
                    eachPage : this.pageData.eachPage
                });
                //asyncDelFn会在删除成功后重载列表数据，也可以不在asyncDelFn这个action中dispatch，而在这里重新调用this.getEmpByPage()。
            },
            ...mapActions(["asyncGetListData","asyncDelFn"])
        }
    }
</script>

<style>
    .empTable th, .empTable td{
        border: 1px solid;
    }
</style>