<template>
    <nav class="menu">
    <div class="menu_elem">
        <img  class="bg img_hidden" src="/public/img/lineblack.png" alt="">
            <img class="top img_hidden" src="/public/img/lineorange.png" alt="">

        <a href="" class="menu_link">Каталог</a>
        <div class="menu_img">
            
        </div>
   

    </div>
    <div class="menu_elem">
        <a href="" class="menu_link">Авторы</a>

    </div>
    <div class="menu_elem">
        <a href="" class="menu_link">Новинки</a>

    </div>
    <div class="menu_elem">
        <img class="img_hidden" src="/public/img/sale.jpg" alt="">
        <a href="" class="menu_link">Скидки</a>
        
    </div>

    <div class="menu_elem">
        <a href="" class="menu_link">Партнёрам</a>
        
    </div>


    <div class="menu_elem">
        <a href="" class="menu_link">Мы</a>
   
    </div>

</nav>

</template>
<style>
.menu_link{
    font-size: 14px;
    color: #1C294DCC;
    text-decoration: none;
    
}
.menu
{
    display: flex;
    gap: 25px;
    margin: 20px 0px;
    
}
.menu_elem
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
@media (max-width:740px){

.menu_link,
.img_hidden{
    display: none;

    }
   

}
</style>