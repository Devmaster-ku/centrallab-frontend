<template>
    <div class="mt-5">
        <div class=" container mx-auto">
            <div class=" py-4">
                <div class=" flex">
                    <div class=" img-postnews"></div>
                    <span class=" font-black text-base md:text-xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-700 to-purple-500 ml-2 mt-2">
                        Publicize information
                    </span>
                </div>
            </div>
            <div class=" bg-white-50 grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div v-for="(post, index) in posts" ::key="index"
                    class="my-1 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300">
                    <div class="cursor-pointer">
                        <figure>
                            <img
                                :src="post.image + '?auto=format&fit=crop&w=400&q=50'"
                                class="rounded-t h-60 w-full object-top" />
                                <hr>
                            <figcaption class="p-4">
                                <p
                                    class="text-base mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                                    :x-text="post.title">
                                    {{ post.title }}
                                    <span> UPDATE</span>
                                </p>
                                <small
                                    class="leading-5 text-gray-500 dark:text-gray-400 text-description"
                                    :x-text="post.description">
                                    {{ post.description }}
                                </small>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <!-- <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" ></span> -->
    </div>
</template>

<script setup>
    import { Icon } from '@iconify/vue';

    const posts = reactive([
        {
            image:
                "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
            title: "การเปิดให้บริการ Central Lab",
            description:
                "หน่วยเครื่องมือห้องปฏิบัติการวิจัยกลาง (Central Lab : Faculty of Agro-Industry, Kasetsart University.) มีการปรับขยายเวลาการเปิดให้บริการจากเวลาปฏิบัติงานปกติ เพื่อเพิ่มเวลาการเข้าใช้บริการและตอบสนองในด้านความสะดวกรวมถึงเปิดโอกาสและทางเลือกใช้บริการประเภทต่าง ๆ ภายในห้องปฏิบัติการให้ครอบคลุมมากยิ่งขึ้น",
        },
        {
            image:
                "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
            title: "Coffee Roasting Basics: Developing Flavour by Roasting",
            description:
                "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
        },
    ])

    function password_check() {
    }

    definePageMeta({
        name: 'homepage',
        layout: 'homelayout'
    });
</script>

<style scoped>
    .text-description {
        font-size: 15px;
    }
</style>