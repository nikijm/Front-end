<template>
  <div>
    <Modal
      :model-value="showModal"
      @on-cancel="close"
      class="login"
      :footer-hide="true"
      :mask-closable="false"
      width="400"
    >
      <div class="sign_logo mt_10 mb_10">
        <img src="@/assets/images/sign_logo.png" alt="" />
      </div>
      <Tabs value="jobseeker" class="wrap" @on-click="changeRole">
        <TabPane label="Jobseeker" name="jobseeker">
          <LoginForm role="jobseeker" />
        </TabPane>
        <TabPane label="Employer" name="employer">
          <LoginForm role="employer" />
        </TabPane>
      </Tabs>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import { watchEffect, defineProps, ref } from 'vue'
  import LoginForm from '@/components/Login/LoginForm.vue'

  const props = defineProps({
    showModal: Boolean
    // likes: Number
  })

  const emits = defineEmits(['close'])

  // close-dailog
  const close = () => {
    emits('close')
  }

  // chage login role
  const changeRole = (name: string) => {
    console.log(name)
  }
  setTimeout(() => {
    watchEffect(() => {
      console.log(props.showModal)
    })
  }, 100)
  // const modal2=ref(false)
</script>
<style scoped>
  .sign_logo {
    text-align: center;
  }
  .sign_logo img {
    width: 72px;
  }
  .wrap {
    width: 300px;
    margin: 0 auto;
  }
  .wrap >>> .ivu-tabs-nav {
    width: 100%;
    text-align: center;
  }
  .wrap >>> .ivu-tabs-tab-active {
    /* color: #2d8cf0; */
    border-bottom: 4px solid #41b9b2 !important;
    font-weight: 700;
  }
  .wrap >>> .ivu-tabs-ink-bar {
    display: none;
  }
  .submit {
    width: 150px;
    height: 30px;
    margin-top: 20px;
  }
  .wrap >>> .ivu-input {
    border-radius: 60px;
    height: 36px;
  }
  .wrap :deep(.ivu-tabs-nav .ivu-tabs-tab) {
    width: 50%;
    margin-right: 0;
  }
  .wrap :deep(.ivu-tabs-tab) {
    border-bottom: 5px solid #d3d3d3;
  }
</style>
