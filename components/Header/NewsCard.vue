<script setup lang="ts">
</script>

<template>
  <!-- RADIO -->
  <input class="none" type="radio" name="slider" id="slide1" checked>
  <input class="none" type="radio" name="slider" id="slide2">
  <input class="none" type="radio" name="slider" id="slide3">

  <!-- SECTION TITLE -->
  <section class="section_tittle">
    <p class="section-name name_news">Новости</p>

    <div class="title-image-wrapper">
      <img src="/public/img/twins.jpg" alt="button_slider">

      <!-- стрелки -->
      <div class="arrows">
        
  <label for="slide2" class="next s1">›</label> <!-- Вперед: с 1 на 2 -->
  <label for="slide3" class="prev s1">‹</label> <!-- Назад: с 1 на 3 -->

  <label for="slide1" class="prev s2">‹</label> <!-- Назад: с 2 на 1 -->
  <label for="slide3" class="next s2">›</label> <!-- Вперед: с 2 на 3 -->

 
  <label for="slide2" class="prev s3">‹</label> <!-- Назад: с 3 на 2 -->
  <label for="slide1" class="next s3">›</label> <!-- Вперед: с 3 на 1 -->
      </div>
    </div>
  </section>

  <!-- СЛАЙДЕР -->
  <section class="news-section">
    <div class="slider">
      <div class="slides">
        <div class="news_card">
          <div class="image-wrapper">
            <img class="main_book" src="/public/img/news1.png" alt="Новость 1"/>
          </div>
          <span class="gray_text">16 июня 2020</span>
          <h3 class="name_book">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="new_gray_text">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приурочено...
          </p>
          <button class="button_red" type="button">Читать</button>
        </div>

        <div class="news_card">
          <div class="image-wrapper">
            <img class="main_book" src="/public/img/news2.png" alt="Новость 2"/>
          </div>
          <span class="gray_text">16 июня 2020</span>
          <h3 class="name_book">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="new_gray_text">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроч...
          </p>
          <button class="button_red" type="button">Читать</button>
        </div>

        <div class="news_card">
          <div class="image-wrapper">
            <img class="main_book" src="/public/img/news3.png" alt="Новость 3"/>
          </div>
          <span class="gray_text">16 июня 2020</span>
          <h3 class="name_book">Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в России</h3>
          <p class="new_gray_text">
            18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приурочено...
          </p>
          <button class="button_red" type="button">Читать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.none {
  display: none;
}

.news-section {
  flex-direction: column;
  display: flex;
  justify-content: center;
}

/* ===== SECTION TITLE ===== */
.section_tittle {
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

.title-image-wrapper {
  position: relative;
  display: inline-block;
}

.title-image-wrapper img {
  display: block;
}

/* ===== SLIDER ===== */
.slider {
  width: 100%;
  max-width: 377px;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

/* ===== NEWS CARD ===== */
.news_card {
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

/* Ограничение по высоте и обрезка картинки */
.image-wrapper {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
}

.image-wrapper img.main_book {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}


.name_book {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #1C294D;
  margin: 0;

}

.new_gray_text {
 
  font-size: 12px;
  line-height: 20px;
  color: #4B5674;
  margin: 0;

  flex-grow: 1;
}

/* Кнопка с обводкой и hover */
.button_red {
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

.button_red:hover {
  background-color: #1C294D;
  color: #fff;
}

/* ===== TRANSFORM ===== */
#slide1:checked ~ .news-section .slider .slides {
  transform: translateX(0%);
}

#slide2:checked ~ .news-section .slider .slides {
  transform: translateX(-100%);
}

#slide3:checked ~ .news-section .slider .slides {
  transform: translateX(-200%);
}

/* ===== ARROWS ===== */
.arrows label {
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

.prev { left: 5px; }
.next { right: 5px; }

/* показываем стрелки */
#slide1:checked ~ .section_tittle .s1,
#slide2:checked ~ .section_tittle .s2,
#slide3:checked ~ .section_tittle .s3 {
  display: block;
}

/* ===== DESKTOP ===== */
@media (min-width: 769px) {
  .slider {
    max-width: 100%;
    overflow: visible;
  }

  .slides {
    transform: none !important;
  }

  .news_card {
    min-width: auto;
    flex: 1;
  }

  .arrows {
    display: none;
  }

  .section_tittle {
    max-width: 100%;
  }
}
</style>
