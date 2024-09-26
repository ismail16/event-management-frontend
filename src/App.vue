<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer_new.vue";
</script>

<template class="h-full">
  <!-- <Header></Header> -->
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
