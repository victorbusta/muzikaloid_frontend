<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AccountIcon from '@/components/icons/IconAccount.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import CrossIcon from '@/components/icons/CrossAccount.vue'

let burgerOpen = false;

const burgerClick = () => {
  burgerOpen = !burgerOpen;
  const burgerElem = document.getElementById('burger');
  const menuElem = document.getElementById('menu');

  if (burgerOpen) {
    burgerElem?.classList.remove('closed');
    burgerElem?.classList.add('opened');
    menuElem?.classList.add('aside-opened');
  } else {
    burgerElem?.classList.remove('opened');
    menuElem?.classList.remove('aside-opened');
    burgerElem?.classList.add('closed');
  }
}

const searchClick = () => 
  document.getElementById('search-input')?.classList.toggle('search-closed');


const clearInput = () => {
  (document.getElementById('search-field') as HTMLInputElement).value = '';
  const crossIcon = document.getElementById('cross-icon');

  crossIcon?.classList.remove('show');
  crossIcon?.classList.add('hide');
}

const handleSearch = (event: any) => {
  const searchText = event.target.value;
  const crossIcon = document.getElementById('cross-icon');

  crossIcon?.classList.remove(searchText === '' ? 'show' : 'hide');
  crossIcon?.classList.add(searchText !== '' ? 'show' : 'hide');

  console.log("Search text:", searchText);
}
</script>

<template>
  <nav>
    <div id="search">
      <SearchIcon id="search-icon" @click="searchClick()"/>
      <div id="search-input" class="search-closed">
        <SearchIcon id="search-icon-vp-small"/>
        <input id="search-field" placeholder="Search" type="text" @input="handleSearch">
        <CrossIcon id="cross-icon" class="hide" @click="clearInput()"/>
      </div>
    </div>
    <RouterLink to="/login">
      <h1>Login / Register</h1>
      <AccountIcon id="login-icon"/>
    </RouterLink>
    <div id="space"></div>
    <div id="burger" class="closed" @click="burgerClick()">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    align-items: center;
  }

  #search {
    display: flex;
    align-items: center;
    background-color: var(--color-foreground);
    border-radius: 8px;
    margin-right: 8px;
    padding: 2px;
    cursor: pointer;
  }

  #search-icon, #search-icon-vp-small {
    width: 16px;
    height: 16px;
  }

  #cross-icon {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  #search-input {
    background-color: var(--color-foreground);
    transition: all .2s ease-in-out;
    display: flex;
    align-items: center;
  }

  #search-input > input {
    background-color: var(--color-foreground);
    color: var(--color-background);
    border: none;
    outline: none;
  }

  a {
    display: flex;
    place-items: center;
    border-radius: 8px;
  }

  a > h1 {
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    display: none;
  }

  #space {
    height: 32px;
    margin: 0 8px;
    width: 1px;
    background-color: var(--color-border);
  }

  #login-icon {
    width: 24px;
    height: 24px;
  }

  #burger {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all ease-in-out .2s;
    cursor: pointer;
  }

  #burger > div {
    position: absolute;
    background-color: var(--color-foreground);
    width: 100%;
    height: 4px;
    transition: all ease-in-out .2s;
  }

  #burger > div:nth-child(2) {
    width: 80%;

  }

  .closed > div:first-child {
    transform: translateY(-8px);
  }

  .closed > div:last-child {
    transform: translateY(8px);
  }

  .opened {
    rotate: 90deg;
  }

  .opened > div:first-child {
    rotate: 45deg;
  }

  .opened > div:nth-child(2) {
    opacity: 0;
  }

  .opened > div:last-child {
    rotate: -45deg;
  }

  @media (max-width: 769px) {
    #search-input {
      position: fixed;
      top: 48px;
      left: 0;
      width: 100%;
    }

    #search-input > input {
      width: calc(100% - 32px);
      height: 24px;
    }

    .search-closed {
      transform: translateX(-100%)
    }
  }

  @media (min-width: 769px) {
    #search {
      margin: 0;
    }

    #search-input {
      position: relative;
      margin-right: 8px;
    }

    #cross-icon {
      margin-right: 0px;
    }

    #search-input:focus {
      border: none;
    }

    #search-icon-vp-small {
      display: none;
    }

    #burger {
      display: none;
    }

    a {
      padding: 8px;
      margin: 0 8px;
    }

    a > h1 {
      display: block;
    }

    #login-icon, #space {
      display: none;
    }
  }
</style>