<template>
  
     
<div class="footer_img_hedden">
        <img src="/public/img/colorsettings.png" id="colorsettings_hidden" alt="settings">
        <div class="full_line"> </div>
</div>
<form class="footer_form">
      <div class="footer_container">
        <img class="footer_img" src="/public/img/logo.png" alt="logo">
       
        <div class="iput_center">
          <input
            class="footer_input"
            type="mail"
            placeholder="Введите свой Email и получите скидку"
          >
          <button class="footer_batton submit_button">
            <img src="/public/img/tg.png" alt="">
          </button>
        </div>
  
        <img src="/public/img/settings.png" id="settings_hidden" alt="settings">
  
      </div>
   
    </form>
  </template>
  <style>
.footer_form {
 
    background-color: #EEEEEE;
    width: 100%;
    height: 105px;
    display: flex;
    align-items: center;
  }

  .footer_container {

    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  

  .footer_input {
    width: 443px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #DFE0E1;
    border-radius: 5px;
    font-size: 14px;
  }
  

  .iput_center {
    position: relative;
  }

  .footer_batton {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 40px;
    border: none;
    background-color: #FF5C00;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #colorsettings_hidden{
    display: none;
  }
  .full_line{
    background-color:#282F3626 ;
    margin: auto;
    width: 1140px;
    height: 1px;
    display: none;}

    .footer_img_hedden {
  display: none;
}
  
  @media (max-width:740px){
    .footer_container{
        display: flex;
   justify-content: space-around;
    }
    .footer_img_hedden{
      background-color: #EEEEEE;
      flex-direction: column;
      display: flex;
      justify-content: center;
      
      width: 100%;
      height: 80px;
    }
    .footer_form {
   
    height: 80px;
  }
  .full_line{
    display: block;
    width: 90%;
  }
  #colorsettings_hidden{
  width: 150px;
  height: 40px;
    display: block;
    margin: auto;
 
  }
.footer_input{
    width: 270px;
    height: 40px;
}
#settings_hidden{
  display: none;
}
  }
</style>