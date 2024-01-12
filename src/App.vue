<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import Home from "./components/Home/Home.vue";

// const toggleDark = useToggle(isDark)

</script>

<template >
  <div class=" bg-white dark:bg-slate-800 dark:text-white ">
    <Navigation />
    <Home />
  </div>
</template>
  
<style >
  *{
    scroll-behavior: smooth;  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
/* .theme-light{
  height: 150vh;
  background-color:var(--bg-light) ;
  color:var(--text-black) ;
}
.theme-dark{
  height: 150vh;
  background-color:var(--bg-dark) ;
  color:var(--text-white) ;
} */
/* 

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
