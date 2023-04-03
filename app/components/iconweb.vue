<template>
    <Icon :icon="iconName" :width="iconWidth" />
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
    iconName: String,
    iconWidth: String
})
</script>