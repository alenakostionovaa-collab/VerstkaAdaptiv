<template>
  <div class="features">
    <div class="features__item">
      <div class="features__content">
        <img src="/public/img/clock.png" alt="clock" class="features__icon" />
        <div class="features__text">
          <span class="features__title">Быстрая доставка</span>
          <p class="features__description">Доставим бесплатно <br>от 2000 ₽ по всей России</p>
        </div>
      </div>
    </div>

    <div class="features__item">
      <div class="features__content">
        <img src="/public/img/card.png" alt="card" class="features__icon" />
        <div class="features__text">
          <span class="features__title">Безопасная оплата</span>
          <p class="features__description">Плати безопасно и легко<br> онлайн на нашем сайте.</p>
        </div>
      </div>
    </div>

    <div class="features__item">
      <div class="features__content">
        <img src="/public/img/bigstar.png" alt="star" class="features__icon" />
        <div class="features__text">
          <span class="features__title">Бонусная программа</span>
          <p class="features__description">Дополнительная скидка <br>15% при регистрации</p>
        </div>
      </div>
    </div>

    <div class="features__item">
      <div class="features__content">
        <img src="/public/img/purple.png" alt="purple" class="features__icon" />
        <div class="features__text">
          <span class="features__title">Большой выбор</span>
          <p class="features__description">Ежегодно выходит в свет<br> более 100 книг</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Блок features */
.features {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 30px;
}

/* Элемент карточка */
.features__item {
  width: 263px;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 42px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Элемент контент внутри карточки */
.features__content {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Элемент иконка */


/* Элемент текст */
.features__text {
  position: relative;
  right: 25px;
  width: 153px;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Заголовок */
.features__title {
  font-size: 14px;
  font-weight: 700;
  color: #1C294D;
  margin-bottom: 5px;
}

/* Описание */
.features__description {
  font-size: 12px;
  color: #1C294D80;
  margin: 0;
  line-height: 1.2;
}

/* Адаптив */
@media (max-width: 740px) {
  .features {
    flex-direction: column;
  }

  .features__item {
    width: 355px;
    height: 170px;
  }
}
</style>
