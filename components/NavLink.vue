<template>
    <nav class="menu">
      <div class="menu__item">
        <img class="menu__img menu__img_hidden" src="/public/img/lineblack.png" alt="">
        <img class="menu__img menu__img_top menu__img_hidden" src="/public/img/lineorange.png" alt="">
        <a href="" class="menu__link">Каталог</a>
        <div class="menu__img-container"></div>
      </div>
  
      <div class="menu__item">
        <a href="" class="menu__link">Авторы</a>
      </div>
  
      <div class="menu__item">
        <a href="" class="menu__link">Новинки</a>
      </div>
  
      <div class="menu__item">
        <img class="menu__img menu__img_hidden" src="/public/img/sale.jpg" alt="">
        <a href="" class="menu__link">Скидки</a>
      </div>
  
      <div class="menu__item">
        <a href="" class="menu__link">Партнёрам</a>
      </div>
  
      <div class="menu__item">
        <a href="" class="menu__link">Мы</a>
      </div>
    </nav>
  </template>
  
  <style>
  .menu {
    display: flex;
    gap: 25px;
    margin: 20px 0;
  }
  
  .menu__item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
  .menu__link {
    font-size: 14px;
    color: #1C294DCC;
    text-decoration: none;
  }
  
  .menu__img_hidden {
    display: inline-block;
  }
.menu__img_top{
    position: relative;
left: -19px;

}

  @media (max-width: 740px) {
    .menu__link,
    .menu__img_hidden {
      display: none;
    }
  }
  </style>
  