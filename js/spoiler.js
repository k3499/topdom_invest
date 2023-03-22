"use strict"

const spoilersLinkArr = document.querySelectorAll('.spoiler__link');
const spoilersArr = document.querySelectorAll('.spoiler');

Array.from(spoilersLinkArr).forEach(link => {
    let sliderStatus = 0;
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const spoiler = e.target.closest('.answer__item').querySelector('.spoiler'); 
        //получаем сосдений элемент со спойлером
        if (sliderStatus === 0){
            console.log('0')
            setTimeout(() => {
                spoiler.classList.remove('fadeOut');
                spoiler.classList.add('fadeIn');
            }, 50);
            spoiler.style.display = 'block';
            spoiler.style.height = 'fit-content';
            sliderStatus = 1;
        }else if(sliderStatus === 1){
            console.log('1')
            setTimeout(() => {
                spoiler.style.display = 'none';
            }, 550);
            spoiler.classList.remove('fadeIn');
            spoiler.classList.add('fadeOut');
            sliderStatus = 0;
        }
    });
});

    // spoilerLink.addEventListener('click', (evt) =>{
    //     evt.preventDefault();
        
    //     if (spoilerStatus === 0){
    //         setTimeout(() => {
    //             spoiler.classList.remove('fadeOut');
    //             spoiler.classList.add('fadeIn');
    //         }, 50);
    //         spoiler.style.display = 'block';
    //         spoiler.style.height = 'fit-content';
    //         spoilerStatus = 1;
    //     }else if(spoilerStatus === 1){
    //         setTimeout(() => {
    //             spoiler.style.display = 'none';
    //         }, 550);
    //         spoilerStatus = 0;
    //         spoiler.classList.remove('fadeIn');
    //         spoiler.classList.add('fadeOut');
    //     }
    //     console.log(spoiler)
    // console.log(link)
    // })