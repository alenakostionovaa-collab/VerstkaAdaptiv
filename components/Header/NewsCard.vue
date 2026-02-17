<script setup lang="ts">
</script>

<template>
  <!-- RADIO -->
  <input class="slider__radio slider__radio_hidden" type="radio" name="slider" id="slide1" checked>
  <input class="slider__radio slider__radio_hidden" type="radio" name="slider" id="slide2">
  <input class="slider__radio slider__radio_hidden" type="radio" name="slider" id="slide3">

  <!-- SECTION TITLE -->
  <section class="news-slider__title">
    <p class="news-slider__name">Новости</p>

    <div class="news-slider__image-wrapper">
      <img src="/public/img/twins.jpg" alt="button_slider" class="news-slider__image">

      <!-- arrows -->
      <div class="news-slider__arrows">
        <label for="slide2" class="news-slider__arrow news-slider__arrow_next s1">›</label>
        <label for="slide3" class="news-slider__arrow news-slider__arrow_prev s1">‹</label>

        <label for="slide1" class="news-slider__arrow news-slider__arrow_prev s2">‹</label>
        <label for="slide3" class="news-slider__arrow news-slider__arrow_next s2">›</label>

        <label for="slide2" class="news-slider__arrow news-slider__arrow_prev s3">‹</label>
        <label for="slide1" class="news-slider__arrow news-slider__arrow_next s3">›</label>
      </div>
    </div>
  </section>

  <!-- SLIDER -->
  <section class="news-slider">
    <div class="news-slider__container">
      <div class="news-slider__slides">
        <div class="news-slider__card">
          <div class="news-slider__image-container">
            <img class="news-slider__book-image" src="/public/img/news1.png" alt="Новость 1"/>
          </div>
          <span class="news-slider__date">16 июня 2020</span>
          <h3 class="news-slider__title-text">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="news-slider__description">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приурочено...
          </p>
          <button class="news-slider__button" type="button">Читать</button>
        </div>

        <div class="news-slider__card">
          <div class="news-slider__image-container">
            <img class="news-slider__book-image" src="/public/img/news2.png" alt="Новость 2"/>
          </div>
          <span class="news-slider__date">16 июня 2020</span>
          <h3 class="news-slider__title-text">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="news-slider__description">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч...
          </p>
          <button class="news-slider__button" type="button">Читать</button>
        </div>

        <div class="news-slider__card">
          <div class="news-slider__image-container">
            <img class="news-slider__book-image" src="/public/img/news3.png" alt="Новость 3"/>
          </div>
          <span class="news-slider__date">16 июня 2020</span>
          <h3 class="news-slider__title-text">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="news-slider__description">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приурочено...
          </p>
          <button class="news-slider__button" type="button">Читать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* скрытые радио-кнопки */
.slider__radio_hidden {
  display: none;
}

/* SECTION TITLE */
.news-slider__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  height: 61px;
  padding: 18px 25px;
  max-width: 1140px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.news-slider__name {
  font-size: 16px;
  font-weight: 700;
  color: #1C294D;
}

.news-slider__image-wrapper {
  position: relative;
  display: inline-block;
}

.news-slider__image {
  display: block;
}

/* arrows */
.news-slider__arrows {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
}

.news-slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  cursor: pointer;
  background: rgba(255,255,255,0.9);
  padding: 4px 10px;
  display: none;
  user-select: none;
}

.news-slider__arrow_prev { left: 5px; }
.news-slider__arrow_next { right: 5px; }

/* показываем стрелки по слайду */
#slide1:checked ~ .news-slider__title .s1,
#slide2:checked ~ .news-slider__title .s2,
#slide3:checked ~ .news-slider__title .s3 {
  display: block;
}

/* SLIDER */
.news-slider {
  flex-direction: column;
  display: flex;
  justify-content: center;
}

.news-slider__container {
  width: 100%;
  max-width: 377px;
  overflow: hidden;
}

.news-slider__slides {
  display: flex;
  transition: transform 0.5s ease;
}

/* NEWS CARD */
.news-slider__card {
  min-width: 100%;
  flex: 0 0 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(28, 41, 77, 0.1);
  padding: 20px 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Inter', sans-serif;
}

.news-slider__image-container {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
}

.news-slider__book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.news-slider__title-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #1C294D;
  margin: 0;
}

.news-slider__description {
  font-size: 12px;
  line-height: 20px;
  color: #4B5674;
  margin: 0;
  flex-grow: 1;
}

.news-slider__date {
  font-size: 12px;
  color: #4B5674;
}

.news-slider__button {
  align-self: flex-start;
  padding: 8px 24px;
  font-weight: 400;
  font-size: 14px;
  color: #1C294D;
  background: transparent;
  border: 1px solid gray;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease;
  user-select: none;
}

.news-slider__button:hover {
  background-color: #1C294D;
  color: #fff;
}

/* TRANSFORM */
#slide1:checked ~ .news-slider .news-slider__container .news-slider__slides {
  transform: translateX(0%);
}
#slide2:checked ~ .news-slider .news-slider__container .news-slider__slides {
  transform: translateX(-100%);
}
#slide3:checked ~ .news-slider .news-slider__container .news-slider__slides {
  transform: translateX(-200%);
}

/* DESKTOP */
@media (min-width: 769px) {
  .news-slider__container {
    max-width: 100%;
    overflow: visible;
  }

  .news-slider__slides {
    transform: none !important;
  }

  .news-slider__card {
    min-width: auto;
    flex: 1;
  }

  .news-slider__arrows {
    display: none;
  }

  .news-slider__title {
    max-width: 100%;
  }
}
</style>
