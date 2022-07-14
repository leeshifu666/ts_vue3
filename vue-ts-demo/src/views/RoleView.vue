<template>
    <div>
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item>
                  <el-button type="primary" @click="addRole">添加角色</el-button>
                </el-form-item>
            </el-form>
            
                <el-table
                :data="list"
                style="width: 100%"
            >
                <el-table-column prop="roleId" label="ID" width="180" />
                <el-table-column prop="roleName" label="角色名" width="180" />
                <el-table-column prop="authority" label="操作">
                    <template #default="scope">
                        <el-button
                        link
                        size="small"
                        @click="changeRole(scope.row)"
                        >
                        修改權限
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getRoleList } from '../request/api';
import { InitData, ListInt } from '../type/role';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'


export default defineComponent({
    setup () {
        const data = reactive(new InitData())
        const router = useRouter()
        onMounted(()=>{
            getRoleList().then(res=>{
                console.log(res)
                data.list = res.data
            })
        });
        const addRole = () => {
            ElMessageBox.prompt('請輸入角色名稱', '添加', {
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            })
            .then(({ value }) => {// value表示你在輸入中填寫的值
            if (value){
                data.list.push({roleId:data.list.length+1, roleName:value, authority:[]})
            }
            ElMessage({
                type: 'success',
                message: `${value}角色添加成功`,
            })
            })
            .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消操作',
            })
            })
        }
        const changeRole = (row:ListInt)=>{
            router.push({
                name:"authority",
                params:{
                    id:row.roleId,
                    authority:row.authority.join(',')
                }
            })
        }

        return {...toRefs(data), addRole, changeRole}
    }
})
</script>

<style scoped>

</style>