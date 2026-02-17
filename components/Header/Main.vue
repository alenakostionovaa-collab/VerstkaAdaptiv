<script setup lang="ts">
import Card from "../Card.vue";
import Card2 from "./Card2.vue";
import Card3 from "./Card3.vue";
import FormSubscribe from "./FormSubscribe.vue";
import Go from "./SliderBook.vue";
import NewsCard from "./NewsCard.vue";




import RowSection from "./RowSection.vue";

import SliderBook from "./SliderBook.vue";

</script>

<template>
	<main class="main">
		<div class="main_container">
			<!-- Баннер -->
			<div class="big_banner">
				<div class="banner">
					<button class="banner_btn banner_btn--left">‹</button>
					<div class="banner_content">
						<img src="/public/img/2=3.png" alt="2=3" />
						<img
							src="/public/img/на все книги.png"
							alt=""
							class="banner_text"
						/>
					</div>
					<button class="banner_btn banner_btn--right">›</button>
					<img
						class="banner_dots"
						src="/public/img/Black.png"
						alt=""
					/>
				</div>

				<!-- Скидки -->
				<div class="sale">
					<div class="sale_rectangle purple_rectangl">
						<img
							class="orange_line"
							src="/public/img/orangeline.png"
							alt=""
						/>
						<span class="sale_text">
							Бесплатно доставим <br />
							ваш заказ при <br />
							покупке от 2000 ₽
						</span>
						<img
							class="man_img"
							src="/public/img/man1.png"
							alt=""
						/>
					</div>

					<div class="sale_rectangle pink_rectangl">
						<span class="sale_text pink_text">
							Скидка<br />
							при регистрации<br />
							до 15%
						</span>
						<img
							class="bluline"
							src="/public/img/bluline.png"
							alt=""
						/>
						<img src="/public/img/man2.png" alt="" />
					</div>
				</div>
			</div>

			<!-- Большая карточка книги -->
			<div class="main_big_rectangle">
				<div class="main_tittle">
					<span class="text">Книга дня</span>
					<div class="time">08:56:31</div>
				</div>
				<img class="main_book" src="/public/img/book1.png" alt="book" />
				<span class="gray_text gray_padding">Корпоративное право</span>
				<span class="name_book">
					Инвестирование: способы, риски,<br />
					субъекты : монография
				</span>
				<span class="gray_text">Майфат А.В.</span>
				<span class="price">4 450 ₽</span>
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

		<!-- Линия -->
		

		<!-- Новые поступления -->
		 
		 <SliderBook/>

		
		<!-- Показать все книги раздела -->
		
		<section class="section_footer">
			<p class="section-name name_footer">Показать все книги раздела</p>
</section>
		 <div class="form_blue">
	<FormSubscribe/>
</div>




<RowSection/>
<SliderBook/>

		
		<!-- Показать все книги раздела -->
		
		<section class="section_footer">
			<p class="section-name name_footer">Показать все книги раздела</p></section>
<NewsCard/>
<NewsCard1/>
		 <section class="section_footer">
			<p class="section-name name_footer">Показать все новости</p>
		
		</section>
		
	
	</main>
	
</template>


<style>
@font-face {
	font-family: "Roboto";
	src: url("/public/fonts/roboto-v50-latin-regular.woff2") format("woff2");
}
body {
	font-family: "Roboto", sans-serif;
	background-color: #f9f9fa;
}

.main {
	
	background-color: #f9f9fa;
	width: 100%;
	max-width: 1140px; 
	box-sizing: border-box;
	margin: 0 auto; 
	margin-top: 30px;

}

.text {
	color: #1c294d;
	font-size: 16px;
}
.name_book
 {
	color: #1c294d;
	font-size: 14px;
	font-weight: 500px;
}

.name_heder{
	color: #1c294d;
	font-size: 20px;
	font-weight: 700px;
}
.name_footer{
	color: #1c294d;
	font-size: 14px;
	font-weight: 500px;
}
.name_news{
	color: #1c294d;
	font-size: 20px;
	font-weight: 700px;
}
.price {
	
	color: #1c294d;
	font-size: 18px;
}
.gray_padding {
	padding-top: 7px;
}

