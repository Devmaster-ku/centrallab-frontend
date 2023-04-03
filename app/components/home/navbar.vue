<template>
    <div id="navbar" class=" w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow">
        <div class="flex flex-col max-w-screen-2xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-6 xl:px-8" >
            <div class="flex flex-row items-center justify-between py-0">
                <a href="/" class="logo text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                    <div class="flex">
                        <span class="app-brand-logo demo">
                            <img src="/home/images/logo-ku-th.png" alt="logo_banner" class=" w-24">
                        </span>
                        <div class=" flex-col">
                            <div class="app-brand-text demo menu-text font-semibold font-nunito ku-color-green mt-[2px]">{{ logo_name }}</div>
                            <div class="border-[0.5px] border-cyan-800 w-full -mt-[5px] mb-[7px]"></div>
                            <div class="agro-name-text agro-color font-NotoSansThai -mt-[12px]">{{ logo_name_dep }}</div>
                        </div>
                    </div>
                </a>
                <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="toggleMenu()">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
                        <path v-if="tgmenu" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        <path v-else fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <nav class="flex-col flex-grow pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row" :class="{'flex': tgmenu, 'hidden': !tgmenu}">
                <nuxt-link to="/" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span class=" ">Home</span>
                </nuxt-link>
                <nuxt-link to="/home/history-booking" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>Booking History</span>
                </nuxt-link>
                <nuxt-link to="/home/manual" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>Manual</span>
                </nuxt-link>
                
                <div class="relative">
                    <button @click="openMenu()" class="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                        <span>Services</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="menuOpen? 'rotate-180':'rotate-0'" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class=" absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right z-50" :class="menuOpen?'':'hide'">
                        <div class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <nuxt-link to="/home/calendar-booking" class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <Icon icon="noto:microscope" width="40"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Booking</p>
                                        <p class="text-sm">Central Lab - AGRO</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/home/borrow-scientific-equipment" class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <Icon icon="game-icons:medical-thermometer" width="40"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Borrow Equipment</p>
                                        <p class="text-sm">Central Lab - AGRO</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/home/deposit-service" class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <Icon icon="emojione-monotone:thermometer" width="40"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Deposit Service</p>
                                        <p class="text-sm">Chemicals/research samples in -18°C cold storage</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/home/disbursement-of-scientific-materials" class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <Icon icon="noto:test-tube" width="40"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Disbursement of Scientific Materials</p>
                                        <p class="text-sm">Science Material</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link to="/home/report-maintenance-scientific-equipment" class=" flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <div class="bg-teal-500 text-white rounded-lg p-3">
                                        <Icon icon="wpf:maintenance" width="40"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold">Notify Tool Repair</p>
                                        <p class="text-sm">Defective Tool</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <nuxt-link to="/home/contact-us" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>Contact Us</span>
                </nuxt-link>
                <nuxt-link to="/home/login" class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>Login</span>
                </nuxt-link>
                <button class="button rounded-lg bg-[#006664] hover:bg-[#228988] px-3 h-8 text-white mx-0 md:mx-2 my-2 md:my-0" @click="registerMode()">
                    <div class=" flex">
                        <Icon icon="ph:user-plus" width="20" class="mt-[2px]"/>
                        <span class="ml-2">Register</span>
                    </div>
                </button>
            </nav>
        </div>
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';

    const tgmenu = ref(false);
    const menuOpen = ref(false);
    const logo_name = ref('CENTRAL-LAB | AGRO');
    const logo_name_dep = ref('FACULTY OF AGRO-INDUSTRY');

    function openMenu(){
        menuOpen.value = !menuOpen.value;
    }
    function toggleMenu(){
        tgmenu.value = !tgmenu.value;
    }
    function registerMode(){
        return navigateTo('/home/register');
    }
    useHead({
        link: [
            { rel: 'stylesheet', href: '/home/css/style.min.css'},
        ],
        script: [
            { src: '/home/js/jquery-3.6.3.min.js', body: true},
            { src: '/home/js/navbar.min.js', body: true},
        ]
    });
</script>

<style scoped>
    .collapse {
        visibility: visible;
    }
    .hide {
        visibility: hidden;
    }
</style>