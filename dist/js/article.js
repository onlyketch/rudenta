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

        if (document.querySelector('.article__fullscreen-band-side-slider') !== null) {

            let fullScreenBandSideRight = document.querySelector('#fullscreen-band-side > .slider-controls-left');
            let fullScreenBandSideLeft = document.querySelector('#fullscreen-band-side > .slider-controls-right');

            $('.article__fullscreen-band-side-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
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

            fullScreenBandSideLeft.addEventListener('click', function () {
                $('.article__fullscreen-band-side-slider').slick('slickNext');
            });
    
            fullScreenBandSideRight.addEventListener('click', function () {
                $('.article__fullscreen-band-side-slider').slick('slickPrev');
            });

        }

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

        if (document.querySelector('.article__cases-side-slider') !== null) {

            let articleCasesSideRight = document.querySelector('#cases-controls-side > .slider-controls-left');
            let articleCasesSideLeft = document.querySelector('#cases-controls-side > .slider-controls-right');

            $('.article__cases-side-slider').slick({
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

            articleCasesSideLeft.addEventListener('click', function () {
                $('.article__cases-side-slider').slick('slickNext');
            });
    
            articleCasesSideRight.addEventListener('click', function () {
                $('.article__cases-side-slider').slick('slickPrev');
            });

        }

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

        $('.article__simple-slider-slider').on('afterChange', function(event, slick, currentSlide){
            const current = slick.$slides.eq(currentSlide);
            const caption = current.data('caption');
            $('.article__simple-slider-caption').text(caption);
          });

    }

    // блок До и После

    if (document.querySelector('.article__before-after') !== null) {

        $(".article__before-after").each(function () {
            const $container = $(this);
    
            $container.twentytwenty({
                move_slider_on_hover: false,
                default_offset_pct: 0.5
            });
    
            const beforeLabel = $container.find('.twentytwenty-before-label')[0];
            const afterLabel = $container.find('.twentytwenty-after-label')[0];
    
            $container.on("move", function () {
                const containerWidth = $container.width();
                const handlePosition = $container.find(".twentytwenty-handle").position().left;
    
                const sliderPosition = handlePosition / containerWidth;
    
                if (sliderPosition < 0.5) {
                    if (!beforeLabel.classList.contains('hide')) {
                        beforeLabel.classList.add('hide');
                        afterLabel.classList.remove('hide');
                    }
                } else {
                    if (!afterLabel.classList.contains('hide')) {
                        afterLabel.classList.add('hide');
                        beforeLabel.classList.remove('hide');
                    }
                }
            });
        });
    }


    // Неприемлемый контент

    if (document.querySelectorAll('.article__unacceptable-overlay').length !== 0) {
        let unacceptableOverlays = document.querySelectorAll('.article__unacceptable-overlay');

        for (let i = 0; i < unacceptableOverlays.length; i++) {
            let unlockBtn = unacceptableOverlays[i].querySelector('.article__unacceptable-overlay-unlock-btn');

            unlockBtn.addEventListener('click', function() {
                unacceptableOverlays[i].classList.add('hide');
            });
        }
    }


    // Advantages Slider

    if (document.querySelector('.article__advantages') !== null) {

        let articleAdvantagesRight = document.querySelector('#advantages-controls > .slider-controls-left');
        let articleAdvantagesLeft = document.querySelector('#advantages-controls > .slider-controls-right');

        $('.article__advantages-slider').slick({
            slidesToShow: 1.9,
            slidesToScroll: 1,
            infinite: true,
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

        if (document.querySelector('.article__advantages-slider-side') !== null) {
            let articleAdvantagesSideRight = document.querySelector('#advantages-controls-side > .slider-controls-left');
            let articleAdvantagesSideLeft = document.querySelector('#advantages-controls-side > .slider-controls-right');

            $('.article__advantages-slider-side').slick({
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

            articleAdvantagesSideLeft.addEventListener('click', function () {
                $('.article__advantages-slider-side').slick('slickNext');
            });
    
            articleAdvantagesSideRight.addEventListener('click', function () {
                $('.article__advantages-slider-side').slick('slickPrev');
            });
        }
    

    }


    // Слайдер отзывы

    if (document.querySelector('.article__reviews') !== null) {

        let articleReviewsControlsRight = document.querySelector('#reviews-controls > .slider-controls-left');
        let articleReviewsControlsLeft = document.querySelector('#reviews-controls > .slider-controls-right');

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

        if (document.querySelector('.article__reviews-slider-side') !== null) {
            
            let articleReviewsSideControlsRight = document.querySelector('#reviews-controls-side > .slider-controls-left');
            let articleReviewsSideControlsLeft = document.querySelector('#reviews-controls-side > .slider-controls-right');
            
            $('.article__reviews-slider-side').slick({
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

            articleReviewsSideControlsLeft.addEventListener('click', function () {
                $('.article__reviews-slider-side').slick('slickNext');
            });
    
            articleReviewsSideControlsRight.addEventListener('click', function () {
                $('.article__reviews-slider-side').slick('slickPrev');
            });
        }

    }


    // Страница услуги мобильное меню

    if (document.querySelector('.prices-menu-mobile') !== null) {

        let servicePagePricesButton = document.querySelector('.service-page__prices-btn');
        let pricesMenuMobile = document.querySelector('.prices-menu-mobile');
        let pricesMenuMobileCloseBtn = document.querySelector('.prices-menu-mobile__body-close');

        servicePagePricesButton.addEventListener('click', function() {
            document.body.classList.add('body-overflow');
            pricesMenuMobile.classList.add('open');
        });

        pricesMenuMobileCloseBtn.addEventListener('click', function() {
            pricesMenuMobile.classList.remove('open');
            setTimeout(function() {
                document.body.classList.remove('body-overflow');
            }, 400);
        });

    }


});