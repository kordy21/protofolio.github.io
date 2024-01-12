<template>
    <div class="container pt-28" id="home">
        <div class="flex xl:flex-row flex-col xl:gap-5 xl:h-[620px] xl:flex-nowrap ">
            <div class="xl:basis-1/4 ">
                <HomeInfo />
            </div>
            <div class="xl:basis-2/4">
                <HomeImg />
            </div>
            <div class="xl:basis-1/4 ">
                <HomeLogos />
            </div>
        </div>
    </div>
</template>

<script>
    import HomeInfo from "./HomeInfo.vue"
    import HomeImg from "./HomeImg.vue"
    import HomeLogos from "./HomeLogos.vue"
    export default {
        components: { HomeInfo ,HomeImg,HomeLogos},
    }
</script>
<style scoped>
    
</style>