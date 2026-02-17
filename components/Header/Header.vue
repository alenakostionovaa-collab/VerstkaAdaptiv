<script setup lang="ts">
import Search from './Search.vue';

</script>




<template>
  <header class="header">
    <!-- Верхняя часть -->
    <div class="header_hidden">
      <div class="header_wrapper">
        <div class="header_right">
          <div class="header-item">
            <img src="/public/img/citi.png" alt="" />
            <a href="#" class="header_right_link">Москва</a>
            
          </div>
          <div class="header-item">
            <img src="/public/img/delivery.jpg" alt="" />
            <a href="#" class="header_right_link">Доставка и оплата</a>
          </div>
          <div class="header-item">
            <img src="/public/img/adress.jpg" alt="" />
            <a href="#" class="header_right_link">Адрес и часы работы</a>
          </div>
        </div>

        <div class="header_left">
          <div class="header-item">
            <img src="/public/img/mail.png" alt="" />
            <a href="#" class="header_left_link">market@estatut.ru</a>
          </div>
          <div class="header-item">
            <img src="/public/img/phone.png" alt="" />
            <a href="#" class="header_left_link">8 (968) 660-65-50</a>
            <img src="/public/img/sign.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Серая линия -->
    <div class="nav_line"></div>

    <!-- Нижняя часть с поиском и ссылками -->
    <div class="nav_line_flex">
      <form class="header__search_search">
        <div class="logo">  
            <div class="hidden">
    <img class="bg_hidden" src="/public/img/lineblack.png" alt="" />
    <img class="line_hidden" src="/public/img/lineorange.png" alt="" />
  </div>
  <!-- Логотип всегда видимый -->
  <img src="/public/img/logo.jpg" id="logo_vew" alt="logo" />

 

  <!-- Компонент поиска -->
  <Search />

  <!-- Ссылки справа -->
  <div class="header_search_link">
    <div class="header-item_nav mobile-hide">
      <img src="/public/img/flag.png" alt="" />
      <a href="#" class="header_right_link">Отложено</a>
    </div>

    <div class="header-item_nav mobile-hide">
      <img src="/public/img/smail.jpg" alt="" />
      <a href="#" class="header_right_link">Уведомления</a>
    </div>

    <div class="header-item_nav">
      <img src="/public/img/busket.png" alt="" />
      <img src="/public/img/oval.png" class="top_circl" alt="" />
      <img src="/public/img/10.png" class="top_num" alt="" />
      <a href="#" id="hidden" class="header_right_link">Корзина</a>
    </div>
  </div>
</div>

      </form>

      <NavLink />
    </div>
  </header>
</template>

<style>
/* Основной хедер */
body{
  margin: 0%;
}
.header {
  width: 100%;
  background: #ffffff;
  z-index: 10;
}

.header_right,
.header_left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 270px;
  box-sizing: border-box;
  
}

.header-item {
  display: flex;
  align-items: center;
  gap: 8px;
  
}

.header_right_link,
.header_left_link,
.menu_link {
  font-size: 14px;
  color: #1c294dcc;
  text-decoration: none;
  
}

/* скрытые элементы для мобильной версии */
.hidden {
  display: none;
}

/* ссылки справа (мобильные скрытия) */
.header-item_nav,
.header-item_nav_hidden {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Нижняя линия */
.nav_line {
  width: 100%;
  height: 1px;
  background-color: #dfe0e1;
}

.logo {
  display: flex;
  gap: 16px;
}

.nav_line_flex {
  padding: 20px 270px;
}

.header__search_search {
 
  display: flex;
  align-items: center;
  justify-content: space-between; /* распределяем */
  width: 100%;


}

.header_search_link {
  display: flex;
  align-items: center;
  gap: 30px;
 
}
.top {
    position: relative;
    
    right: 19px;
  }
/* Иконки на корзину */
.top_circl {
  position: relative;
  bottom: 4.5px;
  right: 13px;
}

.top_num {
  position: relative;
  bottom: 4.5px;
  right: 30px;
}
.line_hidden{
    position: relative;
    top:10.6px;
}
.bg_hidden{
    position: relative;
    top: 17px;
}
/* === Мобильная версия === */
@media (max-width: 740px) {
  /* Скрываем элементы для мобильного экрана */
  .header_hidden,
  .mobile-hide {
    display: none !important;
   
  }
.main{
  margin: 0 auto; 
}
  .header {
    width: 100%;
    height: 70px;
  }

  .header_wrapper {
    padding: 270px 20px;
    gap: 15px;
  }

  .nav_line_flex {
    padding: 25px 20px;
  }

  .hidden {
    display: block;
  }

  .header_right,
  .header_left,
  .header-item_nav {
    gap: 10px;
  }
  .top_num {
  position: relative;
  bottom: 4.5px;
  right: 35px;
}
#hidden{
    display: none;
}
}
</style>
