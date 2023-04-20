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

/*calcul*/

let moneyLabel = document.querySelector('#price-value1');
let moneyInput = document.querySelector('#price1');

let timeLabel = document.querySelector('#period-value');
let timeInput = document.querySelector('#period');

let finalTime = document.querySelector('#end-year');
let yearName = document.querySelector('#year-name');
let finalMoney = document.querySelector('#profit1');

let buttonNal = document.querySelector('#button-nal');
let buttonbesNal = document.querySelector('#button-besnal');

const priceProgress1 = document.querySelector('#price-progress1')
const priceProgress2 = document.querySelector('#price-progress2')
const priceProgress3 = document.querySelector('#price-progress3')
const periodProgress = document.getElementById('period-progress')

let percent = 25;

moneyLabel.innerHTML = moneyInput.value;
timeLabel.innerHTML = timeInput.value;

function investCalc(money, year, percent){
    let percentAll = percent * year;
    let profit = (money / 100) * percentAll;
    let allMoney = parseInt(money) + parseInt(profit);
    return (allMoney).toLocaleString("de-DE");
}
function mapRangeSliderWidth(value, min, max) {
    return ((value - min) / (max - min)) * 100 + '%';
}
  
buttonNal.addEventListener('click', function () {
    percent = 25;
    buttonNal.classList.add("calc__button_active");
    buttonbesNal.classList.remove("calc__button_active");
    finalMoney.innerHTML = investCalc(moneyInput.value, timeInput.value, percent);
  }, false);

buttonbesNal.addEventListener('click', function () {
    percent = 20;
    buttonbesNal.classList.add("calc__button_active");
    buttonNal.classList.remove("calc__button_active");
    finalMoney.innerHTML = investCalc(moneyInput.value, timeInput.value, percent);
}, false);

moneyInput.addEventListener('input', function () {
    moneyLabel.innerHTML = moneyInput.value;
    finalMoney.innerHTML = investCalc(moneyInput.value, timeInput.value, percent);
    finalTime.innerHTML = timeInput.value;
    priceProgress1.style.width = mapRangeSliderWidth(moneyInput.value, moneyInput.min, moneyInput.max);
  }, false);

timeInput.addEventListener('input', function () {
    timeLabel.innerHTML = timeInput.value;
    finalMoney.innerHTML = investCalc(moneyInput.value, timeInput.value, percent);
    finalTime.innerHTML = timeInput.value;
    let finalTimeNum = parseInt(finalTime.innerText);
    if(finalTimeNum === 1){
        yearName.innerHTML = "год:";  
    }else if((finalTimeNum > 1) && (finalTimeNum < 5)){
        yearName.innerHTML = "года:";  
    }else if(finalTimeNum > 4){
        yearName.innerHTML = "лет:";  
    }
    periodProgress.style.width = mapRangeSliderWidth(timeInput.value, timeInput.min, timeInput.max);
  }, false);