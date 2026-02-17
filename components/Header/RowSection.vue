<template>
    <div class="row_section">
      <div class="section">
        <div class="section_content">
          <img src="/public/img/clock.png" alt="clock" class="icon" />
          <div class="section_text">
            <span class="section_name">Быстрая доставка</span>
            <p class="gray_text">Доставим бесплатно <br>от 2000 ₽ по всей России</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_content">
          <img src="/public/img/card.png" alt="clock" class="icon" />
          <div class="text">
            <span class="section_name">Безопасная оплата</span>
            <p class="gray_text">Плати безопасно и легко<br> онлайн на нашем сайте.</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_content">
          <img src="/public/img/bigstar.png" alt="clock" class="icon" />
          <div class="text">
            <span class="section_name">Бонусная программа</span>
            <p class="gray_text">Дополнительная скидка <br>15% при регистрации</p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_content">
          <img src="/public/img/purple.png" alt="clock" class="icon" />
          <div class="text">
            <span class="section_name">Большой выбор</span>
            <p class="gray_text">Ежегодно выходит в свет<br> более 100 книг</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .row_section{
    display: flex;
gap: 30px;
    align-items: center;
    margin-bottom: 30px;
  }
  .section {
    width: 263px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 42px 20px; /* отступы по дизайну */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .section_content {
    display: flex;
    align-items: center;
    gap: 15px; 
  }
  

  
  .section_text{
    position: relative;
    right: 25px;
    width: 153px;
    height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .section_name {
    font-size: 16px;
    font-weight: 700;
    color: #1C294D;
    margin-bottom: 5px; /* отступ между заголовком и описанием */
  }
  
  .gray_text {
    font-size: 12px;
    color: #1C294D80;
    margin: 0;
    line-height: 1.2;
  }
  /* Адаптив */
@media (max-width: 740px) {
    .row_section{
        flex-direction: column;
    }
    .section {
    width: 355px;
    height: 170px;

  }
}

  </style>
  