<template>
  <section class="products products--hidden">
    <div class="products__container">

      <div class="product-card">

        <div class="product-card__badge product-card__badge--new">
          Новинка
        </div>

        <img class="product-card__image" src="/public/img/book4.png" alt="book" />

        <span class="product-card__category">
          Корпоративное право
        </span>

        <span class="product-card__title">
          Договор коммерческой концессии (франчайзинг). Граж...
        </span>

        <span class="product-card__author">
          Майфат А.В.
        </span>

        <span class="product-card__price-image">
          <img src="/public/img/prise.png" alt="">
        </span>

        <div class="product-card__meta">

          <div class="product-card__rating">
            <img src="/public/img/Star.png" alt="">
            4.9
          </div>

          <div class="product-card__like">
            <img src="/public/img/likee.png" alt="">
          </div>

        </div>

        <div class="product-card__actions">

          <button class="product-card__button product-card__button--basket">
            <img src="/public/img/orangebascet.png" alt="">
            В корзину
          </button>

          <button class="product-card__button product-card__button--flag">
            <img src="/public/img/flag.png" alt="">
          </button>

        </div>

      </div>

    </div>
  </section>
</template>
    
    <style>
   * {
  box-sizing: border-box;
}

/* ===== PRODUCTS (блок списка) ===== */

.products {
  width: 100%;
}

.products--hidden {
  display: none;
}

.products__container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  overflow-x: auto;
}

/* ===== PRODUCT-CARD (отдельный блок) ===== */

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #FFFFFF;
  width: 100%;
  min-width: 280px;
  min-height: 460px;
  padding: 22px 20px;
  border-radius: 5px;
}

/* Бейдж */

.product-card__badge {
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 10px;
}

.product-card__badge--new {
  background-color: #dbefe5;
  color: #3DC47E;
}

/* Изображение */

.product-card__image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

/* Текст */

.product-card__category {
  color: #1C294D80;
  font-size: 12px;
}

.product-card__title {
  font-size: 14px;
  font-weight: 600;
  color: #1C294D;
}

.product-card__author {
  color: #1C294D80;
  font-size: 12px;
}

.product-card__price-image {
  display: block;
}

/* Рейтинг + лайк */

.product-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f7edd5;
  border-radius: 5px;
  color: #FBC02D;
  font-size: 12px;
  padding: 5px 10px;
}

.product-card__like {
  background-color: #c2c8ea;
  border-radius: 5px;
  padding: 5px 10px;
}

/* Кнопки */

.product-card__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
}

.product-card__button {
  border-radius: 5px;
  border: 1px solid #1C294D;
  background-color: #FFFFFF;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* корзина */

.product-card__button--basket {
  width: 146px;
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.product-card__button--basket:hover {
  background-color: #ff7a00;
  color: white;
}

/* флаг */

.product-card__button--flag {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__button--flag:hover {
  background-color: #ff7a00;
}

/* Адаптив */

@media (max-width: 740px) {
  .product-card {
    min-width: 180px;
    min-height: auto;
  }

  .products__container {
    gap: 0;
  }
}

    </style>
    