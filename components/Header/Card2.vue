<template>
    <section class="products-section_hidden">
        
        <div class="cards-container">
           
                <div class="main_card">
                    
                     
                      
                    <div class="tittle_green">Новинка</div>
                    
                  
                
    
                    <img class="main_book" src="/public/img/book3.png" alt="book" />
                    <span class="gray_text gray_padding">Корпоративное право</span>
                    <span class="name_book">
                     Договор коммерческой концессии (франчайзинг). Граж...
                    </span>
                    <span class="gray_text">Майфат А.В.</span>
                    <span class="price">372 ₽</span>
                    <div class="card_line">

                    <div class="card_star"><img src="/public/img/Star.png" alt="">
                      4.9</div>
                    
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
      gap: 20px;
      overflow-x: auto;
      
    }
    
    .main_card {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background-color: #FFFFFF;
      width: 100%;
  height: auto;
  min-height: 460px;
      padding: 22px 20px;
      border-radius: 5px;
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
    .tittle_green{
     position: absolute;
      box-sizing: border-box;
      background-color:#dbefe5;
      border-radius: 5px;
      width: 70px;
      height: 25px;
      font-size: 12px;
      color:#3DC47E;
    
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
    
    .main_book {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
    }
    
    .gray_text {
      color: #1C294D80;
      font-size: 12px;
      margin: 0;
    }
    
    .name_book {
      font-size: 14px;
      font-weight: 500;
      color: #1C294D;
    }
    
    .price {
      font-weight: 700;
      font-size: 18px;
      color: #1C294D;
    }
    
    .batton_bascet {
      width: 146px;
      height: 40px;
      background-color: #FFFFFF;
      border-radius: 5px;
      color: #1C294D;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 25px;
      box-shadow: none;
      cursor: pointer;
      border: 1px solid #1C294D;

    }
    
    .batton_bascet:hover {
      background-color: #ff7a00;
      color: white;
    }
    
    .batton_flag {
      width: 40px;
      height: 40px;
      background-color: #FFFFFF;
      border-radius: 5px;
      display: flex;
      align-items: center;
      
      padding: 10px 15px;
      cursor: pointer;
      border: 1px solid #1C294D;
     
    }
    
    .batton_flag:hover {
      background-color: #ff7a00;
    }
    
    .batton_line {
      display: flex;
      align-items: center;
      padding-top: 12px;
    }
    @media (max-width: 740px) {
      .cards-container{
      gap: 0;
    }
    }
    </style>
    