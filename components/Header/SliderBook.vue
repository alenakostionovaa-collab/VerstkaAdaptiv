<script setup lang="ts">
import Card from '../Card.vue';
import Card2 from './Card2.vue';
import Card3 from './Card3.vue';

</script>

<template>
  <!-- RADIO (уникальные id для первого слайдера) -->
  <input class="none" type="radio" name="slider1" id="slider1-slide1" checked>
  <input class="none" type="radio" name="slider1" id="slider1-slide2">

  <!-- SECTION TITLE -->
  <section class="section_tittle">
    <p class="section-name name_news">Новые поступления</p>
    <div class="title-image-wrapper">
      <img src="/public/img/twins.jpg" alt="button_slider">
      <div class="arrows">
        <label for="slider1-slide2" class="next s1">›</label>
        <label for="slider1-slide1" class="prev s2">‹</label>
      </div>
    </div>
  </section>

  <!-- СЛАЙДЕР -->
  <section class="news-section">
    <div class="slider">
      <div class="slides">
        <div class="slide-item"><Card/></div>
        <div class="slide-item"><Card2 /></div>
        <div class="slide-item"><Card3 /></div>
        <div class="slide-item"><Card /></div>
      </div>
    </div>
  </section>
</template>

<style>
.none { display: none; }

.news-section { display: flex; justify-content: center; }

.section_tittle { display: flex; align-items: center; justify-content: space-between; background: #fff; height: 61px; padding: 18px 25px; }

.title-image-wrapper { position: relative; }
.title-image-wrapper img { display: block; }

.slider { width: 100%; overflow: hidden; }
.slides { display: flex; transition: transform 0.5s ease; gap: 5px; } /* gap между карточками 5px */

/* Каждая карточка занимает 50% на мобильной версии */
.slide-item { flex: 0 0 calc(50% - 2.5px); box-sizing: border-box; }

/* движение слайдера */
#slider1-slide1:checked ~ .news-section .slides { transform: translateX(0%); }
#slider1-slide2:checked ~ .news-section .slides { transform: translateX(-100%); }

/* стрелки */
.arrows label { position: absolute; top: 50%; transform: translateY(-50%); font-size: 16px; cursor: pointer; background: rgba(255,255,255,0.9); padding: 4px 10px; display: none; }
.prev { left: 5px; }
.next { right: 5px; }
#slider1-slide1:checked ~ .section_tittle .s1 { display: block; }
#slider1-slide2:checked ~ .section_tittle .s2 { display: block; }

/* Десктоп */
@media (min-width: 769px) {
  .slider { overflow: visible; }
  .slides { transform: none !important; gap: 5px; } /* gap между карточками 5px */
  .slide-item { flex: 1; } /* все карточки равные */
  .arrows { display: none; }
}
</style>
