<template>
    <div v-show="slicknavActive" class=" ">
        <ul class="links bg-white fixed z-50 w-2/3 right-0 lg:hidden h-full ">
                <li class="m-4 flex justify-end"  @click="$emit('close-slick-nav')">
                    <svg @click="closeSlickNav" class="" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </li>
                <li class="m-5" v-for="link in linksList" :key="link.index">
                    <a class="uppercase" :href=link.url>{{ link.text }}</a>
                </li>
            </ul>
    </div>
</template>

<script setup>
    import { defineEmits ,defineProps } from 'vue'
    defineEmits(['close-slick-nav'])
    const props = defineProps(['slicknavActive','linksList']);
</script>

<style scoped>
    
</style>