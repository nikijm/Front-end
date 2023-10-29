<template>
  <div >
<Modal  :model-value="showActivate" @on-cancel="close"  
        class="login" :footer-hide = "true" 
        :transfer="true" 
        :mask-closable="false"
        width="400"
        style="height: 480px;"
        >
    <div class="sign_logo">
      <img class="mt_35" src="@/assets/images/sign_logo.png" alt="">
       <div v-color="'#41B9B2'" v-font="20" v-padding="15">Your account is now activated </div>
      <div class="font_10">
        <p v-color="'#8B8B8B'">As a member with TalentPool, you now have access </p>
        <p v-color="'#8B8B8B'">to a wide range of opportunities. </p>
       <p class="account_code mt_35">Sign in to unleash the power of TalentPool.</p> 
      </div>
      
       <div class="mt_20 ">
         <Button type="primary" class="submit" shape="circle" v-width="200" @click="showLoginPage">
        Sign In Now</Button>
      </div>
    </div>
    
        </Modal>
  </div>
   
</template>

<script setup lang="ts">
import { watchEffect, defineProps, ref } from 'vue'
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';
import type { Input } from 'view-ui-plus';

const store = useStore()
const { showRegis,showLogin } = storeToRefs(store)

defineProps({
  showActivate:Boolean
})
const emits=defineEmits(['close'])


const close = () => {
  showRegis.value = false
}

const showLoginPage = () => {
  showRegis.value = false;
  showLogin.value = true;
}
</script>
<style scoped>
.sign_logo{ 
  text-align: center;
  margin:0 auto;
}
.sign_logo img{
  width:72px;
}
.wrap{
  /* width:75%; */width: 350px;
  margin:0 auto;
}
.wrap >>> .ivu-tabs-nav {
  width: 100%;
  text-align: center;
}
.wrap >>> .ivu-tabs-tab-active {
    /* color: #2d8cf0; */
    border-bottom: 4px solid #41B9B2;
}
.wrap >>> .ivu-tabs-ink-bar{
  display: none;
}

.wrap >>>.ivu-input{
  border-radius: 60px;
}
.submit{
  width:160px;
  height: 40px;
  margin-top:20px;
}

.con_text{
  
  margin-top:20px;
  padding-bottom: 60px;
}

.account_code{
  color:#5C73F4 !important;
  font-weight: bold;
}
.account_form{
  width:50%;
  margin:0 auto;
  display: flex;
  margin-top:20px;
}
.account_form :deep(.ivu-form-item-content){
  width:40px;
}
.account_form :deep(.ivu-input){
  height: 40px;
}

</style>