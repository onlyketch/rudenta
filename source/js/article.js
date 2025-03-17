document.addEventListener('DOMContentLoaded', function () {

    // fullscreen-band slider

    if (document.querySelector('.article__fullscreen-band') !== null) {

        let fullScreenBandRight = document.querySelector('#fullscreen-band > .slider-controls-left');
        let fullScreenBandLeft = document.querySelector('#fullscreen-band > .slider-controls-right');

        $('.article__fullscreen-band-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            infinite: true,
            arrows: false,
            touchThreshold: 50,
            speed: 200,
            initialSlide: 1,
            responsive: [
                {
                  breakpoint: 1022,
                  settings: {
                    infinite: false,
                    centerMode: false,
                    initialSlide: 0,
                    slidesToShow: 2,
                  }
                },
                {
                    breakpoint: 766,
                    settings: {
                      infinite: false,
                      centerMode: false,
                      slidesToShow: 1.04,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 377,
                    settings: {
                      slidesToShow: 0.99,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                      infinite: false,
                      centerMode: false,
                      slidesToShow:  0.63,
                      slidesToScroll: 0.67
                    }
                },
                {
                    breakpoint: 359,
                    settings: {
                      infinite: false,
                      centerMode: false,
                      slidesToShow:  1,
                      slidesToScroll: 1
                    }
                }
            ]
        });

        fullScreenBandLeft.addEventListener('click', function () {
            $('.article__fullscreen-band-slider').slick('slickNext');
        });

        fullScreenBandRight.addEventListener('click', function () {
            $('.article__fullscreen-band-slider').slick('slickPrev');
        });

    }


    // accordion

    if (document.querySelector('.article__accordion') !== null) {

        let articleAccordionItems = document.querySelectorAll('.article__accordion-item');
        let articleAccordionWrappers = document.querySelectorAll('.article__accordion-item-wrapper');

        for (let i = 0; i < articleAccordionWrappers.length; i++) {
            articleAccordionWrappers[i].addEventListener('click', function () {
                if (articleAccordionItems[i].classList.contains('open')) {
                    articleAccordionItems[i].classList.remove('open');
                    this.classList.remove('border-hide');

                    if (i !== (articleAccordionWrappers.length - 1)) {
                        articleAccordionWrappers[i + 1].classList.remove('border-hide');
                    }
                } else {
                    for (let item of articleAccordionItems) {
                        if (item.classList.contains('open')) {
                            item.classList.remove('open');
                            item.querySelector('.article__accordion-item-wrapper').classList.remove('border-hide');
                        }
                    }
                    articleAccordionItems[i].classList.add('open');
                    articleAccordionWrappers[i].classList.add('border-hide');

                    if (i !== (articleAccordionWrappers.length - 1)) {
                        articleAccordionWrappers[i + 1].classList.add('border-hide');
                    }


                }
            });
        }

    }


    // слайдер работы врачей

    if (document.querySelector('.article__cases') !== null) {

        let articleCasesRight = document.querySelector('#cases-controls > .slider-controls-left');
        let articleCasesLeft = document.querySelector('#cases-controls > .slider-controls-right');

        $('.article__cases-slider').slick({
            slidesToShow: 1, 
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            touchThreshold: 50,
            speed: 200,
            responsive: [
                {
                  breakpoint: 1022,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                    breakpoint: 361,
                    settings: {
                      slidesToShow: 0.94,
                      slidesToScroll: 1
                    }
                  }
            ]
        });

        articleCasesLeft.addEventListener('click', function () {
            $('.article__cases-slider').slick('slickNext');
        });

        articleCasesRight.addEventListener('click', function () {
            $('.article__cases-slider').slick('slickPrev');
        });

    }


    // простой слайдер

    if (document.querySelector('.article__simple-slider') !== null) {

        $('.article__simple-slider-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            touchThreshold: 50,
            speed: 200
        });

    }

    // блок До и После

    if (document.querySelector('.article__before-after') !== null) {

        $(".article__before-after").twentytwenty({
            move_slider_on_hover: false, // Чтобы слайдер не двигался при наведении
            default_offset_pct: 0.5 // Начальная позиция (50%)
        });

        let beforeLabel = document.querySelector('.twentytwenty-before-label');
        let afterLabel = document.querySelector('.twentytwenty-after-label');

        $(".article__before-after").on("move", function () {
            let containerWidth = $(this).width(); // Общая ширина контейнера
            let handlePosition = $(this).find(".twentytwenty-handle").position().left; // Позиция ползунка

            let sliderPosition = handlePosition / containerWidth; // Нормализуем в диапазон 0.0 - 1.0


            if (sliderPosition < 0.5) {
                if (!beforeLabel.classList.contains('hide')) {
                    beforeLabel.classList.add('hide');

                    if (afterLabel.classList.contains('hide')) {
                        afterLabel.classList.remove('hide');
                    }
                }

            } else {
                if (!afterLabel.classList.contains('hide')) {
                    afterLabel.classList.add('hide');

                    if (beforeLabel.classList.contains('hide')) {
                        beforeLabel.classList.remove('hide');
                    }
                }

            }
        });

    }


    // Неприемлемый контент

    if (document.querySelector('.article__unacceptable-photo') !== null) {

        let unacceptablePhotoOverlay = document.querySelector('.article__unacceptable-photo-overlay');
        let unacceptablePhotoUnlockBtn = document.querySelector('.article__unacceptable-photo-unlock-btn');

        unacceptablePhotoUnlockBtn.addEventListener('click', function () {
            unacceptablePhotoOverlay.classList.add('hide');
        });

    }


    // Advantages Slider

    if (document.querySelector('.article__advantages') !== null) {

        let articleAdvantagesRight = document.querySelector('#advantages-controls > .slider-controls-left');
        let articleAdvantagesLeft = document.querySelector('#advantages-controls > .slider-controls-right');

        $('.article__advantages-slider').slick({
            slidesToShow: 1.9,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            touchThreshold: 50,
            speed: 200,
            responsive: [
                {
                  breakpoint: 1022,
                  settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1
                  }
                }
            ]
        });

        articleAdvantagesLeft.addEventListener('click', function () {
            $('.article__advantages-slider').slick('slickNext');
        });

        articleAdvantagesRight.addEventListener('click', function () {
            $('.article__advantages-slider').slick('slickPrev');
        });

    }


    // Слайдер отзывы

    if (document.querySelector('.article__reviews') !== null) {

        let articleReviewsControlsRight = document.querySelector('#reviews-controls > .slider-controls-left');
        let articleReviewsControlsLeft = document.querySelector('#reviews-controls> .slider-controls-right');

        $('.article__reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            infinite: true,
            arrows: false,
            touchThreshold: 50,
            speed: 200,
            responsive: [
                {
                  breakpoint: 1022,
                  settings: {
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1.085,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 377,
                    settings: {
                      infinite: false,
                      centerMode: false,
                      slidesToShow: 1.04,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                        infinite: false,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                  }
            ]
        });

        articleReviewsControlsLeft.addEventListener('click', function () {
            $('.article__reviews-slider').slick('slickNext');
        });

        articleReviewsControlsRight.addEventListener('click', function () {
            $('.article__reviews-slider').slick('slickPrev');
        });

    }


});