<template>
  <!-- Хедер подключаем один раз здесь -->
  <Header />

  <!-- Контент каждой страницы -->

    <Main />
    
  <Footer/>

</template>

<script setup>
import Header from '~/components/Header/Header.vue'
import Main from '../components/Header/Main.vue';
import Footer from '../components/Header/Footer.vue';

</script>
