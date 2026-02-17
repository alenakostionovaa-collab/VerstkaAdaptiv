<template>
  <div class="footer">
    
    <div class="footer__mobile footer__hidden-desktop">
      <img src="/public/img/colorsettings.png"
           alt="settings"
           class="footer__settings footer__settings_mobile">
      <div class="footer__line footer__hidden-desktop"></div>
    </div>

    <form class="footer__form">
      <div class="footer__container">
        
        <img class="footer__logo"
             src="/public/img/logo.png"
             alt="logo">

        <div class="footer__input-wrapper">
          <input
            class="footer__input"
            type="mail"
            placeholder="Введите свой Email и получите скидку"
          >
          <button class="footer__button footer__button_submit">
            <img src="/public/img/tg.png" alt="" class="footer__icon">
          </button>
        </div>

        <img src="/public/img/settings.png"
             alt="settings"
             class="footer__settings footer__settings_desktop">
      </div>
    </form>

  </div>
</template>

<style>
/* ===== BLOCK ===== */

.footer {
  width: 100%;
}

/* ===== FORM ===== */

.footer__form {
  background-color: #EEEEEE;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
}

.footer__container {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===== INPUT ===== */

.footer__input-wrapper {
  position: relative;
}

.footer__input {
  width: 443px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #DFE0E1;
  border-radius: 5px;
  font-size: 14px;
}

.footer__button {
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

/* ===== LINE ===== */

.footer__line {
  background-color: #282F3626;
  margin: auto;
  width: 1140px;
  height: 1px;
}

/* ===== HIDDEN ON DESKTOP ===== */

.footer__hidden-desktop {
  display: none;
 
}

/* ===== MOBILE ===== */

@media (max-width:740px){

  .footer__container {
    justify-content: space-around;
  }

  .footer__mobile {
    background-color: #EEEEEE;
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
  }

  .footer__form {
    height: 80px;
  }

  .footer__hidden-desktop {
    display: block; /* показываем на телефоне */
    display: flex;
    justify-content: center;
  }

  .footer__line {
    width: 90%;
  }

  .footer__settings_mobile {
    width: 150px;
    height: 40px;
    margin: auto;
  }

  .footer__input {
    width: 270px;
    height: 40px;
  }

  .footer__settings_desktop {
    display: none;
  }
}
</style>
