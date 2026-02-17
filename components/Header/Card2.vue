<template>
  <section class="products products--hidden">
    <div class="products__container">
      
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

    </div>
  </section>
</template>

    <style>
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

    </style>
    