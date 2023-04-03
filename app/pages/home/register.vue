<template>
    <div class="mt-5">
        <div class="max-w-4xl mx-auto bg-white p-4">
            <div class=" py-2 mb-2  flex">
                <Icon icon="icon-park-twotone:right-user" width="30"/> 
                <span class=" text-2xl font-bold text-teal-700 ml-2">Create Account </span> 
            </div>
            <div v-if="!createdUser">
                <form @submit.prevent="registerHandle()">
                    <div class="grid gap-6 mb-6 lg:grid-cols-2">
                        <HomeTextBox v-model.trim="formUser.prefix_th" labelId="prefix_th" typeInput="text"
                            labelText="Prefix name (Thai)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="นาย/นาง/นางสาว" />

                        <HomeTextBox v-model.trim="formUser.prefix_en" labelId="prefix_en" typeInput="text"
                            labelText="Prefix name (English)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="Mr./Mrs./Miss" />
                        
                        <HomeTextBox v-model.trim="formUser.firstname_th" labelId="firstname_th" typeInput="text"
                            labelText="First name (Thai)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="If not, specify -" />
                        
                        <HomeTextBox v-model="formUser.lastname_th" labelId="lastname_th" typeInput="text"
                            labelText="Last name (Thai)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="If not, specify -" />
                        
                        <HomeTextBox v-model="formUser.firstname_en" labelId="firstname_en" typeInput="text"
                            labelText="First name (English)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="" />
                        
                        <HomeTextBox v-model="formUser.lastname_en" labelId="lastname_en" typeInput="text"
                            labelText="Last name (English)" labelColor="text-gray-900" 
                            borderInputColor="bg-white" placeHolder="" />

                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-pink-900 dark:text-gray-300">Choose a user type : <span class="text-red-400">*</span></label>
                            <select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg px-4 "
                            v-model="formUser.cate_user">
                                <option value="null">Select choice</option>
                                <option v-for="(categoryUser, index) in categoryUsers" :key="index" :value="categoryUser.cate_code" >{{ categoryUser.cate_name }}</option>
                            </select>
                        </div>

                        <HomeTextBox v-model="formUser.department" labelId="department" typeInput="text"
                            labelText="Department (not specified as '-' )" labelColor="text-pink-900" 
                            borderInputColor="bg-white" placeHolder="" />

                        <HomeTextBox v-model="formUser.agencies" labelId="agencies" typeInput="text"
                            labelText="Faculty (not specified as '-' )" labelColor="text-pink-900" 
                            borderInputColor="bg-white" placeHolder="" />
                        <HomeTextBox v-model="formUser.name_company" labelId="name_company" typeInput="text"
                            labelText="Name company (not specified as '-' )" labelColor="text-pink-900" 
                            borderInputColor="bg-white" placeHolder="" /> 
                        <HomeTextBox v-model.number="formUser.phone" labelId="phone" typeInput="text"
                            labelText="Phone number" labelColor="text-blue-900" 
                            borderInputColor="bg-white" placeHolder="" /> 
                        <HomeTextBox v-model.trim="formUser.email" labelId="email" typeInput="text"
                            labelText="Email address" labelColor="text-blue-900" 
                            borderInputColor="bg-white" placeHolder="" />
                    </div>
                    <div class=" mb-6">
                        <label class="font-semibold text-sm text-gray-600 py-2">Specify the address for issuing the receipt <span class="text-red-400">*</span></label>
                        <textarea name="message" v-model="formUser.address" 
                        class="mt-2 w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                        placeholder="ข้อมูลนี้จะถูกแสดงเมื่อมีการขอยืนยันที่อยู่ในการออกใบเสร็จ การชำระค่าใช้บริการ และสามารถแก้ไขได้ในภายหลัง (This information is shown when you verify your billing address. Pay for the service and can edit it later.)" spellcheck="false"></textarea>
                    </div>
                    <div class=" mt-4 flex">
                        <Icon icon="arcticons:password" width="40"/>
                        <span class=" mt-3 text-base text-pink-800">Please enter a password for the first time to access system</span>
                    </div>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-3">
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium dark:text-gray-300 text-teal-900">Password <span class="text-red-400">* At least 8 characters long</span></label>
                            <input type="password" v-model.trim="password"
                                class=" border bg-gray-50 border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[2px] px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                id="password" placeholder="***" autocomplete="off" @input="showIndecator" >
                        </div>
                        <div>
                            <label for="confirm_password" class="block mb-2 text-sm font-medium dark:text-gray-300 text-teal-900">Confirm Password <span class="text-red-400">* At least 8 characters long</span></label>
                            <input type="password" v-model.trim="confirm_password"
                                class=" border bg-gray-50 border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[2px] px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                id="confirm_password" placeholder="****" autocomplete="off">
                        </div>
                    </div>

                    <div v-if="passwordStreng" class="py-2 px-2 mb-4 border border-teal-800 rounded-md">
                        <p class="mb-2 text-blue-700 flex">
                            <Icon icon="fluent:password-20-regular" width="32" />
                            <span class="ml-2 mt-[3px]">Password Strength Indicator</span>
                        </p>
                        <hr>
                        <p class=" flex frmValidation" :class="{'frmValidation--passed' : password.length > 7}">
                            <Icon v-if="password.length > 7" icon="octicon:check-16" class="text-green-600" width="24"/>
                            <Icon v-else icon="eva:close-fill" class="text-red-600" width="24"/>
                            <span class=" mt-[3px] ml-2 text-sm" :class="{'text-green-800' : password.length > 7}">Longer than 7 characters</span>
                        </p>
                        <p class=" flex frmValidation" :class="{'frmValidation--passed' :has_uppercase}">
                            <Icon v-if="has_uppercase" icon="octicon:check-16" class="text-green-600" width="24"/>
                            <Icon v-else icon="eva:close-fill" class="text-red-600" width="24"/>
                            <span class=" mt-[3px] ml-2 text-sm" :class="{'text-green-800' : has_uppercase}">Has a capital letter</span>
                        </p>
                        <p class=" flex frmValidation" :class="{'frmValidation--passed' :has_lowercase}">
                            <Icon v-if="has_lowercase" icon="octicon:check-16" class="text-green-600" width="24"/>
                            <Icon v-else icon="eva:close-fill" class="text-red-600" width="24"/>
                            <span class=" mt-[3px] ml-2 text-sm" :class="{'text-green-800' : has_lowercase}">Has a lowercase letter</span>
                        </p>
                        <p class=" flex frmValidation" :class="{'frmValidation--passed' :has_number}">
                            <Icon v-if="has_number" icon="octicon:check-16" class="text-green-600" width="24"/>
                            <Icon v-else icon="eva:close-fill" class="text-red-600" width="24"/>
                            <span class=" mt-[3px] ml-2 text-sm" :class="{'text-green-800' : has_number}">Has a number</span>
                        </p>
                        <p class=" flex frmValidation" :class="{'frmValidation--passed' :has_special}">
                            <Icon v-if="has_special" icon="octicon:check-16" class="text-green-600" width="24"/>
                            <Icon v-else icon="eva:close-fill" class="text-red-600" width="24"/>
                            <span class=" mt-[3px] ml-2 text-sm" :class="{'text-green-800' : has_special}">Has a special character <a href="https://owasp.org/www-community/password-special-characters" target="_blank" class="text-indigo-600 underline">(more data)</a></span>
                        </p>
                    </div>
                    
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="agree" type="checkbox" v-model="agree" @click="agreeTerm()" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                        </div>
                        <label for="agree" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            I agree with the
                            <span class="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">terms and conditions.</span>
                        </label>
                    </div>
                    <button class="text-white w-50 mx-auto max-w-sm rounded-md text-center bg-indigo-400 hover:bg-indigo-700 py-2 px-4 inline-flex items-center focus:outline-none" :class="!btnDisable? 'opacity-100 cursor-pointer':'opacity-20'" :disabled="btnDisable">
                        <Icon icon="ic:baseline-data-saver-on" width="24"/>
                        <span class=" ml-2">Submit & Register</span>
                    </button>
                </form>
            </div>
            <div v-if="createdUser" >
                <div class=" relative">
                    <div class=" flex justify-center">
                        <nuxt-img src="/home/images/register_complete.png" class=" img-register-complete rounded-lg" />
                    </div>
                    <div class="-mt-12 flex justify-center">
                        <span>
                            <Icon icon="bi:envelope-check" class=" text-teal-700 " width="90"/>
                        </span>
                    </div>
                </div>
                <div class=" mt-6 text-center">
                    <div class=" text-xl md:text-2xl font-medium text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-700 to-purple-500">
                        Account created successfully
                    </div>
                    <div class="text-base md:text-lg ">
                        Please check your mail box and verify your email.
                    </div>
                    <div class="text-base md:text-lg mt-3">
                        <button @click="gotoSignin()" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Go to Sign in
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="h-16"></div>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';
    import { createToast } from 'mosha-vue-toastify';
    import { useAuthStore } from '@/stores/authen';
    import axios from "axios";
    const auth = useAuthStore();
    const { $swal } = useNuxtApp();
    const baseUrl = ref('');
    const createdUser = ref(false);
    const btnDisable = ref(true);
    const isLoading = ref(true);
    const formUser = ref({
        prefix_th: "",
        prefix_en: "",
        firstname_th: "",
        firstname_en: "",
        lastname_th: "",
        lastname_en: "",
        cate_user: null,
        department: "",
        agencies: "",
        name_company: "",
        email: "",
        phone: "",
        address: ""
    });
    const password = ref('');
    const confirm_password = ref('');
    const has_number = ref(false);
    const has_lowercase = ref(false);
    const has_uppercase = ref(false);
    const has_special = ref(false);
    const passwordStreng = ref(false);
    const agree = ref(false);

    const categoryUsers = reactive([
        {id: 1, cate_name: "Lecturer (อาจารย์)", cate_code: "group1"},
        {id: 2, cate_name: "Researcher (นักวิจัย)", cate_code: "group2"},
        {id: 3, cate_name: "Research assistant (ผู้ช่วยวิจัย)", cate_code: "group3"},
        {id: 4, cate_name: "Scientist (นักวิทยาศาสตร์)", cate_code: "group4"},
        {id: 5, cate_name: "Technician (ช่างเทคนิค)", cate_code: "group5"},
        {id: 6, cate_name: "Undergraduate students (นิสิตชั้นปริญญาตรี)", cate_code: "group6"},
        {id: 7, cate_name: "Master's degree students (นิสิตชั้นปริญญาโท)", cate_code: "group7"},
        {id: 8, cate_name: "Doctoral student (นิสิตชั้นปริญญาเอก)", cate_code: "group8"},
        {id: 9, cate_name: "Postdoctoral researcher (นักวิจัยหลังปริญญาเอก)", cate_code: "group9"},
        {id: 10, cate_name: "External users (ผู้ใช้งานภายนอกคณะฯ)", cate_code: "group10"},
        
    ]);

    onMounted(() => {
        baseUrl.value = useRuntimeConfig().public.apiBaseDefault;
        createdUser.value = false;
        resetForm();
        getToken();
    });

    const getToken = async () => {
        await axios.get(baseUrl.value + "sanctum/csrf-cookie");
    }

    function resetForm() {
        formUser.value.prefix_th = "";
        formUser.value.prefix_en = "";
        formUser.value.firstname_th = "";
        formUser.value.firstname_en = "";
        formUser.value.lastname_th = "";
        formUser.value.lastname_en = "";
        formUser.value.cate_user = null;
        formUser.value.department = "";
        formUser.value.agencies = "";
        formUser.value.name_company = "";
        formUser.value.email = "";
        formUser.value.phone = "";
        formUser.value.address = "";
        password.value = "";
        confirm_password.value = "";
    }

    function agreeTerm() {
        agree.value = !agree.value;
        if(password.value.length > 7 && confirm_password.value.length > 7 && has_number.value && has_lowercase.value && has_uppercase.value && has_special.value){
            if(agree.value == true) {
                btnDisable.value = false;
            } else {
                btnDisable.value = true;
            }
        }
        else{
            btnDisable.value = true;
        }
    }

    function registerHandle(){
        if(!formUser.value.prefix_th){
            alertMessage("warning","The information is incorrect","Please specify prefix name (Thai).");
            return false;
        }
        if(!formUser.value.prefix_en){
            alertMessage("warning","The information is incorrect","Please specify prefix name (English).");
            return false;
        }
        if(!formUser.value.firstname_th){
            alertMessage("warning","The information is incorrect","Please specify first name (Thai).");
            return false;
        }
        if(!formUser.value.lastname_th){
            alertMessage("warning","The information is incorrect","Please specify last name (Thai).");
            return false;
        }
        if(!formUser.value.firstname_en){
            alertMessage("warning","The information is incorrect","Please specify first name (English).");
            return false;
        }
        if(!formUser.value.lastname_en){
            alertMessage("warning","The information is incorrect","Please specify last name (English).");
            return false;
        }
        if(!formUser.value.cate_user){
            alertMessage("warning","The information is incorrect","Please choose a user type.");
            return false;
        }
        if(!formUser.value.department){
            alertMessage("warning","The information is incorrect","Please pecify department information.");
            return false;
        }
        if(!formUser.value.agencies){
            alertMessage("warning","The information is incorrect","Please specify faculty information.");
            return false;
        }
        if(!formUser.value.name_company){
            alertMessage("warning","The information is incorrect","Please specify company information.");
            return false;
        }
        if(!formUser.value.phone){
            alertMessage("warning","The information is incorrect","Please specify phone number.");
            return false;
        }
        if(!formUser.value.email){
            alertMessage("warning","The information is incorrect","Please specify email address.");
            return false;
        }
        if(!formUser.value.address){
            alertMessage("warning","The information is incorrect","Please specify the address for issuing the receipt.");
            return false;
        }
        if(!password.value){
            alertMessage("warning","The information is incorrect","Please specify password at least 8 characters long.");
            return false;
        }
        if(password.value.length < 8){
            alertMessage("warning","The information is incorrect","Please specify password at least 8 characters long.");
            return false;
        }
        if(!confirm_password.value){
            alertMessage("warning","The information is incorrect","Please specify confirm password at least 8 characters long.");
            return false;
        }
        if(password.value != confirm_password.value){
            alertMessage("warning","The information is incorrect","Confirm passwords do not match.");
            return false;
        }
        
        const formData = new FormData();
        formData.append('prefix_th', formUser.value.prefix_th);
        formData.append('prefix_en', formUser.value.prefix_en);
        formData.append('firstname_th', formUser.value.firstname_th);
        formData.append('lastname_th', formUser.value.lastname_th);
        formData.append('firstname_en', formUser.value.firstname_en);
        formData.append('lastname_en', formUser.value.lastname_en);
        formData.append('cate_user', formUser.value.cate_user);
        formData.append('department', formUser.value.department);
        formData.append('agencies', formUser.value.agencies);
        formData.append('name_company', formUser.value.name_company);
        formData.append('phone', formUser.value.phone);
        formData.append('email', formUser.value.email);
        formData.append('address', formUser.value.address);
        formData.append('password', password.value);

        isLoading.value = true;
        btnDisable.value = false;

        auth.registerUser(formData).then((response) => {
            if(response.success){
                toast('Created account successfully','สร้างบัญชีผู้ใช้งานระบบสำเร็จ','success');
                isLoading.value = false;
                btnDisable.value = true;
                resetForm();
                setTimeout(() => {
                    createdUser.value = true;
                }, 3000);
            }else{
                isLoading.value = false;
                btnDisable.value = true;
                toast('Something went wrong',response.data.message,'danger');
            }
        });
    }

    function gotoSignin() {
        resetForm();
        createdUser.value = false;
    }

    function showIndecator(){
        if(password.value.length > 0){
            passwordStreng.value = true;
            password_check();
        }
        else{
            passwordStreng.value = false;
        }
    }

    function password_check() {
        has_number.value = /\d/.test(password.value);
        has_lowercase.value = /[a-z]/.test(password.value);
        has_uppercase.value = /[A-Z]/.test(password.value);
        has_special.value = /[!@#\$%\^\&*\)\(+=._-]/.test(password.value);
    }

    function toast(title, des, typeIcon) {
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

    function alertMessage(alertType, alertTitle, alertInfoMessage) {
        $swal.fire({
            icon: alertType,
            title: alertTitle,
            text: alertInfoMessage,
            confirmButtonColor: "#b2bb1e",
            confirmButtonText: "Back to edit data",
        });
    }

    useHead({
        charset: 'utf-8',
        title: '[REGISTER] CENTRAL-LAB AGRO | SCIENTIFIC INSTRUMENT BOOKING SYSTEM | FACULTY OF AGRO-INDUSTRY, KASETSART UNIVERSITY',
        meta: [
            { name: 'description', content: 'ระบบจองเครื่องมือวิทยาศาสตร์ คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์ | SIBS'}
        ],
    });

    definePageMeta({
        name: 'register-page',
        layout: 'homelayout'
    });
</script>

<style scoped>
.img-register-complete {
    max-width: 50%;
}

/* SELECT styles */
select {
  appearance: none;
  border: 1px solid #eee;
  outline: 0;
  font: inherit;
  width: 100%;
  height: 46px;
  padding: 0 4em 0 1em;
  background: url(http://cdn.onlinewebfonts.com/svg/img_295694.svg) no-repeat
      right 0.8em center / 0.8em,
    #fff;
  color: black;
  border-radius: 0.5em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

select option {
    color: #006664;
    font-family: "BaiJamjuree",sans-serif;
    font-size: 15px;
}

select:focus {
  outline: none;
}

select::-ms-expand {
  display: none;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>