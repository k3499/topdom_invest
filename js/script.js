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
        //console.log(check.checked)
        console.log(payload)
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

// function formValidation(payload){
//     if(payload.name && payload.tel && check.checked){
//         console.log("все кул")
//     }else if(!payload.name){
//         console.log("имя не кул")
//     }else if(!payload.tel){
//         console.log("tel не кул")
//     }

// }




// document.addEventListener('DOMContentLoaded', () => {
    

    //const consultBlock = document.getElementById('consultation-thanks')

    
    // phones.forEach((phone) => {
    //   phone.addEventListener('input', function (e) {
    //     const x = e.target.value.replace(/\D/g, '').match(/(\d{0,11})/);
    //     e.target.value = !x[2] ? x[1] : x[1];
    //   });
    // });
    
    // hideWhyButton.addEventListener('click', () => {
    //   whyBlock.style.display = 'none'
    //   whyForm.style.display = 'block'
    // })
    
    // hideConsultButton.addEventListener('click', () => {
    //   consultBlock.style.display = 'none'
    //   consultForm.style.display = 'block'
    // })
    
    
    // forms.forEach((form) => {
    //   form.addEventListener('submit', submit)
    // })
    
    // function submit(e) {
    //   e.preventDefault()
    //   const form = e.target
    
    //   const names = form.querySelectorAll('.name');
    //   const regex = /[<>&]/
    //   let isValidData
    //   let isName = false
    //   let isPhone = false
    
    //   names.forEach(name => {
    //     if (name.value && !regex.test(name.value)) {
    //       isName = true
    //       name.removeAttribute('style')
    //     } else {
    //       name.style.borderColor = 'red'
    //     }
    //   })
    //   phones.forEach(phone => {
    //     if (phone.value && phone.value.length >= 7) {
    //       isPhone = true
    //       phone.removeAttribute('style')
    //     } else {
    //       phone.style.borderColor = 'red'
    //     }
    //   })
    
    //   isValidData = isName * isPhone
    //   console.log(isValidData)
    
    //   if (isValidData) {
    //     const payload = new FormData(form);
    //     // console.log([...payload]);
    //     fetch('/blagodarim', {
    //       method: 'POST',
    //       body: payload
    //     })
    //     // .then(res => res.json())
    //     .then((data) => {
    //       console.log(data)
    //       ym(92719188,'reachGoal','lead_from_form')
    //     })
    //     // .then(data => console.log(data))
    
    //     form.style.display = 'none'
    //     form.nextElementSibling.style.display = 'block'
    //   }
    // }
    // })