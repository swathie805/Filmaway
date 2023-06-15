<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <img
      id="bg-image"
      src="https://media.istockphoto.com/id/1364376802/vector/glow-modern-background-blur.jpg?s=612x612&w=0&k=20&c=SBOz5Ge_Q_jidQ--q2Cud70BJk8AOcdnWFRT1jh65BQ="
      alt=""
    />
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped>
#bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
