<template>
    <div class="container pt-20" id="home">
        <div class="flex flex-row items-center">
            <div class="basis-1/3">
                <HomeInfo />
            </div>
            <div class="basis-1/3">
                <HomeImg />
            </div>
            <div class="basis-1/3">
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

<style>

</style>