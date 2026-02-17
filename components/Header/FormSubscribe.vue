<template>
    <form action="" class="form_subscribe">
      <div class="form_container">
        <img class="orange" src="/public/img/miniline.png" alt="">
        <span class="white_text">Скидка 200 ₽ при подписке на рассылку Издательства</span>
      </div>
      <input class="form_input" type="email" placeholder="Введите ваш Email">
      <button class="form_batton subscribe_button">
        Подписаться
      </button>
    </form>
  </template>
  
  <style>
  /* ===== БАЗОВЫЕ СТИЛИ ===== */
  .form_subscribe {
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
  
  .form_container {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  
  .orange {
    position: absolute;
    right: 350px;
    z-index: 1;
  }
  
  .white_text {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    z-index: 2;
    position: relative;
  }
  
  .form_input {
    width: 418px;
    height: 40px;
    border: 1px solid #DFE0E1;
    border-radius: 5px;
    font-size: 14px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  .form_batton {
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
    .form_blue{display: flex;
        justify-content: center;
    }
    .form_subscribe {
      flex-direction: column;
      width: 355px;
      height: auto;
      padding: 20px 10px;
      gap: 15px;
      text-align: center;
    }
  
    .form_container {
      justify-content: center;
      align-items: center;
    }
  
    .orange {
      position: absolute;
      right: 10px;
      top: 10px;
      max-width: 50px;
    }
  
    .white_text {
      font-size: 16px;
    }
    .orange {
    position: absolute;
    right: 220px;
    top: 0;
    z-index: 1;
  }
  
    .form_input,
    .form_batton {
      width: 100%;
      height: 40px;
    }
  }
  </style>
  