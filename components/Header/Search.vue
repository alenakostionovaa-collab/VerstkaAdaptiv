<template>
    <input class="search__input" type="text" placeholder="Автор, название, ISBN">

<button class="search__button" type="submit">
    <img src="/public/img/search.png" alt="">
    Искать
</button>
</template>
<style>
.search__input {
    width: 573px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #DFE0E1;
    border-radius: 2px;
    font-size: 14px;
}
.search__button {
    width: 123px;
    height: 40px;
    background-color: #FF7A00;
    border: none;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
 
    cursor: pointer;
}

.search__button:hover {
    opacity: 0.9;
}
.header__search_search
{
    display: flex;
    align-items: center;
    
    
     /* ОДИНАКОВОЕ расстояние */
}
.logo img {
    display: block;
}
.search__button
{
    position: relative;
    right: 140px;
    top: 1px;
}

@media (max-width:740px){

    .search__input{
        width: 195px;
        height: 40px;
    }
    .search__button{
        display: none;
    }
  
}
</style>
