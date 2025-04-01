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

    for (let i = 0; i < headerAreaNavLinkServices.length; i++) {
        headerAreaNavLinkServices[i].addEventListener('click', function() {
            servicesMenu.classList.add('open');
            headerAreaNav.classList.add('has-active');
            this.classList.add('active');
            document.body.classList.add('body-overflow');
        });
    }


    //Главное меню внутри

    let servicesMenuItems = document.querySelectorAll('.services-menu__main-service');
    let servicesMenuItemsList = document.querySelector('.services-menu__main-list');
    let servicesMenuMainBlock = document.querySelector('.services-menu__main');
    let servicesMenuServiceBlock = document.querySelector('.services-menu__service');
    let servicesMenuAdvertBlock = document.querySelector('.services-menu__advert');
    let serviceMenuBlockTitle = servicesMenuServiceBlock.querySelector('.services-menu__service-title');

    document.addEventListener('click', function(e) {
        if (servicesMenu.classList.contains('open')) {
        const withinHeaderLinkServicesFirst = e.composedPath().includes(headerAreaNavLinkServices[0]);
        const withinHeaderLinkServicesSecond = e.composedPath().includes(headerAreaNavLinkServices[1]);
        const withinMenuMain = e.composedPath().includes(servicesMenuMainBlock);
        const withinMenuService = e.composedPath().includes(servicesMenuServiceBlock);
        const withinMenuAdvert = e.composedPath().includes(servicesMenuAdvertBlock);
     
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

            headerAreaNav.classList.remove('has-active');
            for (let item of headerAreaNavLinkServices) {
                item.classList.remove('active');
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

    mobMenuServicesItem.addEventListener('click', function() {
        mobMenuMain.classList.add('hide');
        mobMenuServices.classList.add('open');
        mobNavigatorMenuName.textContent = 'Услуги';
    });


    //меню услуг
    let mobMenuServicesItems = document.querySelectorAll('.mobile-menu__services-item');
    let mobMenuServicesBackBtn = document.querySelector('.mobile-menu__services-back-btn');

    mobMenuServicesBackBtn.addEventListener('click', function() {
        mobMenuServices.classList.remove('open');
        mobMenuMain.classList.remove('hide');
        for (let item of mobMenuServicesItems) {
            if (item.classList.contains('open')) item.classList.remove('open');
            if (item.classList.contains('pale')) item.classList.remove('pale');
        }
        mobNavigatorMenuName.textContent = 'Меню';
    });

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
        
        mobMenuServicesItemWrapper.addEventListener('click', function(e) {
            if (mobMenuServicesItems[i].classList.contains('pale')) {
                mobMenuServicesItems[i].classList.remove('pale')
            }
            let itemOpenCounter = 0;
            for (let item of mobMenuServicesItems) {
                let itemWrapper = item.querySelector('.mobile-menu__services-item-wrapper');
                if (item.classList.contains('open') && itemWrapper !== e.currentTarget) {
                    item.classList.remove('open'); 
                }
            }
            mobMenuServicesItems[i].classList.toggle('open');
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

    let doctorDetailDocumentPreview = document.querySelectorAll('.doctor-detail__data-achievement-document');
    let doctorDetailDocumentModal = document.querySelector('.doctor-detail__document');
    let doctorDetailDocumentModalClose = document.querySelector('.doctor-detail__document-close');
    let doctorDetailDocumentFullSize = document.querySelector('.doctor-detail__document-body-img');

    if (doctorDetailDocumentPreview.length !== 0) {

        for (let i = 0; i < doctorDetailDocumentPreview.length; i++) {
            doctorDetailDocumentPreview[i].addEventListener('click', function(e) {
                e.stopPropagation();
                let pathToFullSizeImage = doctorDetailDocumentPreview[i].getAttribute('data-target');
                doctorDetailDocumentFullSize.setAttribute('src', pathToFullSizeImage);
                doctorDetailDocumentModal.classList.add('open');
                if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                    document.body.classList.add('body-overflow');
                }
                
            });
        }

        doctorDetailDocumentModalClose.addEventListener('click', function() {
            doctorDetailDocumentModal.classList.remove('open');
            if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                document.body.classList.remove('body-overflow');
            }
        });

        document.addEventListener('click', function(e) {
            if (doctorDetailDocumentModal.classList.contains('open')) {
                const withinimageFull = e.composedPath().includes(doctorDetailDocumentFullSize);
                const withinCloseBtn = e.composedPath().includes(doctorDetailDocumentModalClose);

                if ( !withinimageFull && !withinCloseBtn ) {
                    doctorDetailDocumentModal.classList.remove('open');
                    if (!document.querySelector('.sidebar-details-panel.sidebar-details-open')) {
                        document.body.classList.remove('body-overflow');
                    }
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
            if (document.querySelector('.sidebar-details-open') !== null) {
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

    
    
});