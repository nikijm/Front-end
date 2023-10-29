<template>
  <div class="regis_d">
    <Modal  :model-value="showRegis" 
        @on-cancel="close"  
        :footer-hide = "true" 
        :mask-closable="false"
        width="400"
        class-name="regis_d"
        class="regis_d"
        style="height: 480px;"
        >
    <div class="sign_logo">
      <img src="@/assets/images/sign_logo.png" alt="">
    </div>
    <Tabs value="jobseeker" class="wrap" @on-click="changeRole">
        <TabPane label="Jobseeker" name="jobseeker">
         <RegisForm role="jobseeker" @close="close"/>
        </TabPane>
        <TabPane label="Employer" name="employer">
          <RegisForm role="employer" @close="close"/>
        </TabPane>
    </Tabs>
    </Modal>
  </div>
   
</template>

<script setup lang="ts">
import { watchEffect, defineProps, ref, reactive } from 'vue'
import RegisForm from './RegisForm.vue';
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';

const store = useStore()
 const { showRegis } = storeToRefs(store)


// const props=defineProps({
//   showRegis: Boolean,
//   // likes: Number
// })

const emits = defineEmits(['close'])

// close-dailog
const close = () => {
  emits('close')
}

// chage login role
const changeRole = (name:string) => {
  console.log(name)
}

// const modal2=ref(false)
</script>
<style scoped>


.sign_logo{
  text-align: center;
}
.sign_logo img{
  width:72px;
}
.wrap{
  width:300px;
  margin:0 auto;
}
.wrap >>> .ivu-tabs-nav {
  width: 100%;
  text-align: center;
}
.wrap >>> .ivu-tabs-tab-active {
    /* color: #2d8cf0; */
    border-bottom: 5px solid #41B9B2 !important;
    font-weight: 700;
}

.wrap >>> .ivu-tabs-ink-bar{
  display: none;
}

.wrap >>>.ivu-input{
  border-radius: 60px;
  height: 36px;
}
.wrap :deep(.ivu-tabs-bar){
  border-bottom: unset;
}
.wrap :deep(.ivu-tabs-nav .ivu-tabs-tab){
  width:50%;
  margin-right: 0;
}
.wrap :deep(.ivu-tabs-tab){
  border-bottom: 5px solid #D3D3D3;
}
</style>