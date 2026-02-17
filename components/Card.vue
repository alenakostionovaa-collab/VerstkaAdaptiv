<template>
  <section class="products-section">
      
      <div class="cards-container">
      
              <div class="main_card">
                  
                   
                    
                  <div class="tittle">Бестселлер</div>
                  
                  <div class="times">1+1=3</div>
              
  
                  <img class="main_book" src="/public/img/book2.jpg" alt="book" />
                  <span class="gray_text gray_padding">Корпоративное право</span>
                  <span class="name_book">
                    Инвестирование: способы, риски,
                    субъекты : монография
                  </span>
                  <span class="gray_text">Майфат А.В.</span>
                  <span class="price">4 450 ₽</span>
                  <div class="card_line">

                  <div class="card_star">
                    <img src="/public/img/Star.png" alt="">
                    4.9

                  </div>
                  
                  <div class="card_like"><img src="/public/img/likee.png" alt=""></div>
                  </div>
             

                  <div class="batton_line">

                    <button class="batton_bascet">
                      <img src="/public/img/orangebascet.png" alt="" />
                      В корзину
                    </button>
                    <button class="batton_flag">
                      <img src="/public/img/flag.png" alt="" />
                    </button>
                  </div>
              </div>
     
      </div>
          

          <!-- Можно добавить еще карточек сюда -->
      
  </section>
  </template>
  
  <style>
  * {
box-sizing: border-box;
}

  .full-width-line{

  width: 100vw;
  height: 1px;
  background-color: #E5E5E5;

  /* компенсируем центрирование main */
  margin-left: calc(-50vw + 50%);


}
  .section-title{
      background-color: #FFFFFF;
      width: 100%;
      
  }
  .cards-container {
    display: flex;
    justify-content: flex-start;
    
    overflow-x: auto;
   
  }
  
  .main_card {
    position: relative;
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 8px;
background-color: #FFFFFF;
width: 100%;
min-height: 460px;
padding: 22px 20px;
border-radius: 5px;
  }
  .name_book {
font-size: 14px;
overflow: hidden;

-webkit-box-orient: vertical;
}
  .times {
   position: absolute;
    box-sizing: border-box;
    background-color:#FFEEEE;
    border-radius: 5px;
    width: 54px;
    height: 25px;
    font-size: 12px;
    top:60px;
    color: #FF4F52;
   
    padding: 5px 10px;
   
  }
.card_star{
  width: 52px;
  height: 25px;
  box-sizing: border-box;
    background-color:#f7edd5;
    border-radius: 5px;
    color: #FBC02D;
    font-size: 12px;
    padding: 5px 10px;

}
.card_like{
  width: 144px;
  height: 25px;
  box-sizing: border-box;
    background-color:#c2c8ea;
    border-radius: 5px;
   
    font-size: 12px;
    padding: 5px 10px;
}
  .tittle{
   position: absolute;
    box-sizing: border-box;
    background-color:#e0d9ed;
    border-radius: 5px;
    width: 86px;
    height: 25px;
    font-size: 12px;
    color: #bea2f2;
  
    padding: 5px ;

  }


  .card_line{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }


  
  .main_tittle {
    display: flex;
    justify-content: space-between;
  }
  .batton_line {
display: flex;
gap: 8px;
}
.batton_bascet {
max-width: 146px;
max-height: 40px;

flex: 1;
min-width: 0;
}

.batton_flag {
flex: 0 0 40px;
}
  
  .main_book {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  </style>
  