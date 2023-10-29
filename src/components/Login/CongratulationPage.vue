<template>
  <div >
<Modal  :model-value="showSucess" @on-cancel="close"  
        class="login" :footer-hide = "true" 
        :transfer="true" 
        :mask-closable="false"
        width="400"
        style="height: 480px;"
        >
    <div class="sign_logo">
      <img src="@/assets/images/sign_logo.png" alt="">
      <div v-color="'#41B9B2'" v-font="20" v-padding="15">Congratulations! </div>
      <div class="font_10 mt_10">
        <p v-color="'#8B8B8B'">You’ve registered with the following email: </p>
        <p v-color="'#3D3D3D'" v-padding="6">username@talentpool.co.jp</p>
        <p v-color="'#8B8B8B'">To complete your registration, please check your email inbox.</p>
      </div>
      <div class="open_email">
         <Button type="primary" class="submit" shape="circle" >
         <Icon type="ios-mail-outline" size="24" />
          Open Email</Button>
      </div>
      <div>
        <p class="activation_code">I have the Activation Code:</p> 
      </div>
       <div>
         <Button type="primary" class="submit" shape="circle" v-width="200" @click="enterActivation">
         Enter Activation Code</Button>
      </div>
      <div>
        <p v-color="'#8B8B8B'" class="con_text font_10">If you don't see the email in your inbox, please check your spam or junk folder. </p>
      </div>
    
    </div>
    
        </Modal>
  </div>
   <AccountActivation  v-if="showAccount" :show-account="showAccount" />
</template>

<script setup lang="ts">
import { watchEffect, defineProps, ref } from 'vue'
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';
import AccountActivation from './AccountActivation.vue';

const store = useStore()
const { showRegis } = storeToRefs(store)
defineProps({
  showSucess:Boolean
})
const emits = defineEmits(['close'])
const showAccount=ref(false)


const close = () => {
  showRegis.value = false
}

//  enterActivation
const enterActivation = () => {
  showAccount.value=true
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
.activation_code{
  color:#5C73F4;
  font-weight: 700;
   /* width:58%; */
   margin-top:18px;
   text-align: left;
}
.con_text{
  text-align:left;
  margin-top:20px;
  padding-bottom: 60px;
}
.open_email{
  margin-top:10px;
}
</style>