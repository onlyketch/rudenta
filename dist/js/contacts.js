document.addEventListener('DOMContentLoaded', function() {

       //Сворачивание карточек клиники на странице Контакты

       let clinicsCards = document.querySelectorAll('.clinics__card');
       let clinicsCardsSlideBtns = document.querySelectorAll('.clinics__card-slide-btn');
   
       for (let i = 0; i < clinicsCardsSlideBtns.length; i++) {
           clinicsCardsSlideBtns[i].addEventListener('click', function() {
               clinicsCards[i].classList.toggle('clinics__card-open');
           }); 
       }
   
       //Поп-ап видео
   
    //    let clinicVideoArea = document.querySelector('.clinics__card-video');
    //    let popUpVideo = document.querySelector('.popup-video');
    //    let popUpVideoOverlay = document.querySelector('.popup-video__overlay');
    //    let popUpVideoClose = document.querySelector('.popup-video__close');
    //    let popUpVideoIframe = document.getElementById('contacts-video');
    //    let video_url = popUpVideoIframe.getAttribute('src');
   
    //    clinicVideoArea.addEventListener('click', function() {
    //        popUpVideo.style.visibility = 'visible';
    //        document.body.classList.add('body-overflow');
    //        popUpVideoIframe.setAttribute('src', video_url);
    //    });
   
    //    popUpVideoClose.addEventListener('click', function() {
    //        popUpVideo.style.visibility = 'hidden';
    //        document.body.classList.remove('body-overflow');
    //        popUpVideoIframe.setAttribute('src', '');
    //    });
   
    //    popUpVideoOverlay.addEventListener('click', function() {
    //        popUpVideo.style.visibility = 'hidden';
    //        document.body.classList.remove('body-overflow');
    //        popUpVideoIframe.setAttribute('src', '');
    //    });









});