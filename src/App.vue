<script setup>

import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
</script>

<template  xmlns="http://www.w3.org/1999/html" >
<navbar></navbar>
  <div>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style scoped>
</style>
