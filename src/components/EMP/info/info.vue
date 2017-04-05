   <template>
    <div>
        <ul class="infoUl">
<!--           使用router-link组件进行同页面子组件的加载(等同于react的Link组件)-->
            <li><router-link to="/info/staff">员工管理</router-link></li>
            <li><router-link to="/info/student">学生管理</router-link></li>
            <li><router-link to="/info/teacher">教师管理</router-link></li>
            <li><router-link to="/info/system">系统设置</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name : "info"
    }
</script>

<style>
    .infoUl{
        display: flex;
        list-style: none;
    }
    .infoUl li{
        padding-right: 10px;
    }
</style>