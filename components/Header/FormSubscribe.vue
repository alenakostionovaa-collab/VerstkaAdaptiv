<template>
  <form action="" class="subscribe-form">
    <div class="subscribe-form__container">
      <img class="subscribe-form__icon" src="/public/img/miniline.png" alt="">
      <span class="subscribe-form__text">Скидка 200 ₽ при подписке на рассылку Издательства</span>
    </div>
    <input class="subscribe-form__input" type="email" placeholder="Введите ваш Email">
    <button class="subscribe-form__button subscribe-form__button_subscribe">
      Подписаться
    </button>
  </form>
</template>

<style>
/* ===== БАЗОВЫЕ СТИЛИ ===== */
.subscribe-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 1140px;
  height: 105px;
  background-color: #0288D1;
  border-radius: 5px;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}

.subscribe-form__container {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.subscribe-form__icon {
  position: absolute;
  right: 350px;
  z-index: 1;
}

.subscribe-form__text {
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  z-index: 2;
  position: relative;
}

.subscribe-form__input {
  width: 418px;
  height: 40px;
  border: 1px solid #DFE0E1;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: border-box;
}

.subscribe-form__button {
  width: 137px;
  height: 40px;
  color: white;
  background-color: #0288D1;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  flex-shrink: 0;
}


/* ===== АДАПТИВ ===== */
@media (max-width: 740px) {
  .subscribe-form {
    flex-direction: column;
    width: 355px;
    height: auto;
    padding: 20px 10px;
    gap: 15px;
    text-align: center;
  }

  .subscribe-form__container {
    justify-content: center;
    align-items: center;
  }

  .subscribe-form__icon {
    position: absolute;
    right: 220px; /* оставлено как в оригинале */
    top: 0;
    z-index: 1;
    max-width: 50px;
  }

  .subscribe-form__text {
    font-size: 16px;
  }

  .subscribe-form__input,
  .subscribe-form__button {
    width: 100%;
    height: 40px;
  }
}
</style>
