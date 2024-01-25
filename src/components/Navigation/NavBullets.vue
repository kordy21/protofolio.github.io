<template>
    <div class="nav-bullets">
        <ul class="flex flex-col gap-4">
            <li  class="" v-for="link in linksList.links" :key="link.id">
                <a :href=link.url>
                    <div class="tooltip uppercase">
                        {{link.text}} 
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

    import { useLinkStore } from '@/stores/data';

    const linksList =useLinkStore()

</script>

<style scoped>
    .nav-bullets{
     position: fixed;
     z-index: 25;
     top: 40%;
     right: 0.5rem;
    }
    .nav-bullets ul li{
        display: block;
        position: relative;
    }
    .nav-bullets ul li a{
        display: block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--main-color);
        border-radius: 50%;
    }
    .tooltip{
        background-color: var(--main-color);
        width: 120px;
        color: #fff;
        padding: 8px 10px;
        position: absolute;
        right: 32px;
        top: 10px;
        text-align: center;
        cursor: default;
        pointer-events: none;
        margin-right: 5px;
        border-radius: 15px 0 15px 15px;
        display: none;
    }
    .nav-bullets ul li:hover .tooltip{
        display: block;
    }
    .nav-bullets ul li:hover a{
        background-color: var(--main-color);
    }
</style>@/stores/data