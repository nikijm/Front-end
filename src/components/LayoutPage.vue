<template>
  <Menu mode="horizontal"  active-name="1">
    <MenuItem name="0">
      <div class="logo">
        <img  src="@/assets/images/logo_main.png" width="160" />
      </div>
          
        </MenuItem>
        <MenuItem name="1">
            <!-- <Icon type="ios-paper" /> -->
            Home
        </MenuItem>
        <MenuItem name="2">
            <!-- <Icon type="ios-people" /> -->
            Talents
        </MenuItem>
        <Submenu name="3">
            <template #title>
                <!-- <Icon type="ios-stats" /> -->
                Jobs
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <!-- <Icon type="ios-construct" /> -->
            Resources
        </MenuItem>
        <li class="sign_wrap">
          
            <div>
               <Button shape="circle">Post a Job</Button>
               <Button  type="text" @click="handleSignUp">Sign up</Button>
               <Button  type="text" @click="handleSign">Sign in</Button>
            </div>
        </li>
    </Menu>
    <LoginPage  v-if="showLogin" :show-modal="showLogin" @close="closeLogin"/>
    <RegisPage v-if="showRegis" :show-regis="showRegis" @close="closeRegis" />
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue'
import LoginPage from '@/components/Login/LoginPage.vue'
import RegisPage from './Login/RegisPage.vue';
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';

const store = useStore()
 const { showRegis,showLogin } = storeToRefs(store)



const handleSign = () => { 
  showLogin.value = true
  console.log(showLogin.value)
}

const handleSignUp = () => {
  showRegis.value=true
}
const closeLogin = () => {
  showLogin.value=false
}
const closeRegis = () => {
  showRegis.value=false
}
</script>
<style scoped>
.logo img{
  vertical-align: middle;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, 
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, 
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, 
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color:#41B9B2!important;
  border-bottom:unset;
  /* border-bottom:1px solid #41B9B2; */
  /* font-weight:bold; */
}
.sign_wrap{
  float:right!important;
}
</style>