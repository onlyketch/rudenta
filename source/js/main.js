document.addEventListener('DOMContentLoaded', function() {

    //Переключение фильтра «Клиника»

    let filtersLinks = document.querySelectorAll('.filters__link');
    filtersLinks[0].classList.add('filters__link-active');

    for (let i = 0; i < filtersLinks.length; i++) {
        
        filtersLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            filtersLinks.forEach( function(item) {
                item.classList.remove('filters__link-active');
            });

            filtersLinks[i].classList.add('filters__link-active');
        });
    }

    //Переключение фильтра «Клиника» мобильное меню
    let filtersLinksMob = document.querySelectorAll('.mobile-filters-menu__item-value');
    filtersLinksMob[0].classList.add('filters__link-active');

    for (let i = 0; i < filtersLinksMob.length; i++) {
        
        filtersLinksMob[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            filtersLinksMob.forEach( function(item) {
                item.classList.remove('filters__link-active');
            });

            filtersLinksMob[i].classList.add('filters__link-active');

            mobileFiltersDefaultCheck();
        });
    }


    //Фильтр «Специализация»

    let filterSpecValue = document.querySelector('.filters__specialization .filters__val');
    let filterSpecCount = document.querySelector('.filters__specialization .filters__val-count');
    let filterSpecRadio = document.querySelectorAll('input[name="specialization"]');

    filterSpecCount.textContent = filterSpecRadio.length - 1;

    function specValueUpdate() {
        for (let spec of filterSpecRadio) {
            if (spec.checked) {
                filterSpecValue.textContent = spec.value;
            }
        }
    }
    specValueUpdate();
    

    let filterSpec = document.querySelector('.filters__specialization > .filters__row');
    let switcherSpec = document.querySelector('.filters__switcher-spec');
    let switcherSpecGroup = document.querySelectorAll('.filters__switcher-spec .filters__switcher-group');

    filterSpec.addEventListener('click', function() {
        switcherSpec.classList.toggle('switcher-active');
    });

    for (let i = 0; i < switcherSpecGroup.length; i++) {
        switcherSpecGroup[i].addEventListener('click', function() {
            setTimeout( function() {
                specValueUpdate();
                switcherSpec.classList.remove('switcher-active');
            }, 600);
            
        });
    }

    function specCloseClickOutside(e) {
        if(!e.target.matches('.filters__switcher-spec, .filters__switcher-spec *, .filters__specialization *')) {
            switcherSpec.classList.remove('switcher-active');
        }
    }

    document.addEventListener('click', specCloseClickOutside);

    //Фильтр «Услуги»

    let filterServValue = document.querySelector('.filters__services .filters__val');
    let filterServCount = document.querySelector('.filters__services .filters__val-count');
    let filterServRadio = document.querySelectorAll('input[name="services"]');

    filterServCount.textContent = filterServRadio.length - 1;

    function servValueUpdate() {
        for (let spec of filterServRadio) {
            if (spec.checked) {
                filterServValue.textContent = spec.value;
            }
        }
    }
    servValueUpdate();

    let filterServ = document.querySelector('.filters__services > .filters__row');
    let switcherServ = document.querySelector('.filters__switcher-serv');
    let switcherServGroup = document.querySelectorAll('.filters__switcher-serv .filters__switcher-group');

    filterServ.addEventListener('click', function() {
        switcherServ.classList.toggle('switcher-active');
    });

    for (let i = 0; i < switcherServGroup.length; i++) {
        switcherServGroup[i].addEventListener('click', function() {
            setTimeout( function() {
                servValueUpdate();
                switcherServ.classList.remove('switcher-active');
            }, 600);
            
        });
    }

    function servCloseClickOutside(e) {
        if(!e.target.matches('.filters__switcher-serv, .filters__switcher-serv *, .filters__services *')) {
            switcherServ.classList.remove('switcher-active');
        }
    }

    document.addEventListener('click', servCloseClickOutside);

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

    //Мобильное меню фильтры

    let mobileFiltersBtn = document.querySelector('.filters-mobile__btn');
    let mobileFiltersCloseBtn = document.querySelector('.mobile-filters-menu__close');
    let mobileFiltersSubmitBtn = document.querySelector('.mobile-filters-menu__submit');
    let mobileFiltersMenu = document.querySelector('.mobile-filters-menu');
    let mobileFiltersReset = document.querySelector('.mobile-filters-menu__reset');
    let mobileFiltersBody = document.querySelector('.mobile-filters-menu__body'); 
    let mobileFiltersSearchInput = document.querySelector('.mobile-filters-menu__search-input');
    let mobileFiltersBodyOpen = false;

    mobileFiltersBtn.addEventListener('click', function() {
        mobileFiltersMenu.style.visibility = 'visible';
        document.body.classList.add('body-overflow');

        if (!mobileFiltersBodyOpen) {
            mobileFiltersBody.style.bottom = '0';
            mobileFiltersBodyOpen = true; 
        }
    });

    mobileFiltersCloseBtn.addEventListener('click', function() {
        if (mobileFiltersBodyOpen) {
            mobileFiltersBody.style.bottom = '-100%';
            mobileFiltersBodyOpen = false;
        }

        setTimeout(function() {
            mobileFiltersMenu.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400);    
    });

    mobileFiltersReset.addEventListener('click', function() {
        
        filtersLinksMob.forEach( function(item) {
            item.classList.remove('filters__link-active');
        });

        filtersLinksMob[0].classList.add('filters__link-active');

        mobileSpecRadio[0].checked = true;
        mobSpecValueUpdate();

        mobileServRadio[0].checked = true;
        mobServValueUpdate();

        mobileFiltersSearchInput.value = '';

        mobileFiltersDefaultCheck();
    });

    mobileFiltersSubmitBtn.addEventListener('click', function() {
        if (mobileFiltersBodyOpen) {
            mobileFiltersBody.style.bottom = '-100%';
            mobileFiltersBodyOpen = false;
        }

        setTimeout(function() {
            mobileFiltersMenu.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400);    
    });

    mobileFiltersSearchInput.addEventListener('input', function() {
        mobileFiltersDefaultCheck();
    });

    //Мобильное меню фильтры «Специализация»

    let mobileFiltersSpecValue = document.querySelector('.mobile-filters-menu__val-spec');
    let mobileSpecRadio = document.querySelectorAll('input[name="mob-specialization"]');

    function mobSpecValueUpdate() {
        for (let spec of mobileSpecRadio) {
            if (spec.checked) {
                mobileFiltersSpecValue.textContent = spec.value;
            }
        }
    }

    mobSpecValueUpdate();
    
    let mobileFilterSpec = document.getElementById('mob-filter-spec');
    let mobileSpecMenu = document.querySelector('.mobile-spec-menu');
    let mobileSpecMenuClose = document.querySelector('.mobile-spec-menu__close');
    let mobileSpecMenuReset = document.querySelector('.mobile-spec-menu__reset'); 
    let mobileSpecMenuSubmit = document.querySelector('.mobile-spec-menu__submit');
    let mobileSpecMenuOpen = false;

    mobileFilterSpec.addEventListener('click', function() {
        if (!mobileSpecMenuOpen) {
            mobileSpecMenu.style.bottom = '0';
            mobileSpecMenuOpen = true;
        }
    });

    mobileSpecMenuClose.addEventListener('click', function() {
        if (mobileSpecMenuOpen) {
            mobileSpecMenu.style.bottom = '-100%';
            mobileSpecMenuOpen = false;
        }
    });

    mobileSpecMenuReset.addEventListener('click', function() {
        mobileSpecRadio[0].checked = true;
        mobSpecValueUpdate();
        mobileSpecMenuDefaultCheck();
    });

    mobileSpecMenuSubmit.addEventListener('click', function() {
        if (mobileSpecMenuOpen) {
            mobSpecValueUpdate();
            mobileSpecMenu.style.bottom = '-100%';
            mobileSpecMenuOpen = false;
        }
        mobileFiltersDefaultCheck();
    });

    //Мобильное меню фильтры «Услуги»

    let mobileFiltersServValue = document.querySelector('.mobile-filters-menu__val-serv');
    let mobileServRadio = document.querySelectorAll('input[name="mob-services"]');

    function mobServValueUpdate() {
        for (let spec of mobileServRadio) {
            if (spec.checked) {
                mobileFiltersServValue.textContent = spec.value;
            }
        }
    }

    mobServValueUpdate();

    let mobileFilterServ = document.getElementById('mob-filter-serv');
    let mobileServMenu = document.querySelector('.mobile-serv-menu');
    let mobileServMenuClose = document.querySelector('.mobile-serv-menu__close');
    let mobileServMenuReset = document.querySelector('.mobile-serv-menu__reset'); 
    let mobileServMenuSubmit = document.querySelector('.mobile-serv-menu__submit');
    let mobileServMenuOpen = false;

    mobileFilterServ.addEventListener('click', function() {
        if (!mobileServMenuOpen) {
            mobileServMenu.style.bottom = '0';
            mobileServMenuOpen = true;
        }
    });

    mobileServMenuClose.addEventListener('click', function() {
        if (mobileServMenuOpen) {
            mobileServMenu.style.bottom = '-100%';
            mobileServMenuOpen = false;
        }
    });

    mobileServMenuReset.addEventListener('click', function() {
        mobileServRadio[0].checked = true;
        mobServValueUpdate();
        mobileServMenuDefaultCheck();
    });

    mobileServMenuSubmit.addEventListener('click', function() {
        if (mobileServMenuOpen) {
            mobServValueUpdate();
            mobileServMenu.style.bottom = '-100%';
            mobileServMenuOpen = false;
        }
        mobileFiltersDefaultCheck();
    });

    //Отображение/скрытие кнопки сбросить в мобильных фильтрах

    function mobileFiltersDefaultCheck() {
        if ( filtersLinksMob[0].classList.contains('filters__link-active') 
            && mobileSpecRadio[0].checked && mobileServRadio[0].checked && mobileFiltersSearchInput.value == '') {
                mobileFiltersReset.style.visibility = 'hidden';
        } else {
            mobileFiltersReset.style.visibility = 'visible';
        }
        mobileServMenuDefaultCheck();
        mobileSpecMenuDefaultCheck();
    }

    function mobileServMenuDefaultCheck() {
        if (mobileServRadio[0].checked) {
            mobileServMenuReset.style.visibility = 'hidden';
        } else {
            mobileServMenuReset.style.visibility = 'visible';
        }
    }

    function mobileSpecMenuDefaultCheck() {
        if (mobileSpecRadio[0].checked) {
            mobileSpecMenuReset.style.visibility = 'hidden';
        } else {
            mobileSpecMenuReset.style.visibility = 'visible';
        } 
    }

    for (let radio of mobileServRadio) {
        radio.addEventListener('change', function() {
            mobileServMenuDefaultCheck();
        } );
    }

    for (let radio of mobileSpecRadio) {
        radio.addEventListener('change', function() {
            mobileSpecMenuDefaultCheck();
        } );
    }


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

    for (let button of callBackFormBtns) {
            
        button.addEventListener('click', function() {

            if( window.innerWidth > 1023 ) {

            callBackBox.style.visibility = 'visible';
            document.body.classList.add('body-overflow');

            if (!callBackFormBodyOpen) {
                callBackFormBody.style.right = '0';
                callBackFormBodyOpen = true;
            }

            }
        });

    }

    callBackFormClose.addEventListener('click', function() {
        if (callBackFormBodyOpen) {
            callBackFormBody.style.right = '-100%';
            callBackFormBodyOpen = false;
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

        if (callBackInputPhone.value == '' || isNaN(callBackInputPhone.value) || String(callBackInputPhone.value).length < 10) {
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
            if (callBackFormBodyOpen) {
                callBackFormBody.style.right = '-100%';
                callBackFormBodyOpen = false;
            }
            callBackSuccess.style.right = '0';
        } 
    })

    callBackSuccessClose.addEventListener('click', function() {

        callBackSuccess.style.right = '-100%';

        setTimeout(function() {

            // callBackInputName.classList.remove('error');
            // callBackInputPhone.classList.remove('error');
            // callBackInputNameError.style.display = 'none';
            // callBackInputPhoneError.style.display = 'none';
            // callBackInputCheckBoxError.style.display = 'none';

            callBackInputName.value = '';
            callBackInputPhone.value = '';
            callBackInputComment.value = '';
            callBackInputCheckBox.checked = false;

            callBackBox.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400); 
    });


});