/* Баннер */
.banner {
	position: relative;
	background-color: #ccff90;
	width: 750px;
	height: 350px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.banner_content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}
.banner_btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: #ffffff;
	width: 30px;
	height: 30px;
	color: #1c294d;
	font-size: 14px;
	border: none;
	border-radius: 5px;
}
.banner_btn--left {
	left: 20px;
}
.banner_btn--right {
	right: 20px;
}
.banner_dots {
	position: absolute;
	bottom: 20px;
}

/* Главная сетка */
.main_container {
	display: grid;
	grid-template-columns: 750px 360px;
	grid-template-rows: auto auto;
	gap: 30px;
}

/* Большая карточка книги */
.main_big_rectangle {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 8px;
	background-color: #ffffff;
	width: 360px;
	height: 520px;
	padding: 22px 20px;
	border-radius: 5px;
}
.time {
	box-sizing: border-box;
	background-color: #ff7a0026;
	border-radius: 5px;
	width: 68px;
	height: 25px;
	font-size: 12px;
	color: #ff7a00;
	display: flex;
	padding: 5px 10px;
	align-items: center;
}
.main_tittle {
	display: flex;
	justify-content: space-between;
}
.section_tittle {
	box-sizing: border-box;
	display: flex;
	align-items: center;              
	justify-content: space-between;
	margin-top: 5px;
margin-bottom: 5px;
	background-color: #ffffff;       
	height: 61px;                   
	padding: 18px 25px;            
	max-width: 1140px;

	border-top-left-radius: 5px;    


	
}
.section_footer{
	box-sizing: border-box;
	display: flex;
justify-content: center; 
align-items: center;   
margin-bottom: 30px;         
margin-top: 5px;


	background-color: #ffffff;       
	height: 41px;                   
	padding: 18px 25px;            
	width: 100%;
	border-top-left-radius: 5px;    
}
.main_book {
	display: block;
	margin: 0 auto;
}
.gray_text {
	color: #1c294d80;
	font-size: 12px;
	margin: 0;
}
.batton_bascet {
	width: 146px;
	height: 40px;
	background-color: #ffffff;
	border-radius: 5px;
	color: #1c294d;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 25px;
	box-shadow: none;
}
.batton_flag {
	width: 40px;
	height: 40px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
}
.batton_line {
	display: flex;
	align-items: center;
	gap: 5px;
}

/* Pink и Purple блоки */
.sale {
	display: flex;
	gap: 30px;
}
.sale_rectangle {
	position: relative;
	width: 360px;
	height: 140px;
	padding: 32px 25px;
	border-radius: 5px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
}
.purple_rectangl {
	background-color: #6d378f;
	margin-top: 30px;
}
.pink_rectangl {
	background-color: #ffd8ef;
	color: #1c294dcc;
	margin-top: 30px;
}
.sale_text {
	position: relative;
	z-index: 2;
	font-size: 20px;
	line-height: 1.3;
	color: #ffffff;
}
.pink_text {
	position: relative;
	z-index: 2;
	font-size: 20px;
	line-height: 1.3;
	color: #1c294dcc;
}
.man_img {
	position: relative;
	z-index: 2;
}
.bluline,
.orange_line {
	position: absolute;
	left: 20px;
	top: 30px;
	z-index: 1;
}

/* Карточки новых поступлений */
.cards-row {
	display: flex;
	gap: 5px;
	margin: 5px;

}

/* Полная линия */
.full-width-line {
	

	height: 1px;
	background-color: #e5e5e5;
	width: 100%;


	
}

.form_blue{
	margin-bottom: 30px;
}
/* Адаптив */
@media (max-width: 740px) {
	.main {
		padding: 11px 10px;
	}

	/* Сетка */
	.main_container {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
  .main_big_rectangle {
    width: 100%;
    max-width: 355px;
    height: auto;
  }
	/* Баннер */
	.banner {
		width: 355px;
		height: 175px;
	}

	/* Скидочные блоки */
	.sale {
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}
	.purple_rectangl,
	.pink_rectangl {
		width: 100%;
		max-width: 355px;
		height: 140px;
		padding: 10px;
		margin-top: none;
	}
	.cards-row {
    justify-content: center;
	max-width: 1170px;
  }
}
</style>
