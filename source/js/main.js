document.addEventListener('DOMContentLoaded', function() {

    //Кнопка «Навверх»

    let btnUp = document.querySelector('.btn-up');

    document.addEventListener('scroll', function() {
        if (scrollY > 500) {
            btnUp.classList.remove('btn-up_hide');
        } else {
            btnUp.classList.add('btn-up_hide');
        }
    });

    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Выезжающая справа форма обратной связи

    let callBackBox = document.querySelector('.callback-form');
    let callBackForm = document.querySelector('.callback-form__form');
    let callBackInputName = document.getElementById('callback-name');
    let callBackInputPhone = document.getElementById('callback-phone');
    let callBackInputComment = document.getElementById('callback-comment');
    let callBackInputCheckBox = document.getElementById('callback-checkbox');
    let callBackInputNameError = document.querySelector('#callback-name + .callback-form__form-error');
    let callBackInputPhoneError = document.querySelector('#callback-phone + .callback-form__form-error');
    let callBackInputCheckBoxError = document.querySelector('.callback-form__form-agreement > .callback-form__form-error');
    let callBackFormBody = document.querySelector('.callback-form__body');
    let callBackFormBtns = document.querySelectorAll('.callback');
    let callBackFormClose = document.querySelector('.callback-form__close');
    let callBackSuccess = document.querySelector('.callback-form__success');
    let callBackSuccessClose = document.querySelector('.callback-form__success-close');
    let callBackNameHaveError = false;
    let callBackPhoneHaveError = false;
    let callBackCheckBoxHaveError = false;
    let callBackFormBodyOpen = false;
    
    //маска для телефона
    let maskOptions = {
        mask: '+{7} 000 000-00-00'
    };
    const mask = IMask(callBackInputPhone, maskOptions);
    callBackInputPhone.addEventListener('focus', function() {
        mask.value = '+7 ';
    });
    
    

    for (let button of callBackFormBtns) {
            
        button.addEventListener('click', function() {

            callBackBox.style.visibility = 'visible';
            document.body.classList.add('body-overflow');

            if( window.innerWidth >= 1023 ) {

                if (!callBackFormBodyOpen) {
                    callBackFormBody.style.visibility = 'visible';
                    callBackFormBody.style.right = '0';
                    callBackFormBodyOpen = true;
                }

            } else {

                if (!callBackFormBodyOpen) {
                    callBackFormBody.style.visibility = 'visible';
                    callBackFormBody.style.bottom = '0';
                    callBackFormBodyOpen = true;
                }

            }
        });

    }

    callBackFormClose.addEventListener('click', function() {

        if( window.innerWidth >= 1023 ) {

            if (callBackFormBodyOpen) {
                callBackFormBody.style.right = '-100%';
                callBackFormBodyOpen = false;
                setTimeout(function() {
                    callBackFormBody.style.visibility = 'hidden';
                }, 500);
            }

        } else {

            if (callBackFormBodyOpen) {
                callBackFormBody.style.bottom = '-100%';
                callBackFormBodyOpen = false;
                setTimeout(function() {
                    callBackFormBody.style.visibility = 'hidden';
                }, 500);
            }
        }
        
        setTimeout(function() {

            if (callBackNameHaveError || callBackPhoneHaveError || callBackCheckBoxHaveError) {
                callBackInputName.classList.remove('error');
                callBackInputPhone.classList.remove('error');
                callBackInputNameError.style.display = 'none';
                callBackInputPhoneError.style.display = 'none';
                callBackInputCheckBoxError.style.display = 'none';
                callBackNameHaveError = false;
                callBackPhoneHaveError = false;
                callBackCheckBoxHaveError = false;
            }

            callBackInputName.value = '';
            callBackInputPhone.value = '';
            callBackInputComment.value = '';
            callBackInputCheckBox.checked = false;

            callBackBox.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400);    
    });

    document.addEventListener('click', function(e) {
            if (callBackFormBodyOpen) {
                const withinCallBackFormBody = e.composedPath().includes(callBackFormBody); 
                const withinCallBackBtn1 = e.composedPath().includes(callBackFormBtns[0]);
                const withinCallBackBtn2 = e.composedPath().includes(callBackFormBtns[1]);
                const withinCallBackBtn3 = e.composedPath().includes(callBackFormBtns[2]);
                const withinCallBackBtn4 = e.composedPath().includes(callBackFormBtns[3]);
                const withinCallBackBtn5 = e.composedPath().includes(callBackFormBtns[4]);


                if ( !withinCallBackFormBody && !withinCallBackBtn1 && !withinCallBackBtn2 && !withinCallBackBtn3 && !withinCallBackBtn4 && !withinCallBackBtn5 ) {

                    if( window.innerWidth >= 1023 ) {

                        if (callBackFormBodyOpen) {
                            callBackFormBody.style.right = '-100%';
                            callBackFormBodyOpen = false;
                            setTimeout(function() {
                                callBackFormBody.style.visibility = 'hidden';
                            }, 500);
                        }

                    } else {
                    
                        if (callBackFormBodyOpen) {
                            callBackFormBody.style.bottom = '-100%';
                            callBackFormBodyOpen = false;
                            setTimeout(function() {
                                callBackFormBody.style.visibility = 'hidden';
                            }, 500);
                        }
                    }

                    setTimeout(function() {

                        if (callBackNameHaveError || callBackPhoneHaveError || callBackCheckBoxHaveError) {
                            callBackInputName.classList.remove('error');
                            callBackInputPhone.classList.remove('error');
                            callBackInputNameError.style.display = 'none';
                            callBackInputPhoneError.style.display = 'none';
                            callBackInputCheckBoxError.style.display = 'none';
                            callBackNameHaveError = false;
                            callBackPhoneHaveError = false;
                            callBackCheckBoxHaveError = false;
                        }

                            callBackInputName.value = '';
                            callBackInputPhone.value = '';
                            callBackInputComment.value = '';
                            callBackInputCheckBox.checked = false;
                            callBackBox.style.visibility = 'hidden';
                            document.body.classList.remove('body-overflow');
                    }, 400); 
                }

            }
        });

    callBackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (callBackInputName.value == '' || String(callBackInputName.value).length < 3) {
            callBackInputName.classList.add('error');
            callBackInputNameError.style.display = 'block';
            if (callBackNameHaveError == false) {
                callBackNameHaveError = true;
            }
        } else {
            if (callBackNameHaveError) {
                callBackInputName.classList.remove('error');
                callBackInputNameError.style.display = 'none';
                callBackNameHaveError = false;
            }
        }

        if (callBackInputPhone.value == '' || String(callBackInputPhone.value).length < 16) {
            callBackInputPhone.classList.add('error');
            callBackInputPhoneError.style.display = 'block';
            if (callBackPhoneHaveError == false) {
                callBackPhoneHaveError = true;
            }
        } else {
            if (callBackPhoneHaveError) {
                callBackInputPhone.classList.remove('error');
                callBackInputPhoneError.style.display = 'none'; 
                callBackPhoneHaveError = false;
            } 
        }

        if (callBackInputCheckBox.checked == false) {
            callBackInputCheckBoxError.style.display = 'block';
            if (callBackCheckBoxHaveError == false) {
                callBackCheckBoxHaveError = true;
            }
        } else {
            if (callBackCheckBoxHaveError) {
                callBackInputCheckBoxError.style.display = 'none';
                callBackCheckBoxHaveError = false;
            }
            
        }
        
        //success
        if (callBackNameHaveError == false && callBackPhoneHaveError == false && callBackCheckBoxHaveError == false) {

            let form_data = $(this).serialize();
            $.ajax({
                type: "GET", 
                url: "/",
                data: form_data,
                success: function() {

                    if( window.innerWidth >= 1023 ) {

                        if (callBackFormBodyOpen) {
                            callBackFormBody.style.right = '-100%';
                            callBackFormBodyOpen = false;
                            setTimeout(function() {
                                callBackFormBody.style.visibility = 'hidden';
                            }, 500);
                        }
                        callBackSuccess.style.visibility = 'visible';
                        callBackSuccess.style.right = '0'; 

                    } else {

                        if (callBackFormBodyOpen) {
                            callBackFormBody.style.bottom = '-100%';
                            callBackFormBodyOpen = false;
                            setTimeout(function() {
                                callBackFormBody.style.visibility = 'hidden';
                            }, 500);
                        }
                        callBackSuccess.style.visibility = 'visible';
                        callBackSuccess.style.bottom = '0';

                    }
                    
                      
                 
                }
           
            });
        }
    });

    callBackSuccessClose.addEventListener('click', function() {

        if( window.innerWidth >= 1023 ) {
            callBackSuccess.style.right = '-100%';
            setTimeout(function() {
                callBackSuccess.style.visibility = 'hidden';
            }, 500);
        } else {
            callBackSuccess.style.bottom = '-100%';
            setTimeout(function() {
                callBackSuccess.style.visibility = 'hidden';
            }, 500);
        }


        setTimeout(function() {
            callBackInputName.value = '';
            callBackInputPhone.value = '';
            callBackInputComment.value = '';
            callBackInputCheckBox.checked = false;

            callBackBox.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400); 
    });

    //Привязка стрелочки к последнему слову названия услуги на странице цен

    let pricesServiceTitleTexts = document.querySelectorAll('.prices__services-title');

    if (pricesServiceTitleTexts !== null) {
        for (let i = 0; i < pricesServiceTitleTexts.length; i++) {
            let lastWord = pricesServiceTitleTexts[i].textContent.split(' ').pop();
            let newText = pricesServiceTitleTexts[i].textContent.replace(lastWord, '<span class="prices__services-title-arr">' + lastWord + '</span>');
            pricesServiceTitleTexts[i].innerHTML = newText;
        }
    }
    
    //Главное меню
    let headerAreaNavLinkServices = document.querySelectorAll('.header__area-nav-link-services');
    let headerAreaNav = document.querySelector('.header__area-nav');
    let servicesMenu = document.querySelector('.services-menu');
    let headerAreaNavLinkMore = document.querySelector('.header__area-nav-link-more');
    let moreMenu = document.querySelector('.more-menu');

    for (let i = 0; i < headerAreaNavLinkServices.length; i++) {
        headerAreaNavLinkServices[i].addEventListener('click', function() {
            if (servicesMenu) {
                if (headerAreaNavLinkMore.classList.contains('active')) {
                    headerAreaNavLinkMore.classList.remove('active')
                }
                if (moreMenu.classList.contains('open')) {
                    moreMenu.classList.remove('open');
                }
                servicesMenu.classList.add('open');
                headerAreaNav.classList.add('has-active');
                this.classList.add('active');
                document.body.classList.add('body-overflow');
            }
        });
    }

    headerAreaNavLinkMore.addEventListener('click', function() {
        if (moreMenu) {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
            }
            if (!headerAreaNav.classList.contains('has-active')) {
                headerAreaNav.classList.add('has-active')
            }
            moreMenu.classList.add('open');
            document.body.classList.add('body-overflow');
        }
        
    });


    //Главное меню внутри

    let servicesMenuItems = document.querySelectorAll('.services-menu__main-service');
    let servicesMenuItemsList = document.querySelector('.services-menu__main-list');
    let servicesMenuMainBlock = document.querySelector('.services-menu__main');
    let servicesMenuServiceBlock = document.querySelector('.services-menu__service');
    let servicesMenuAdvertBlock = document.querySelector('.services-menu__advert');
    let serviceMenuBlockTitle = servicesMenuServiceBlock.querySelector('.services-menu__service-title');
    let moreMenuBody = document.querySelector('.more-menu__body');

    document.addEventListener('click', function(e) {
        if (servicesMenu.classList.contains('open')) {
        const withinHeaderLinkServicesFirst = e.composedPath().includes(headerAreaNavLinkServices[0]);
        const withinHeaderLinkServicesSecond = e.composedPath().includes(headerAreaNavLinkServices[1]);
        const withinMenuMain = e.composedPath().includes(servicesMenuMainBlock);
        const withinMenuService = e.composedPath().includes(servicesMenuServiceBlock);
        const withinMenuAdvert = e.composedPath().includes(servicesMenuAdvertBlock);
        const whitinMenuMore = e.composedPath().includes(headerAreaNavLinkMore);
     
        if ( !withinHeaderLinkServicesFirst && !withinHeaderLinkServicesSecond && !withinMenuMain && !withinMenuService && !withinMenuAdvert) {
            if (servicesMenu.classList.contains('open')) {
                servicesMenu.classList.remove('open');
            }

            if (servicesMenuServiceBlock.classList.contains('open')) {
                servicesMenuServiceBlock.classList.remove('open')
            }

            servicesMenuAdvertBlock.classList.remove('hide');
            servicesMenuAdvertBlock.classList.remove('show');

            servicesMenuItemsList.classList.remove('has-active');
            for (let item of servicesMenuItems) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            }

            if (!whitinMenuMore) {
                headerAreaNav.classList.remove('has-active');
            }
            
            for (let item of headerAreaNavLinkServices) {
                item.classList.remove('active');
            }
            

            document.body.classList.remove('body-overflow');
        }
    } else if (moreMenu.classList.contains('open')) {
        const whitinMenuMore = e.composedPath().includes(headerAreaNavLinkMore);
        const whitinMenuMoreBody = e.composedPath().includes(moreMenuBody);
        const withinHeaderLinkServicesFirst = e.composedPath().includes(headerAreaNavLinkServices[0]);

        if (!whitinMenuMore && !whitinMenuMoreBody) {
            moreMenu.classList.remove('open');

            if (!withinHeaderLinkServicesFirst) {
                headerAreaNav.classList.remove('has-active');
            }

            document.body.classList.remove('body-overflow');
        }
    }
        
    });

    for (let i = 0; i < servicesMenuItems.length; i++) {
        servicesMenuItems[i].addEventListener('click', function() {

            let servicesMenuItemCounter = servicesMenuItems[i].querySelector('.services-menu__main-service-counter');
            if (!servicesMenuItemsList.classList.contains('has-active')) {
                servicesMenuItemsList.classList.add('has-active');
            }

            for (let item of servicesMenuItems) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            }

            servicesMenuItems[i].classList.add('active');
            
            if (!servicesMenuServiceBlock.classList.contains('open')) {
                servicesMenuServiceBlock.classList.add('open');
            }
            if (!servicesMenuAdvertBlock.classList.contains('hide')) {
                servicesMenuAdvertBlock.classList.add('hide');

                setTimeout(function() {
                    servicesMenuAdvertBlock.classList.add('show');
                }, 550);
            }

            let textWithOutNum = servicesMenuItems[i].innerText.replace (/[0-9]/g, '');
            serviceMenuBlockTitle.innerHTML = textWithOutNum + ' <span class="services-menu__service-total-counter">' + servicesMenuItemCounter.textContent + '</span>';
        });
    }

    // переключатель меню - навигация
    let headerAreaNavSwitcher = document.querySelector('.header__area-nav-switcher');
    let headerAreaNavMain = document.querySelector('.header__area-nav-main');
    let headerAreaNavPage = document.querySelector('.header__area-nav-page');

    if (headerAreaNavSwitcher !== null) {

        headerAreaNavSwitcher.addEventListener('click', function() {
            if (headerAreaNavMain.classList.contains('hide')) {
                headerAreaNavPage.classList.add('hide');
                headerAreaNavMain.classList.remove('hide');
            } else if (headerAreaNavPage.classList.contains('hide')) {
                headerAreaNavPage.classList.remove('hide');
                headerAreaNavMain.classList.add('hide');
            }
            
        });

    }

    //Главное меню мобильное
    let mobNavigatorMenuBtn = document.querySelector('.mobile-navigator__btn-menu');
    let mobNavigatorWrapper = document.querySelector('.mobile-navigator__wrapper');
    let mobNavigatorMenuClose = document.querySelector('.mobile-navigator__menu-close');
    let mobMenu = document.querySelector('.mobile-menu');
    let mobMenuWrapper = document.querySelector('.mobile-menu__wrapper');

    mobNavigatorMenuBtn.addEventListener('click', function() {
        document.body.classList.add('body-overflow');
        mobNavigatorWrapper.classList.add('show-menu');
        mobMenu.classList.add('open');
        mobMenuWrapper.scrollTo(0, 0);
    });

    //внутри
    let mobMenuMain = document.querySelector('.mobile-menu__main');
    let mobMenuServices = document.querySelector('.mobile-menu__services');
    let mobMenuServicesItem = document.querySelector('.mobile-menu__item-services');
    let mobNavigatorMenuName = document.querySelector('.mobile-navigator__menu-name');
    let mobMenuMore = document.querySelector('.mobile-menu__more');
    let mobMenuMoreItem = document.querySelector('.mobile-menu__item-more');

    mobMenuServicesItem.addEventListener('click', function() {
        mobMenuMain.classList.add('hide');
        mobMenuServices.classList.add('open');
        mobNavigatorMenuName.textContent = 'Услуги';
    });

    mobMenuMoreItem.addEventListener('click', function() {
        mobMenuMain.classList.add('hide');
        mobMenuMore.classList.add('open');
        mobNavigatorMenuName.textContent = 'Еще';
    });


    //меню услуг
    let mobMenuServicesItems = document.querySelectorAll('.mobile-menu__services-item');
    let mobMenuBackBtns = document.querySelectorAll('.mobile-menu__back-btn');

    for (let btn of mobMenuBackBtns) {
        btn.addEventListener('click', function() {
            if (mobMenuServices.classList.contains('open')) {
                mobMenuServices.classList.remove('open');
            } else if (mobMenuMore.classList.contains('open')) {
                mobMenuMore.classList.remove('open');
            }
        
            mobMenuMain.classList.remove('hide');
            for (let item of mobMenuServicesItems) {
                if (item.classList.contains('open')) item.classList.remove('open');
                if (item.classList.contains('pale')) item.classList.remove('pale');
            }
            mobNavigatorMenuName.textContent = 'Меню';
        });
    }

    mobNavigatorMenuClose.addEventListener('click', function() {
        mobMenuServices.classList.remove('open');
        mobMenuMain.classList.remove('hide');
        for (let item of mobMenuServicesItems) {
            if (item.classList.contains('open')) item.classList.remove('open');
            if (item.classList.contains('pale')) item.classList.remove('pale');
        }
        mobNavigatorMenuName.textContent = 'Меню';
        mobNavigatorWrapper.classList.remove('show-menu');
        mobMenu.classList.remove('open');
        document.body.classList.remove('body-overflow');
    });

    for (let i = 0; i < mobMenuServicesItems.length; i++) {
        
        let mobMenuServicesItemWrapper = mobMenuServicesItems[i].querySelector('.mobile-menu__services-item-wrapper');
        let mobMenuServicesItemSubmenu = mobMenuServicesItems[i].querySelector('.mobile-menu__services-item-submenu');
        
        mobMenuServicesItemWrapper.addEventListener('click', function(e) {
            if (mobMenuServicesItems[i].classList.contains('pale')) {
                mobMenuServicesItems[i].classList.remove('pale')
            }
            let itemOpenCounter = 0;
            for (let item of mobMenuServicesItems) {
                let itemWrapper = item.querySelector('.mobile-menu__services-item-wrapper');
                let itemSubmenu = item.querySelector('.mobile-menu__services-item-submenu');
                if (item.classList.contains('open') && itemWrapper !== e.currentTarget) {
                    item.classList.remove('open');
                    itemSubmenu.classList.remove('open'); 
                }
            }
            mobMenuServicesItems[i].classList.toggle('open');
            mobMenuServicesItemSubmenu.classList.toggle('open');
            for (let item of mobMenuServicesItems) {
                if (item.classList.contains('open')) {
                    itemOpenCounter++;
                }
            }
            if (itemOpenCounter > 0) {
                for (let item of mobMenuServicesItems) {
                    if (!item.classList.contains('open')) {
                        item.classList.add('pale');
                    }
                }
            } else if (itemOpenCounter == 0) {
                for (let item of mobMenuServicesItems) {
                    if (item.classList.contains('pale')) {
                        item.classList.remove('pale');
                    }
                }
            }
        });
    }

    //Слайдер детальная врача

    if (document.querySelector('.doctor-detail__workflow-slider') !== null ) {
        
        $(".doctor-detail__workflow-slider").owlCarousel({
            margin: 0,
            items: 1,
            nav: true,
            loop: true,
            smartSpeed: 500
        });
    }

    // Pop-up сертификаты, документы на детальной врача

    let doctorDetailDocumentPreview = document.querySelectorAll('.doctor-detail__data-achievement');
    let doctorDetailDocumentModal = document.querySelector('.doctor-detail__document');
    let doctorDetailDocumentSource = document.querySelector('.doctor-detail__document picture > source');
    let doctorDetailDocumentModalClose = document.querySelector('.doctor-detail__document-close');
    let doctorDetailDocumentFullSize = document.querySelector('.doctor-detail__document-body-img');
    let openDoc = false;

    if (doctorDetailDocumentPreview.length !== 0) {

        for (let i = 0; i < doctorDetailDocumentPreview.length; i++) {
            doctorDetailDocumentPreview[i].addEventListener('click', function(e) {
                if (this.hasAttribute('data-target')) {
                    e.stopPropagation();
                    let pathToFullSizeImage = doctorDetailDocumentPreview[i].getAttribute('data-target');
                    doctorDetailDocumentFullSize.setAttribute('src', pathToFullSizeImage);
                    doctorDetailDocumentSource.setAttribute('srcset', pathToFullSizeImage);
                    doctorDetailDocumentModal.classList.add('open-document');
                    openDoc = true;
                    if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                        document.body.classList.add('body-overflow');
                    }
                }
                
            });
        }

        doctorDetailDocumentModalClose.addEventListener('click', function() {
            doctorDetailDocumentModal.classList.remove('open-document');
            setTimeout(function() {
                openDoc = false;
                if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                    document.body.classList.remove('body-overflow');
                }
            }, 400);
        });

        document.addEventListener('click', function(e) {
            if (doctorDetailDocumentModal.classList.contains('open-document')) {
                const withinimageFull = e.composedPath().includes(doctorDetailDocumentFullSize);
                const withinCloseBtn = e.composedPath().includes(doctorDetailDocumentModalClose);

                if ( !withinimageFull && !withinCloseBtn ) {
                    doctorDetailDocumentModal.classList.remove('open-document');
                    setTimeout(function() {
                        openDoc = false;
                        if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                            document.body.classList.remove('body-overflow');
                        }
                    }, 400);
                }
            }
        });

    }

    // Боковые панели на детальной врача


    if (document.querySelector('.sidebar-details-panel')) {
        
        function openDetailsPanel(type) {
            let panel = document.querySelector('.sidebar-details-panel[data-panel="' + type + '"]');
            if (panel) {
                let panelBody = panel.querySelector('.sidebar-details-panel__body');
                panel.classList.add('sidebar-details-open');
                panelBody.classList.add('sidebar-details-body-open');
                document.body.classList.add('body-overflow');
            }
        }

        let detailsPanelCloseButtons = document.querySelectorAll('.sidebar-details-panel__body-close-btn');

        detailsPanelCloseButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                let panel = button.closest('.sidebar-details-panel');
                if (panel) {
                    let panelBody = panel.querySelector('.sidebar-details-panel__body');
                    panelBody.classList.remove('sidebar-details-body-open');
                    
                    setTimeout(function() {
                        panel.classList.remove('sidebar-details-open');
                        document.body.classList.remove('body-overflow');
                    }, 400);
                }
            });
        });

        document.querySelectorAll('[data-open]').forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
                let type = button.getAttribute('data-open');
                openDetailsPanel(type);
            });
        });

        document.addEventListener('click', function(e) {
            if (document.querySelector('.sidebar-details-open') !== null && openDoc == false) {
                let openPanel = document.querySelector('.sidebar-details-open');
                let openPanelBody = document.querySelector('.sidebar-details-body-open');

                const withinBoundaries = e.composedPath().includes(openPanelBody);
                
                if ( !withinBoundaries ) {
                        if (openPanelBody) {
                            openPanelBody.classList.remove('sidebar-details-body-open');
                        }
                        
                        setTimeout(function() {
                            openPanel.classList.remove('sidebar-details-open');
                            document.body.classList.remove('body-overflow');
                        }, 400);
                    
                }
            }
         
            
        });

    }

    // Автозум левой колонки на детальной врача

    if (document.querySelector('.doctor-detail__info')) {
        
        let doctorDetailInfoPanel = document.querySelector('.doctor-detail__info');

        function scalePanel() {
            const baseWidth = 1440;
            const currentWidth = window.innerWidth;
            const zoom = currentWidth / baseWidth;

            if (window.innerWidth > 1023 && zoom < 1) {
                doctorDetailInfoPanel.style.zoom = zoom;
            } else {
                doctorDetailInfoPanel.style.zoom = 1;
            }
            
        }

        scalePanel();

        window.addEventListener('resize', scalePanel);

    }

    // Слайдер на главной

    if (document.querySelector('.main-page__hero-slider')) {
        
        const minSlides = 2;
        const maxSlides = 5;
        const mainSlider = document.querySelector('.main-page__hero-slider');
        const slides = document.querySelectorAll('.main-page__hero-slider-slide');

        if (document.querySelector('.main-page__hero-slider-slide')) {
            //если больше удаляем
            slides.forEach(function(slide, index) {
                if (index >= maxSlides) {
                    slide.remove();
                }
            });
    
        }

        $('.main-page__hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            draggable: false,
            arrows: false,
            dots: true,
            touchThreshold: 50,
            speed: 500,
            fade: true,
            cssEase:'linear',
            draggable: false,
            swipe: false,
            touchMove: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    swipe: true
                }
              }]
        });

        const sliderSwitcher = document.querySelector('.main-page__hero-slider .slick-dots');
        //фикс ширина переключателя для избежания дергания
        switch (slides.length) {
            case 5:
                sliderSwitcher.style.setProperty('--switcher-width', '176px');
                break;
            case 4:
                sliderSwitcher.style.setProperty('--switcher-width', '156px');
                break;
            case 3:
                sliderSwitcher.style.setProperty('--switcher-width', '136px');
                break;
            case 2:
                sliderSwitcher.style.setProperty('--switcher-width', '116px');
                break;
            default:
                sliderSwitcher.style.setProperty('--switcher-width', 'auto'); 
        }

        const sliderSwitcherDots = document.querySelectorAll('.main-page__hero-slider .slick-dots > li > button');
        for (let button of sliderSwitcherDots) {
            button.addEventListener('click', function() {
                if (!button.classList.contains('auto-play-disabled')) {
                    for (let btn of sliderSwitcherDots) {
                        btn.classList.add('auto-play-disabled');
                    }
                    $('.main-page__hero-slider').slick('slickPause');
                }
            });
        }

    }


        // Слайдер широкий на главной

        if (document.querySelector('.main-page__benefits-slider')) {

            const benefitsSliderLeft = document.querySelector('.main-page__benefits > .slider-controls .slider-controls-left');
            const benefitsSliderRight = document.querySelector('.main-page__benefits > .slider-controls .slider-controls-right');

            $('.main-page__benefits-slider').slick({
                slidesToShow: 1, 
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                touchThreshold: 50,
                speed: 500,
                fade: true,
                cssEase:'linear',
                draggable: false,
                swipe: false,
                touchMove: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        swipe: true
                    }
                  }]
            });

            benefitsSliderRight.addEventListener('click', function() {
                $('.main-page__benefits-slider').slick('slickNext');
            });
        
            benefitsSliderLeft.addEventListener('click', function() {
                $('.main-page__benefits-slider').slick('slickPrev');
            });
        }

        // Слайдер простой на главной

        if (document.querySelector('.main-page__about-slider')) {

            $('.main-page__about-slider').slick({
                slidesToShow: 1, 
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                touchThreshold: 50,
                speed: 700
            });

        }

        // «Посмотреть весь список услуг» на главной

        if (document.querySelector('.main-page__services-menu')) {

            const mainPageServiceMenuHead = document.querySelector('.main-page__services-menu-head');
            const mainPageServiceMenuBody = document.querySelector('.main-page__services-menu-body');
            const mainPageServiceMenuBtn = document.querySelector('.main-page__services-menu-head-btn');

            mainPageServiceMenuHead.addEventListener('click', function() {
                if (!mainPageServiceMenuBody.classList.contains('open-menu')) {
                    mainPageServiceMenuBtn.textContent = "-";
                } else {
                    mainPageServiceMenuBtn.textContent = "+";
                }
                mainPageServiceMenuBody.classList.toggle('open-menu');
            });
        }

        // Слайдер врачей на главной

        if (document.querySelector('.main-page__doctors-gallery-slider')) {

            const doctorsGallerySliderLeft = document.querySelector('.main-page__doctors-gallery-head-right .slider-controls > .slider-controls-left');
            const doctorsGallerySliderRight = document.querySelector('.main-page__doctors-gallery-head-right .slider-controls > .slider-controls-right');

            $('.main-page__doctors-gallery-slider').slick({
                slidesToShow: 0.94, 
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: false,
                touchThreshold: 80,
                speed: 300,
                responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1.05,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });

            doctorsGallerySliderRight.addEventListener('click', function() {
                $('.main-page__doctors-gallery-slider').slick('slickNext');
            });
        
            doctorsGallerySliderLeft.addEventListener('click', function() {
                $('.main-page__doctors-gallery-slider').slick('slickPrev');
            });
        }

        // Мобильный слайдер карточек на главной

        if (document.querySelector('.main-page__services-cards') && window.innerWidth < 768) {

            $('.main-page__services-cards').slick({
                slidesToShow: 1.05, 
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                dots: false,
                touchThreshold: 80,
                speed: 300
            });

        } 

        // Макска для телефона на главной

        if (document.getElementById('mp-phone')) {
            const mainPageInputPhone = document.getElementById('mp-phone');

            let maskOptions = {
                mask: '+{7} 000 000-00-00'
            };
            const mask = IMask(mainPageInputPhone, maskOptions);
            mainPageInputPhone.addEventListener('focus', function() {
             mask.value = '+7 ';
            });

        }

        // Форма на главной отправка и валидация

        if (document.querySelector('.main-page__callback-form')) {
            
            let mainPageForm = document.querySelector('.main-page__callback-form');
            let mainPageFormFieldName = document.getElementById('mp-field-name');
            let mainPageFormFieldPhone = document.getElementById('mp-field-phone');
            let mainPageFormInputName = document.getElementById('mp-name');
            let mainPageFormInputPhone = document.getElementById('mp-phone');
            let mainPageFormTextarea = document.querySelector('.main-page__callback-form-field-textarea');
            let mainPageCallBackRight = document.querySelector('.main-page__callback-right');
            let mainPageFormHaveErrors = false;

            function mainPageFormErrorsCheck() {

                //name
                if (mainPageFormInputName.value.length < 2) {
                    mainPageFormFieldName.classList.add('error');

                    if (!mainPageFormHaveErrors) mainPageFormHaveErrors = true;
                }

                //phone
                if (mainPageFormInputPhone.value.length < 16) {
                    mainPageFormFieldPhone.classList.add('error');

                    if (!mainPageFormHaveErrors) mainPageFormHaveErrors = true;
                }
            };

            function mainPageFormFixErrorsCheck() {
                if (!mainPageFormFieldName.classList.contains('error') && !mainPageFormFieldPhone.classList.contains('error')) {
                    if (mainPageFormHaveErrors) mainPageFormHaveErrors = false;
                } 
            }

            mainPageFormInputName.addEventListener('input', function() {
                this.value = this.value.replace(/\d/g, '');
                if (mainPageFormInputName.value.length >= 2 && mainPageFormFieldName.classList.contains('error')) {
                    mainPageFormFieldName.classList.remove('error');
                    mainPageFormFixErrorsCheck();
                }
            });

            mainPageFormInputPhone.addEventListener('input', function() {
                if (mainPageFormInputPhone.value.length == 16 && mainPageFormFieldPhone.classList.contains('error')) {
                    mainPageFormFieldPhone.classList.remove('error');
                    mainPageFormFixErrorsCheck();
                }
            });

            mainPageForm.addEventListener('submit', function(e) {
                e.preventDefault();
                mainPageFormErrorsCheck();

                if (mainPageFormHaveErrors == false) {
                    let form_data = $(this).serialize();
                    $.ajax({
                        type: "GET", 
                        url: "/",
                        data: form_data,
                        success: function() {
                            mainPageCallBackRight.classList.add('success');
                            mainPageFormInputPhone.value = '';
                            mainPageFormInputName.value = '';
                            mainPageFormTextarea.value = '';
                        }
                    });
                }
            });

        };



        // Автозум главной

        if (document.querySelector('.main-page')) {
            
            const mainPage = document.querySelector('.main-page');

            function scaleMainPage() {
                const baseWidth = 1440;
                const currentWidth = window.innerWidth;
                const zoom = currentWidth / baseWidth;
    
                if (window.innerWidth > 767 && zoom < 1) {
                    mainPage.style.zoom = zoom;
                } else {
                    mainPage.style.zoom = 1;
                }
                
            }
    
            scaleMainPage();
    
            window.addEventListener('resize', scaleMainPage);
        }

        // Уменьшение масштаба zoom блока на главной при скролле

        if (document.querySelector('.main-page__zoom')) {
        
                const mainPageZoom = document.querySelector('.main-page__zoom');

                function handleScroll() {

                    

                    if (window.innerWidth <= 2560 && window.innerWidth > 1920) {
                        const scrollY = window.scrollY;
                        const scale = Math.max(0.53, 1 - (scrollY - 320) / 1000);
                        const scrollEnough = scrollY >= 120;

                        if (scrollEnough) {
                            mainPageZoom.style.transform = `scale(${scale})`;
                        } else {
                            mainPageZoom.style.transform = 'scale(1)';
                        }

                    } else if (window.innerWidth <= 1920 && window.innerWidth > 1440) {
                        const scrollY = window.scrollY;
                        const scale = Math.max(0.7170, 1 - (scrollY - 320) / 1000);
                        const scrollEnough = scrollY >= 140;

                        if (scrollEnough) {
                            mainPageZoom.style.transform = `scale(${scale})`;
                        } else {
                            mainPageZoom.style.transform = 'scale(1)';
                        }

                    } else if (window.innerWidth <= 1440 && window.innerWidth > 767) {
                        const scrollY = window.scrollY;
                        const scale = Math.max(0.95, 1 - (scrollY - 320) / 1000);
                        const scrollEnough = scrollY >= 320;

                        if (scrollEnough) {
                            mainPageZoom.style.transform = `scale(${scale})`;
                        } else {
                            mainPageZoom.style.transform = 'scale(1)';
                        }
                    }
                    
                    else {
                        mainPageZoom.style.transform = 'scale(1)';
                    }
                
                }

            
                
                window.addEventListener('scroll', handleScroll);
        }

        /* 
            Добавить обрезку текста если более 3 строк
            Если текст отзыва обрезан ... добавить кнопку Подробнее
        */
        if (document.querySelectorAll('.reviews__reviews-item-text').length > 0) {
            
            const reviewsTextElems = document.querySelectorAll('.reviews__reviews-item-text');

            reviewsTextElems.forEach(el => {
                el.classList.add('truncate');
            });

            reviewsTextElems.forEach(el => {
                if (el.scrollHeight > el.clientHeight) { 
                    el.insertAdjacentHTML('afterend', '<button class="reviews__reviews-item-text-read-more">Подробнее</button>');
                }
            });

            if (document.querySelectorAll('.reviews__reviews-item-text-read-more').length > 0) {
                const reviewsTextMoreBtns = document.querySelectorAll('.reviews__reviews-item-text-read-more');
                for (let btn of reviewsTextMoreBtns) {
                    btn.addEventListener('click', function(e) {
                        const reviewsItemRight = e.target.closest('.reviews__reviews-item-right');
                        const reviewsTruncate = reviewsItemRight.querySelector('.reviews__reviews-item-text');
                        
                        reviewsTruncate.classList.remove('truncate');

                        e.target.classList.add('hide-more');
                    });
                }
            }
        }

        // Скрыть верхнюю часть меню при скролле

        if (document.querySelector('.header')) {

            const headerTop = document.querySelector('.header__top');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 320) {
                    headerTop.classList.add('header-top-hide');
                } else {
                    headerTop.classList.remove('header-top-hide');
                }
            });
        }

        // Обернуть содержимое нумерованных и маркированных списков в span

        if (document.querySelector('.article__num-list')) {
            document.querySelectorAll('.article__num-list li').forEach(li => {
                
                const wrapper = document.createElement('span');
                
                while (li.childNodes.length > 0) {
                    wrapper.appendChild(li.childNodes[0]);
                }
                
                li.appendChild(wrapper);
            });
        }
   
    
});