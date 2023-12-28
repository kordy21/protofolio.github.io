<script setup>
import Navigation from "./components/Navigation/Navigation.vue";

// const toggleDark = useToggle(isDark)

</script>

<template >
  <div class=" bg-white dark:bg-slate-800 dark:text-white xx">
    <Navigation />
  </div>
</template>
  
<style >
.xx{
  height: 150vh;
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
