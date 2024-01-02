<script>
import { ref } from 'vue'
import { useDark } from '@vueuse/core'
import SlickNavigation from './SlickNavigation.vue'
import NavBullets from './NavBullets.vue'
import NavSocial from './NavSocial.vue'

const isDark = useDark()

    export default {
        components: { SlickNavigation ,NavBullets ,NavSocial},
        setup(){
            
            const slicknavActive =ref(false)
            

            const toggleClick=()=>{
                slicknavActive.value=!slicknavActive.value
            }
            
            return{isDark,slicknavActive,toggleClick}
        }
    }
</script>
<template>
    <nav class="px-10 flex flex-row h-3 py-10 font-bold items-center bg-transparent bg-opacity-55 fixed top-0 w-full">
        <div class="basis-2/4 md:basis-2/5 ">
            <div class="nav-logo">
                <span class="text-2xl mr-6">MOHAM<span class="text-color">ED</span></span>
                <img src="../../assets/images/Mohamed.jpeg" alt="Profile Photo">
            </div>
        </div>
        <div class="basis-3/4 hidden lg:block ">
            <ul class="links flex gap-6 justify-center text-gray-600 dark:text-white">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">WORK</a>
                </li>
                <li>
                    <a href="#">SKILLS</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
        <div class="basis-2/4 md:basis-2/5">
            <div class="text-right">
                <div class=" justify-end items-center  hidden  lg:flex">
                    <input class="darkCheckBox " type="checkbox" v-model="isDark">
                    <p v-show="isDark" class="text-sm ml-3  mb-1">Light</p>
                    <p v-show="!isDark" class="text-sm ml-3 mb-1">Dark</p>
                </div>
                <svg ref="bar" @click="toggleClick" class="p-2 ml-auto bg-blue-500 rounded-full inline-block lg:hidden" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path class="" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                <!-- <slick-nav/> -->
            </div>
        </div>
    </nav>
    <SlickNavigation @close-nav="toggleClick" :slicknavActive="slicknavActive"/>
    <NavBullets />
    <NavSocial />
</template>


<style>
    .text-color{
        color:var(--main-color)
    }
    .nav-logo span{
        line-height: 50px;
    }
    .nav-logo img{
        height: 40px;
        display: inline-block;
        width: 40px;
        border-radius: 50%;
        top: 0;
        transform: rotate(0);
        transition: 1s ease-in-out;
    }
    .nav-logo img:hover{
        transform: rotate(360deg);
    }
    .links li:hover{
        color:var(--main-color)
    }
    .darkCheckBox {
        position: relative;
        width: 44px;
        height: 22px;
        -webkit-appearance:none ;
        appearance: none;
        background-color: var(--main-color);
        outline: none;
        border-radius: 2rem;
        cursor: pointer;
        box-shadow: inset 0 0 5px rgb(0 0 0 /50%);
    }
    .darkCheckBox::before{
        content: "";
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        top:0;
        left: 0;
        transition:0.5s ;
    }
    .darkCheckBox:checked::before{
        transform: translateX(100%);
        background-color: #fff;
    }
    /*
    .iconTheme img {
        animation: sunShine 3s infinite ease-in-out;
    }
    @keyframes  {
        0% {
            transform: rotate( 0deg );
        }
        100% {
            transform: rotate( -360deg );
        }
    }; */

</style>