<template>
    <div class=" mt-5">
        <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class=" flex">
            <iconweb icon="fluent-mdl2:signin" width="28" class=" text-red-500" />
            <h1 class=" ml-2 text-xl md:text-2xl font-medium text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-700 to-purple-500">
                LOGIN - ลงชื่อเข้าใช้งาน
            </h1>
        </div>
            <form @submit.prevent="credentailLogin()" class="my-5">
                <div class="flex flex-col space-y-5">
                    <label for="email">
                        <p class="font-bold text-slate-700 text-sm pb-2">Email address</p>
                        <input id="email" type="email" v-model="email"  @blur="validateEmail" 
                            class="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            autocomplete="off" placeholder="yourmail@email.com">
                    </label>
                    <div v-if="errorMsg.emailErr" class=" text-sm text-red-500">
                        {{ errorMsg.emailErr }}
                    </div>
                    <label for="password">
                        <p class="font-bold text-slate-700 text-sm pb-2">Password</p>
                        <input id="password" :type="typePassword" v-model="password" @blur="validatePassword" 
                            class="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            autocomplete="off" placeholder="Enter your password">
                    </label>
                    
                    <div v-if="errorMsg.passwordErr " class=" mt-1 text-sm text-red-500">
                        {{ errorMsg.passwordErr }}
                    </div>
                    <div class="flex flex-row justify-between">
                        <div>
                            <div for="showPasswd" class=" flex">
                                <input type="checkbox" id="showPasswd" v-model="showChBox" class="mt-[2px] w-4 h-4 border-slate-200 focus:bg-indigo-600">
                                <span class="ml-1 text-sm cursor-pointer" for="showPasswd" @click="toggleShow()">Show hidden password</span> 
                            </div>
                        </div>
                        <div>
                            <nuxt-link to="/home/reset-password" class=" text-sm font-medium text-teal-800">Forgot password?</nuxt-link>
                        </div>
                    </div>
                    <button class="w-full py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <div v-if="!isLoading" class=" inline-flex space-x-2">
                            <iconweb icon="arcticons:simplelogin" width="32" />
                            <span>Sign in</span>
                        </div>
                        <div v-else>
                            <span>Loading...</span>
                        </div>
                    </button>
                    <hr class="hr-text" data-content="Or apply for membership to access the system">
                    <div class="my-5">
                        <button @click="gotoRegister()" type="button" class="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <div class=" flex">
                                <iconweb icon="ph:user-plus" width="20"/>
                                <span class="ml-2 text-sm">Register</span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { createToast } from 'mosha-vue-toastify';
    import { useAuthStore } from '@/stores/authen';
    import axios from "axios";
    const auth = useAuthStore();
    const { $swal } = useNuxtApp();
    const baseUrl = ref('');
    const isLoading = ref(false);
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const typePassword = ref('password');
    const showChBox = ref(false);
    const errorMsg: ErrorLogin = reactive({
        emailErr: '',
        passwordErr: ''
    });
    interface ErrorLogin {
        emailErr: string
        passwordErr: string
    }

    onMounted(() => {
        baseUrl.value = useRuntimeConfig().public.apiBaseDefault;
        resetError();
        getToken();
    });

    const getToken = async () => {
        await axios.get(baseUrl.value + "sanctum/csrf-cookie");
    }
    function validateEmail() {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email.value)){
            errorMsg.emailErr = "*** Please check your email format.";
            return false;
        }
        else{
            errorMsg.emailErr = '';
            return true;
        }
    }
    function validatePassword() {
        if(password.value.length < 1){
            errorMsg.passwordErr = "*** Your password is incorrect.";
            return false;
        }
        else {
            errorMsg.passwordErr = '';
            return true;
        }
    }
    function resetError() {
        errorMsg.emailErr = '';
        errorMsg.passwordErr = '';
    }
    function gotoRegister(){
        return navigateTo('/home/register');
    }
    function toggleShow() {
        if(typePassword.value === 'password')
        {
            showChBox.value = true;
            typePassword.value = 'text';
        }
        else {
            showChBox.value = false;
            typePassword.value = 'password';
        }
    }
    function credentailLogin() {
        const checkEmail = validateEmail();
        const checkPasswd = validatePassword();
        if(checkEmail && checkPasswd ){
            resetError();
            isLoading.value = true;
            const data = {
                email: email.value,
                password: password.value
            };
            auth.userLogin(data).then((response: any) => {
                // console.log(response.data);
                if(response.data.success){
                    isLoading.value = false;
                    toast('Login Successfully','เข้าสู่ระบบสำเร็จ','success');
                    setTimeout(() => {
                        window.location.href = "/dashboard";
                    }, 3000);
                }else{
                    isLoading.value = false;
                    toast('Something went wrong',response.data.message,'danger');
                }
            });
        }
    }

    function toast(title: string, des:string, typeIcon: any) {
        createToast({
            title: title,
            description: des
        },
        {
            showIcon: true,
            type: typeIcon,
            transition: 'slide',
        });
    }

    definePageMeta({
        name: 'login-page',
        layout: 'homelayout'
    });
</script>

<style scoped>
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  font-size: 14px;
  height: 1.5em;
  opacity: 0.9;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #b2bb1e, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: #006664;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #b2bb1e;
  background-color: #fcfcfa;
}
</style>