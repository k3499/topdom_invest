"use strict"

//mobilemenu

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

//спойлер

const spoilersLinkArr = document.querySelectorAll('.spoiler__link');
const spoilersArr = document.querySelectorAll('.spoiler');

Array.from(spoilersLinkArr).forEach(link => {
    let sliderStatus = 0;
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const spoiler = e.target.closest('.answer__item').querySelector('.spoiler'); 
        //получаем сосдений элемент со спойлером
        if (sliderStatus === 0){
            //спойлер открывается
            setTimeout(() => {
                spoiler.classList.remove('fadeOut');
                spoiler.classList.add('fadeIn');
            }, 50);
            spoiler.style.display = 'block';
            spoiler.style.height = 'fit-content';
            sliderStatus = 1;
        }else if(sliderStatus === 1){
            //спойлер закрывается
            setTimeout(() => {
                spoiler.style.display = 'none';
            }, 550);
            spoiler.classList.remove('fadeIn');
            spoiler.classList.add('fadeOut');
            sliderStatus = 0;
        }
    });
});

//litebox

const rustv = document.querySelectorAll('.rustv');

function lightroom(rustv){
    rustv.addEventListener('click', (evt) =>{
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
}

// submitform


document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector('.text-form__submit');
    document.querySelector('.text-form')
    .addEventListener('input', function(ev) {
    document.querySelector('.text-form__submit')
    .disabled = !([...this.querySelectorAll('input[type=text]:valid')].filter(el => el.value).length == 2) || !this.querySelector('input[type=checkbox]:checked');
        //Валидация полей и выключение кнопки
});

    submitButton.addEventListener('click', (evt) =>{
        evt.preventDefault();
        
        let tel = document.querySelector('.tel');
        let check = document.querySelector('.text-form__checkbox');
        let result = document.querySelector('.form__subtitle');
        let form = document.querySelector('.text-form');
        const url ="https://dev.salesevolution.ru/pub/source-connector/form-getter.php/topdomkzn/secondsite"
        const formData = new FormData(form);
        const payload = JSON.stringify(Object.fromEntries(formData));
        fetch(url, {
            method: 'POST',
            body: payload,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          })
          .then((data) => {
            console.log(data)
            ym(92719188,'reachGoal','lead_from_form')
          })
        console.log(evt)
    }
)
})

//scroll to section

if(window.location.pathname === '/index.html'){
    const anchors = document.querySelectorAll('a[href*="#"]')

    console.log(window.location.pathname);
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
        })
    })
    }
}
//litebox
const videoContainers = [];
videoContainers[0] = document.querySelector('.ros-smi');
videoContainers[1] = document.querySelector('.efir-smi');
videoContainers[2] = document.querySelector('.abd-smi');
videoContainers[3] = document.querySelector('.pyan-smi');
const videoWrap = document.querySelector('.litebox__video');
const videoOut = document.querySelector('.litebox__video-out');

videoContainers.forEach((videoBlock) => {
    console.log(videoBlock)
    videoBlock.addEventListener('click', (evt) =>{
        evt.preventDefault();
        let liteboxClose = document.querySelector('.litebox__close');

        if(videoBlock.classList.contains('efir-smi')){
            var youtube = document.querySelector('.efir_video').cloneNode();
        } else if(videoBlock.classList.contains('ros-smi')){
            var youtube = document.querySelector('.ros_video').cloneNode();
        } else if(videoBlock.classList.contains('abd-smi')){
            var youtube = document.querySelector('.abd_video').cloneNode();
        } else if(videoBlock.classList.contains('pyan-smi')){
            var youtube = document.querySelector('.pyan_video').cloneNode();
        }
        
        videoWrap.appendChild(youtube);
        console.log(videoWrap)
    
        liteboxClose.style.display = 'block';
        videoWrap.style.display = 'block';
        videoOut.style.display = 'block';

        function liteboxClear(){
            //закрываем окно и чистим блок
            liteboxClose.style.display = 'none';
            videoWrap.style.display = 'none';
            videoOut.style.display = 'none';
            document.querySelector('.litebox__video .iframe-video').remove();
        }
        liteboxClose.addEventListener('click', (evt) => liteboxClear())
        videoOut.addEventListener('click', (evt) => liteboxClear() )
    }) 
})