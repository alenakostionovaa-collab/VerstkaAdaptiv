<script setup lang="ts">
import Search from './Search.vue';
</script>

<template>
  <header class="header">
    <!-- Верхняя часть -->
    <div class="header__top">
      <div class="header__wrapper">
        <div class="header__right">
          <div class="header__item">
            <img src="/public/img/citi.png" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_right">Москва</a>
          </div>
          <div class="header__item">
            <img src="/public/img/delivery.jpg" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_right">Доставка и оплата</a>
          </div>
          <div class="header__item">
            <img src="/public/img/adress.jpg" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_right">Адрес и часы работы</a>
          </div>
        </div>

        <div class="header__left">
          <div class="header__item">
            <img src="/public/img/mail.png" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_left">market@estatut.ru</a>
          </div>
          <div class="header__item">
            <img src="/public/img/phone.png" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_left">8 (968) 660-65-50</a>
            <img src="/public/img/sign.png" alt="" class="header__icon"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Серая линия -->
    <div class="header__line"></div>

    <!-- Нижняя часть с поиском и ссылками -->
    <div class="header__nav">
      <form class="header__search">
        <div class="header__logo-wrapper">
          <div class="header__logo-hidden">
            <img class="header__line-black" src="/public/img/lineblack.png" alt="" />
            <img class="header__line-orange" src="/public/img/lineorange.png" alt="" />
          </div>
          <img src="/public/img/logo.jpg" id="logo_vew" alt="logo" class="header__logo"/>
        </div>

        <!-- Компонент поиска --> 
        <Search />

        <!-- Ссылки справа -->
        <div class="header__links">
          <div class="header__item header__item_nav mobile-hide">
            <img src="/public/img/flag.png" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_right">Отложено</a>
          </div>

          <div class="header__item header__item_nav mobile-hide">
            <img src="/public/img/smail.jpg" alt="" class="header__icon"/>
            <a href="#" class="header__link header__link_right">Уведомления</a>
          </div>

          <div class="header__item header__item_nav">
            <img src="/public/img/busket.png" alt="" class="header__icon"/>
            <img src="/public/img/oval.png" class="header__cart-circle" alt="" />
            <img src="/public/img/10.png" class="header__cart-number" alt="" />
            <a href="#" id="hidden" class="header__link header__link_right">Корзина</a>
          </div>
        </div>
      </form>

      <NavLink />
    </div>
  </header>
</template>

<style>
/* Сброс */
body {
  margin: 0;
}

/* ===== HEADER ===== */
.header {
  width: 100%;
  background: #ffffff;
  z-index: 10;
}



.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 270px;
  box-sizing: border-box;
}

.header__right,
.header__left {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Элементы */
.header__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__icon {
  display: block;
}

.header__link {
  font-size: 14px;
  color: #1c294dcc;
  text-decoration: none;
}


/* Нижняя линия */
.header__line {
  width: 100%;
  height: 1px;
  background-color: #dfe0e1;
}

/* Нижняя часть с логотипом и поиском */
.header__nav {
  padding: 20px 270px;
}

.header__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header__logo-wrapper {
  display: flex;
  gap: 16px;
}

.header__logo-hidden {
  display: none;
}

.header__logo {
  display: block;
}

.header__links {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Иконки корзины */
.header__cart-circle {
  position: relative;
  bottom: 4.5px;
  right: 13px;
}

.header__cart-number {
  position: relative;
  bottom: 4.5px;
  right: 33px;
}

.header__line-orange {
  position: relative;
left: 10px;
right: 33px;
}

.header__line-black {
  position: relative;
  top: 17px;
}

/* ===== MOBILE ===== */
@media (max-width: 740px) {
  .header__top,
  .mobile-hide {
    display: none !important;
  }

  .header {
    width: 100%;
    height: 70px;
  }

  .header__wrapper {
    padding: 270px 20px;
    gap: 15px;
  }

  .header__nav {
    padding: 25px 20px;
  }

  .header__logo-hidden {
    display: block;
  }
  .header__line-orange {


top: 13px;
left: -14px;
}
  .header__right,
  .header__left,
  .header__item_nav {
    gap: 10px;
  }

  .header__cart-number {
    position: relative;
    bottom: 4.5px;
    right: 35px;
  }

  #hidden {
    display: none;
  }
}
</style>
