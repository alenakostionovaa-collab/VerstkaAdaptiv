<template>
    <form class="search">
      <input class="search__field" type="text" placeholder="Автор, название, ISBN" />
      <button class="search__button" type="submit">
        <img src="/public/img/search.png" alt="Иконка поиска" class="search__icon" />
        Искать
      </button>
    </form>
  </template>
  
  <style scoped>
  /* ==== БЛОК SEARCH ==== */
  .search {
    position: relative; /* Чтобы кнопка позиционировалась относительно формы */
    width: 573px;       /* ширина формы */
    display: flex;
    align-items: center;
  }
  
  /* ==== ЭЛЕМЕНТЫ ==== */
  .search__field {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    padding-right: 130px; /* место под кнопку */
    border: 1px solid #DFE0E1;
    border-radius: 2px;
    font-size: 14px;
    box-sizing: border-box;
  }
  
  .search__button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF7A00;
    border: none;
    border-radius: 0 2px 2px 0;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    transition: opacity 0.3s ease;
  }
  
  .search__button:hover {
    opacity: 0.9;
  }
  
  .search__icon {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    display: block;
  }
  
  /* ==== АДАПТИВ ==== */
  @media (max-width: 740px) {
    .search {
      width: 195px;
    }
  
    .search__field {
      padding-right: 50px; /* меньше места под кнопку на мобильном */
    }
  
    .search__button {
      display: none;
    }
  }
  </style>
  