<script setup>

import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
</script>

<template >
<navbar></navbar>
  <div>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style scoped>
</style>
