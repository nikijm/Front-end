<template>
  <div>
     <Form :model="formdatas" label-position="top"  ref="formValidate" :rules="ruleValidate">
        <FormItem :label="role=='jobseeker'?'Email':'Work Email '" prop="email">
            <Input v-model="formdatas.email" placeholder="Enter email"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
            <Input v-model="formdatas.password" type="password" password placeholder="Enter password" ></Input>
        </FormItem>
         <div class="demo-auto-login font_10">
                <Checkbox v-model="singned" style="font-size:12px"> Keep me signed in</Checkbox>
                <a style="float:right" v-color="'#5C73F4'"> Forgot Password?</a>
        </div>
       <div style="text-align: center;">
            <Button type="primary" class="submit" shape="circle" @click="handleSignin">Sign In</Button>
        </div>
        <div style="text-align: center;" class="mt_10">
            <Button type="text"  shape="circle" v-color="'#5C73F4'">Forgot Username?</Button>
        </div>
        <FormItem style="text-align: center;">
            <span>Not registered yet?</span><Button type="text"  shape="circle"  v-color="'#5C73F4'" @click="showSinup"> Sign Up now</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/counter'
import { storeToRefs, type Store, type _UnwrapAll } from 'pinia';

const store = useStore()
const { showRegis,showLogin } = storeToRefs(store)
const formdatas = ref({
  email: '',
  password: ''
})
const singned = ref(true)
 const formValidate=ref()

defineProps({
  role:String
})
const ruleValidate = ref({
  email: [{ required: true, message: 'The Email cannot be empty', trigger: 'blur' },
         { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
  ],
    password: [{ required: true, message: 'The password cannot be empty', trigger: 'blur' }]
})
const showSinup = () => {
  showRegis.value = true;
  showLogin.value = false;
}

const handleSignin = () => {
  formValidate.value.validate((valid: any) => {
    if (valid) {
      console.log('sucess')
    } else {
      console.log('err')
    }
  })
}
</script>

<style scoped>
.submit{
  width:150px;
  height: 40px;
  margin-top:20px;
}
</style>