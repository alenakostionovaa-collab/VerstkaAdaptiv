<template>
  <section class="products">
    <div class="products__cards">
      <div class="product-card">
        <div class="product-card__badge product-card__badge--bestseller">Бестселлер</div>
        <div class="product-card__label product-card__label--promo">1+1=3</div>

        <img src="/public/img/book2.jpg" alt="book" class="product-card__image" />
        <span class="product-card__category">Корпоративное право</span>
        <span class="product-card__title">
          Инвестирование: способы, риски,
          субъекты : монография
        </span>
        <span class="product-card__author">Майфат А.В.</span>
        <span class="product-card__price">4 450 ₽</span>

        <div class="product-card__info-line">
          <div class="product-card__rating">
            <img src="/public/img/Star.png" alt="star" />
            4.9
          </div>
          <div class="product-card__like">
            <img src="/public/img/likee.png" alt="like" />
          </div>
        </div>

        <div class="product-card__actions">
          <button class="product-card__btn product-card__btn--basket">
            <img src="/public/img/orangebascet.png" alt="basket" />
            В корзину
          </button>
          <button class="product-card__btn product-card__btn--flag">
            <img src="/public/img/flag.png" alt="flag" />
          </button>
        </div>
      </div>

      <div class="products__card">
        
        <div class="products__badge products__badge--new">
          Новинка
        </div>

        <img class="products__image" src="/public/img/book3.png" alt="book" />

        <span class="products__category">
          Корпоративное право
        </span>

        <span class="products__title">
          Договор коммерческой концессии (франчайзинг). Граж...
        </span>

        <span class="products__author">
          Майфат А.В.
        </span>

        <span class="products__price">
          372 ₽
        </span>

        <div class="products__meta">
          <div class="products__rating">
            <img src="/public/img/Star.png" alt="">
            4.9
          </div>
          
          <div class="products__like">
            <img src="/public/img/likee.png" alt="">
          </div>
        </div>

        <div class="products__actions">
          <button class="products__button products__button--basket">
            <img src="/public/img/orangebascet.png" alt="">
            В корзину
          </button>

          <button class="products__button products__button--flag">
            <img src="/public/img/flag.png" alt="">
          </button>
        </div>

      </div>

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

      <div class="product-card">
        <div class="product-card__badge product-card__badge--bestseller">Бестселлер</div>
        <div class="product-card__label product-card__label--promo">1+1=3</div>

        <img src="/public/img/book2.jpg" alt="book" class="product-card__image" />
        <span class="product-card__category">Корпоративное право</span>
        <span class="product-card__title">
          Инвестирование: способы, риски,
          субъекты : монография
        </span>
        <span class="product-card__author">Майфат А.В.</span>
        <span class="product-card__price">4 450 ₽</span>

        <div class="product-card__info-line">
          <div class="product-card__rating">
            <img src="/public/img/Star.png" alt="star" />
            4.9
          </div>
          <div class="product-card__like">
            <img src="/public/img/likee.png" alt="like" />
          </div>
        </div>

        <div class="product-card__actions">
          <button class="product-card__btn product-card__btn--basket">
            <img src="/public/img/orangebascet.png" alt="basket" />
            В корзину
          </button>
          <button class="product-card__btn product-card__btn--flag">
            <img src="/public/img/flag.png" alt="flag" />
          </button>
        </div>
      </div>

    </div>


  </section>
</template>

<style scoped>
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

* {
  box-sizing: border-box;
}

/* ===== БЛОК ===== */

.products {
  width: 100%;
}

.products--hidden {
  display: none;
}

/* ===== КОНТЕЙНЕР ===== */

.products__container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  overflow-x: auto;
}

/* ===== КАРТОЧКА ===== */

.products__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #FFFFFF;
  width: 100%;
  min-height: 460px;
  padding: 22px 20px;
  border-radius: 5px;
}

/* ===== БЕЙДЖ ===== */

.products__badge {
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 10px;
}

.products__badge--new {
  background-color: #dbefe5;
  color: #3DC47E;
}

/* ===== ИЗОБРАЖЕНИЕ ===== */

.products__image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

/* ===== ТЕКСТ ===== */

.products__category {
  color: #1C294D80;
  font-size: 12px;
}

.products__title {
  font-size: 14px;
  font-weight: 500;
  color: #1C294D;
}

.products__author {
  color: #1C294D80;
  font-size: 12px;
}

.products__price {
  font-weight: 700;
  font-size: 18px;
  color: #1C294D;
}

/* ===== МЕТА (РЕЙТИНГ + ЛАЙК) ===== */

.products__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products__rating {
  background-color: #f7edd5;
  border-radius: 5px;
  color: #FBC02D;
  font-size: 12px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.products__like {
  background-color: #c2c8ea;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
}

/* ===== КНОПКИ ===== */

.products__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
}

.products__button {
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #1C294D;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* кнопка корзины */
.products__button--basket {
  width: 146px;
  height: 40px;
  font-size: 14px;
  justify-content: space-between;
  padding: 10px 20px;
}

.products__button--basket:hover {
  background-color: #ff7a00;
  color: white;
}

/* кнопка флага */
.products__button--flag {
  width: 40px;
  height: 40px;
  padding: 10px;
}

.products__button--flag:hover {
  background-color: #ff7a00;
}

/* ===== АДАПТИВ ===== */

@media (max-width: 740px) {
  .products__container {
    gap: 0;
  }
}



.products__cards {
  display: flex;
  gap: 16px;
  overflow-x: auto;
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  width: 100%;
  min-width: 280px;
  min-height: 460px;
  padding: 22px 20px;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Бейджи */
.product-card__badge {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: #e0d9ed;
  color: #bea2f2;
}

.product-card__badge--bestseller {
  background-color: #e0d9ed;
  color: #bea2f2;
}

.product-card__label {
  position: absolute;
  top: 60px;
  left: 20px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #ffeeee;
  color: #ff4f52;
}

.product-card__label--promo {
  background-color: #ffeeee;
  color: #ff4f52;
}

/* Картинка */
.product-card__image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

/* Текстовые элементы */
.product-card__category {
  font-size: 12px;
  color: #1c294d80;
}

.product-card__title {
  font-size: 14px;
  font-weight: 600;
  color: #1c294d;
  overflow: hidden;
  display: -webkit-box;

  -webkit-box-orient: vertical;
}

.product-card__author {
  font-size: 12px;
  color: #1c294d80;
}

.product-card__price {
  font-size: 18px;
  font-weight: 700;
  color: #1c294d;
}

/* Инфо линия */
.product-card__info-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #fbc02d;
  background-color: #f7edd5;
  padding: 5px 10px;
  border-radius: 5px;
}

.product-card__like {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  background-color: #c2c8ea;
  padding: 5px 10px;
  border-radius: 5px;
}

/* Кнопки */
.product-card__actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.product-card__btn {
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #1c294d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
  transition: background-color 0.3s, color 0.3s;
}

.product-card__btn--basket {
  flex: 1;
}

.product-card__btn--basket:hover {
  background-color: #ff7a00;
  color: #fff;
}

.product-card__btn--flag {
  width: 40px;
}

.product-card__btn--flag:hover {
  background-color: #ff7a00;
}
</style>