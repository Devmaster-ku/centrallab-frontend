<template>
    <div class=" ">
        <div class=" antialiased  dark-mode:bg-gray-900">
            <HomeNavbar />
            <div class=" max-w-screen-2xl px-2 mx-auto lg:px-6 xl:px-8 content">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        charset: 'utf-8',
        title: 'CENTRAL-LAB AGRO | SCIENTIFIC INSTRUMENT BOOKING SYSTEM | FACULTY OF AGRO-INDUSTRY, KASETSART UNIVERSITY',
        meta: [
            { name: 'description', content: 'ระบบจองเครื่องมือวิทยาศาสตร์ คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์ | SIBS'}
        ],
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'central-lab-agro-app'
        },
        link: [],
        script: []
    });
</script>

<style scoped>
    
</style>