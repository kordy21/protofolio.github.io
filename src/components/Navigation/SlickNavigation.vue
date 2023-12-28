<template>
    <div v-show="slicknavActive" class="slick-nav">
        <ul class="links bg-white fixed w-2/3 right-0 lg:hidden h-full ">
                <li class="m-4 flex justify-end"  @click="$emit('close-nav')">
                    <svg @click="closeSlickNav" class="" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </li>
                <li class="m-5">
                    <a href="#">HOME</a>
                </li>
                <li  class="m-5">
                    <a href="#">ABOUT</a>
                </li>
                <li class="m-5">
                    <a href="#">WORK</a>
                </li>
                <li class="m-5">
                    <a href="#">SKILLS</a>
                </li>
                <li class="m-5">
                    <a href="#">CONTACT</a>
                </li>
            </ul>
    </div>
</template>

<script >
    import { defineEmits } from 'vue'
    defineEmits(['close-nav'])
    export default {
        props:['slicknavActive'],
        setup(){
           
        }
    }
</script>

<style>
    
</style>