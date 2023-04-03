<template>
    <div>
        <label :for="labelId" class="block mb-2 text-sm font-medium dark:text-gray-300" :class="labelColor">{{ labelText }} <span class="text-red-400">*</span></label>
        <input :type="typeInput" :value="modelValue" 
            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            :class="borderInputColor" :id="labelId" :placeholder="placeHolder" autocomplete="off"
            @change="$emit('update:modelValue', $event.target.value)" >
    </div>
</template>

<script setup>
    const props = defineProps({
        labelId: String,
        labelText: String,
        labelColor: String,
        borderInputColor: String,
        placeHolder: String,
        typeInput: String,
        modelValue: String,
    });
</script>