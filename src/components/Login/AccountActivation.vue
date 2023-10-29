<template>
  <div >
<Modal  :model-value="showAccount" @on-cancel="close"  
        class="login" :footer-hide = "true" 
        :transfer="true" 
        :mask-closable="false"
        width="400"
        style="height: 480px;"
        >
    <div class="sign_logo">
      <img class="mt_35" src="@/assets/images/sign_logo.png" alt="">
       <div v-color="'#41B9B2'" v-font="20" v-padding="15" class="font_we700">Account Activation </div>
      <div>
        <p v-color="'#8B8B8B'">To activate your account, please enter the</p>
       <p class="account_code">Activation Code:</p> 
      </div>
      <!-- <div class="open_email">
         <Button type="primary" class="submit" shape="circle" >
         <Icon type="ios-mail-outline" size="24" />
          Open Email</Button>
      </div> -->
      <div class="mt_40 mb_30">
<VerificationInput class="verification" @change="handleChange" :step="4"></VerificationInput>
      </div>
       <div >
         <Button type="primary" class="submit" shape="circle" v-width="200" @click="showActivated" >
         Activate Account</Button>
      </div>
      <div>
        <p v-color="'#8B8B8B'" class="con_text">
          <span class="account_code" @click="handleResent">Resend code</span><span v-if="showCountdown"> in </span> 
           <CountDown v-if="showCountdown" :target="countDown" @on-end="handleEnd" v-font="14" />
           
         </p>
      </div>
    </div>
        </Modal>
  </div>
   <AccountActivated v-if="showActivatedEle" :show-activate="showActivatedEle" />
</template>

<script setup lang="ts">
import { watchEffect, defineProps, ref } from 'vue'
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';
import type { Input } from 'view-ui-plus';
import AccountActivated from './AccountActivated.vue'
import { VerificationInput } from 'vue3-code-input';

const store = useStore()
const { showRegis } = storeToRefs(store)
const showActivatedEle = ref(false)
const countDown = ref(new Date().getTime() + 60000)
const showCountdown=ref(true)

function handleChange(code: string) {
  console.log(code);
}
defineProps({
  showAccount:Boolean
})
const emits = defineEmits(['close'])
// const styles={
//         'border': '1px solid #dcdcdc',
//         'padding': '10px',
//         'margin': '15px',
//       }


const close = () => {
  showRegis.value = false
}

//  showActivated
const showActivated = () => {
  showActivatedEle.value=true
}

const handleEnd = () => {
 showCountdown.value=false
}

const handleResent = () => {
  showCountdown.value = true
  countDown.value=new Date().getTime() + 60000
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
  cursor: pointer;
}
.account_form{
  width:64%;
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
.verification :deep(.verification-input__inner){
  border:1px solid #D3D3D3!important;
  border-radius: 4px;
  box-shadow: unset!important;
  margin-right: 14px!important;
  width:40px!important;
  height: 40px!important;
}
.verification :deep(.verification-input__inner:last-child){
  margin-right: 0!important;
}
</style>