<template>
  <div>
     <Form :model="formdatas" 
            label-position="top"
            :rules="ruleValidate"
            ref="formValidate"
            >
        <FormItem :label="role=='jobseeker'?'Email':'Work Email '" prop="email">
            <Input v-model="formdatas.email" placeholder="Enter email"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
            <Input v-model="formdatas.password" type="password" password placeholder="Enter password" ></Input>
        </FormItem>
        <FormItem label="Confirm Password" prop="confirm">
            <Input v-model="formdatas.confirm" type="password" password placeholder="Enter password" ></Input>
        </FormItem>
         <div class="demo-auto-login font_10">
                <Checkbox v-model="single" style="font-size:10px" >I agree to the</Checkbox>
                <RouterLink class="d_link "  to="" v-color="'#5C73F4'" style="margin-left:-6px">Terms of Service</RouterLink>
                <span> and </span>
                <RouterLink class="d_link" to="" v-color="'#5C73F4'">Privacy Policy</RouterLink>
                <!-- <a style="float:right"> Terms of Service and</a><a style="float:right"> Privacy Policy</a> -->
        </div>
       <div style="text-align: center;margin-bottom: 0px;">
            <Button type="primary" class="submit" shape="circle" @click="submitRegis()">Sign Up</Button>
        </div>
        <div >
            <span>Already have an account?</span>
            <Button type="text" v-color="'#5C73F4'" @click="showLoginPage">Sign in here</Button>
        </div>
        <!-- <FormItem style="text-align: center;">
            <Button type="text"  shape="circle">Not registered yet? Sign Up now</Button>
        </FormItem> -->
    </Form>
  </div>
  <CongratulationPage v-if="showSucess" :show-sucess="showSucess"  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import CongratulationPage from './CongratulationPage.vue';
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';

const store = useStore()
const { showRegis,showLogin } = storeToRefs(store)
const single = ref(true)
 const formValidate=ref()

const emits=defineEmits(['close'])
defineProps({
  role:String
})

const formdatas = ref({
  email: '',
  password: '',
  confirm:''
})
const showSucess: any = ref(false)
const ruleValidate = ref({
  email: [{ required: true, message: 'The Email cannot be empty', trigger: 'blur' },
         { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
  ],
    password: [{ required: true, message: 'The password cannot be empty', trigger: 'blur' }],
     confirm: [{ required: true, message: 'The confir password cannot be empty', trigger: 'blur' }],
})

// submit registration
const submitRegis = () => {
   showSucess.value = true;
  // formValidate.value.validate((valid: any) => {
  //   if (valid) {
  //     showSucess.value = true;
  //   } else {
  //     console.log('err')
  //   }
  // })
  
}

const close = () => {
  showRegis.value = false
}

const showLoginPage = () => {
  showRegis.value = false;
  showLogin.value = true;
}
</script>

<style scoped>
.submit{
  width:200px;
  height: 30px;
  margin-top:20px;
}
.d_link:hover{
  font-weight: bold;
}
</style>