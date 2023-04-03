<template>
    <div class=" mt-5">
        <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class=" flex">
            <Icon icon="fluent:key-reset-20-regular" width="28" class=" text-purple-500" />
            <h1 class="ml-2 text-2xl font-medium text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-700 to-purple-500">Reset Password</h1>
        </div>
            <form action="" class="my-5">
                <div class="flex flex-col space-y-5">
                    <label for="email">
                        <p class="font-bold text-slate-700 text-sm pb-2">Email Address</p>
                        <input id="email" type="email" class="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" autocomplete="off" placeholder="yourmail@email.com">
                    </label>
                    
                    <button class="w-full py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <Icon icon="arcticons:simplelogin" width="32"/>
                        <span>Send Password</span>
                    </button>
                    <div class="my-5">
                        <span class=" text-sm text-pink-700">ข้อมูลรหัสผ่านใหม่สำหรับการลงชื่อเข้าใช้งานของคุณ จะถูกส่งเข้าไปที่อีเมลของท่านที่เคยทำการลงทะเบียนไว้ก่อนหน้านี้</span>
                        <div class="my-1">
                            <span class=" text-sm text-teal-700">New password information for your login. It will be sent to the email address you registered earlier.</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';

    const email = ref('');



    definePageMeta({
        name: 'passwordreset-page',
        layout: 'homelayout'
    });
</script>

<style scoped>

</style>