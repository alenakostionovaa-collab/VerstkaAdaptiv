<script setup lang="ts">
import FooterForm from '../FooterForm.vue';
</script>

<template>
  <FooterForm />
  <footer class="footer">
    <div class="footer_container">

      <!-- Покупателям -->
      <div class="footer_col">
        <input type="checkbox" id="col1" class="footer_toggle" />
        <label for="col1" class="footer_title mobile_title">Покупателям</label>
        <ul class="footer_list">
          <li><a href="#">Наша почта</a></li>
          <li><a href="#">Авторам</a></li>
          <li><a href="#">Оплата и доставка</a></li>
          <li><a href="#">Вопросы и ответы</a></li>
        </ul>
        <div class="full_line"></div>
      </div>

      <!-- Издательство -->
      <div class="footer_col">
        <input type="checkbox" id="col2" class="footer_toggle" />
        <label for="col2" class="footer_title mobile_title">Издательство</label>
        <ul class="footer_list">
          <li><a href="#">О компании</a></li>
          <li><a href="#">Авторам</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div class="full_line"></div>
      </div>

      <!-- Книги -->
      <div class="footer_col">
        <input type="checkbox" id="col3" class="footer_toggle" />
        <label for="col3" class="footer_title mobile_title">Книги</label>
        <ul class="footer_list">
          <li><a href="#">Все категории</a></li>
          <li><a href="#">Бестселлеры</a></li>
          <li><a href="#">Новинки</a></li>
          <li><a href="#">Скидки и акции</a></li>
        </ul>
        <div class="full_line"></div>
      </div>

      <!-- Прайс-лист -->
      <div class="footer_col">
        <input type="checkbox" id="col4" class="footer_toggle" />
        <label for="col4" class="footer_title mobile_title">Прайс-лист</label>

        <div class="file_section">
          <img src="/public/img/File.png" id="img" alt="file icon" />
          <div class="file_png">
            <a href="#" class="download_link">Скачать прайс-лист</a>
            <ul class="footer_list">
              <li><a class="gray_text_littl" href="#">PDF, 12 Mb</a></li>
            </ul>
          </div>
        </div>

        <div class="full_line"></div>

        <div class="new_text">
          <a  href="#" class="privacy_link link_bottom hidden">Политика конфиденциальности</a>
          <a href="#" class="privacy_link hidden">Договор оферты</a>
        </div>
        <div class="full_line"></div>
      </div>

      <!-- Контакты -->
      <div class="footer_col">
        <h4 class="footer_title">Телефон и Email</h4>
        <div class="footer_contacts">
          <div class="contact_item">
            <img src="/public/img/phone.png" alt="phone" />
            <span>8 (968) 660-65-50</span>
          </div>
          <div id="hidden_desctop" class="full_line"></div>
          <div class="contact_item">
            <img src="/public/img/mail.png" alt="mail" />
            <span>market@estatut.ru</span>
          </div>
        </div>
      </div>

    </div>

    <div class="full_line_phone"></div>

    <div class="footer_bottom col_bottom">
      <div class="bottom_col">
        <a href="#">© 2020 Издательство «Статут»</a>
      </div>
      <div id="hidden_desctop" class="full_line"></div>
      <div class="bottom_col">
        <img src="/public/img/citi.png" alt="city icon" />
        <a href="#">ул. Лобачевского, 92, корп. 2 119454, г. Москва</a>
      </div>
      <div class="bottom_col none_n">
        <a class="none_n" href="#">Политика конфиденциальности</a>
      </div>
      <div class="bottom_col none_n">
        <a  class="none_n"  href="#">Договор оферты</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: white;
  color: #282F36CC;
  padding-top: 50px;
}

.footer_container {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  padding: 0 20px 40px 20px;
  align-items: start;
}

.footer_col {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
}
#hidden_desctop{
  display: none;
}
.footer_title {
  color: #1C294D;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
}

.footer_list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer_col,
.footer_col_ {
  align-self: start;
}

.footer_list li {
  margin-bottom: 10px;
}
.full_line{
  display: none;
}
.footer_list a {
  color: #282F36CC;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.footer_list a:hover {
  color: #282F36CC;
}

.gray_text_littl {
  color: #282F3680;
  font-size: 12px;
}

.footer_contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact_item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.bottom_col a {
  text-decoration: none;
  font-size: 14px;
  color: #282F36CC;
}

.footer_bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  padding: 20px;
  background-color: white;
  font-size: 13px;
  color: #282F36CC;
  gap: 10px;
}

.full_line,
.full_line_phone {
  background-color: #282F3626;
  margin: auto;
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.footer_toggle {
  display: none;
}
.hidden{
  margin: 20px 10px; 
  display: none;
}

a {
  text-decoration: none;
  color: #282F36CC;
  font-size: 14px;
}

#img {
  width: 30px;
  box-sizing: border-box;
}

/* Адаптив */
@media (max-width: 768px) {
  #hidden_desctop{
  display: block;
}
.full_line{
  display:   block;
}
.none_n{
  display: none;
}
  .footer_container {
    width: 100%;
    max-width: 375px;
    grid-template-columns: 1fr;
    gap: 0;
  }

  .footer_title {
    font-weight: 400;
    margin-bottom: 0;
    padding-bottom: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer_list,
  .file_section {
    display: none;
  }

  /* Показываем список и файл при активации чекбокса */
  .footer_toggle:checked + .mobile_title + .file_section,
  .footer_toggle:checked + .mobile_title + .file_section + .footer_list {
    display: block;
    margin-top: 10px;
  }

  .footer_toggle:checked + .mobile_title + .footer_list {
    display: block;
  }

  .mobile_title::after {
    content: '∨';
    font-size: 18px;
    margin-left: 8px;
    user-select: none;
  }

  .footer_toggle:checked + .mobile_title::after {
    content: '^';
    color: #2A3D4880;
  }

  .full_line {
    display: block;
    margin: 16px 0;
    width: 100%;
  }
.bottom_col{
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 30px;
}
  .bottom_col.none {
    display: none;
  }

  .footer_bottom {
    grid-template-columns: 1fr;
    padding: 10px 0 0 0;
  
  }

  .link_bottom {
    display: block;
    margin-bottom: 20px;
  }
  .hidden{
    display: block;
  }
  .privacy_link {
    font-size: 14px;
    color: #2A3D4880;
    text-decoration: none;
    margin-bottom: 6px;
    cursor: pointer;
  }
  .footer_container {

  padding: 0 ;
}
}
</style>
