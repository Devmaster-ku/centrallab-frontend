<template>
    <div class=" wraper-screen">
        <div class="max-w-6xl mx-auto sm:px-2 lg:px-2 z-0">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1">
                    <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg relative">
                        <h1 class="text-xl sm:text-xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Contact Informations
                        </h1>
                        <p class="text-normal text-base sm:text-base font-medium text-gray-600 dark:text-gray-400 mt-2">
                            ห้องศูนย์ปฏิบัติการเครื่องมือวิทยาศาสตร์ (Central Lab : Faculty of Agro-Industry) คณะอุตสาหกรรมเกษตร
                            <br>
                            ชั้น 1 อาคารเรียนและปฏิบัติการ (อาคาร 2)
                            คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์
                        </p>
                        <div class=" pt-3 text-pink-600">
                            ให้บริการเครื่องมือในวันและเวลาทำการ จันทร์-ศุกร์ ตั้งแต่เวลา 08.30 - 16.30 น. (เว้นวันหยุดนักขัตฤกษ์)
                        </div>
                        <div class=" pt-1 text-blue-600">
                            Providing tooling services during business days and hours, Monday - Friday, 8:30 AM - 4:30 PM (except public holidays)
                        </div>
                        <div class="py-4">
                            
                        </div>
                        <div class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline z-50">
                            <div class="bg-teal-500 text-white rounded-lg p-3">
                                <Icon icon="mingcute:location-2-line" width="40"/>
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold">คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์</p>
                                <p class="text-sm">ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900</p>
                            </div>
                        </div>
                        <div class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline z-50">
                            <div class="bg-teal-500 text-white rounded-lg p-3">
                                <Icon icon="emojione-v1:mobile-phone" width="40"/>
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold">หมายเลขโทรศัพท์ติดต่อ</p>
                                <p class="text-sm">02-5625000 ต่อ 5210 (ผู้ประสานงาน : : นางสาวแก้วกมล เกตุแก้ว)</p>
                            </div>
                        </div>

                        <div class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline z-50">
                            <div class="bg-teal-500 text-white rounded-lg p-3">
                                <Icon icon="fxemoji:email" width="40"/>
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold">อีเมล</p>
                                <p class="text-sm"> agro@ku.ac.th, agroindustry.ku@gmail.com</p>
                            </div>
                        </div>

                        <div class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline z-50">
                            <div class="bg-teal-500 text-white rounded-lg p-3">
                                <Icon icon="ri:line-fill" width="40"/>
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold">Line OPENCHAT (AI RESEARCH HELPDESK)</p>
                                <p class="text-sm"><a href="https://kasets.art/qAn6iM" target="_blank">https://kasets.art/qAn6iM</a></p>
                            </div>
                        </div>

                        <div class=" absolute right-0 bottom-0 img-contact mr-10 mb-10 hidden md:block z-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';
    definePageMeta({
        name: 'contact-us',
        layout: 'homelayout'
    });
</script>

<style scoped>
    .wraper-screen{
        height: calc(100vh - 100px) !important;
    }
</style>