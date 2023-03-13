"use strict"

const mobileBurger = document.querySelector('.mobile-burger');
const menuContainer = document.querySelector('.menu-holder');

let menuStatus = "close";

mobileBurger.addEventListener('click', (evt) =>{
    evt.preventDefault();
    
    if (menuStatus  === "close"){
        menuContainer.style.display = 'block';
        setTimeout(() => {
            menuContainer.classList.add('fadeIn');
        }, 50);
        menuContainer.style.height = 'fit-content';
        menuStatus  = 'open';
    }else if(menuStatus  === "open"){
            menuContainer.style.display = 'none';
        menuStatus  = 'close';
        menuContainer.classList.remove('fadeIn');
    }
    console.log(menuStatus)
})