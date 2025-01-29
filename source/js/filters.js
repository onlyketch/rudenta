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
    
    
        //Фильтр «Услуги»
    
        let filterServValue = document.getElementById('filter-serv');
        let filterServ = document.querySelector('.filters__services');
        let switcherServ = document.querySelector('.filters__switcher-serv');
        let switcherServItems = document.querySelectorAll('.filters__switcher-serv > .filters__switcher-item');
    
        filterServ.addEventListener('click', function(e) {
            e.stopPropagation();
            switcherServ.classList.toggle('switcher-active');
        });

        for (let i = 0; i < switcherServItems.length; i++) {
            switcherServItems[i].addEventListener('click', function() {
                if (!switcherServItems[i].classList.contains('active')) {
                    let servName = switcherServItems[i].querySelector('.filters__switcher-item-name');
                    filterServValue.defaultValue = servName.textContent;
                    filterServValue.value = servName.textContent;

                    for (let item of switcherServItems) {
                        if (item.classList.contains('active')) {
                            item.classList.remove('active'); 
                        }
                    }
                    switcherServItems[i].classList.add('active');
                } 
            });
        }
    
    
        function servCloseClickOutside(e) {
            if(!e.target.matches('.filters__switcher-serv, .filters__switcher-serv *, .filters__services *')) {
                switcherServ.classList.remove('switcher-active');
            }
        }
    
        document.addEventListener('click', servCloseClickOutside);

    //Фильтр «Врач»
    
    let filterDocValue = document.getElementById('filter-doc');
    let filterDoc = document.querySelector('.filters__doctor');
    let switcherDoc = document.querySelector('.filters__switcher-doc');
    let switcherDocItems = document.querySelectorAll('.filters__switcher-doc > .filters__switcher-item');

    filterDoc.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!switcherDoc.classList.contains('switcher-active')) {
            filterDocValue.focus();
        } else {
            filterDocValue.blur();
        }
        switcherDoc.classList.toggle('switcher-active');
    });

    for (let i = 0; i < switcherDocItems.length; i++) {
        switcherDocItems[i].addEventListener('click', function() {
            if (!switcherDocItems[i].classList.contains('active')) {
                let docName = switcherDocItems[i].querySelector('.filters__switcher-item-docname');
                filterDocValue.defaultValue = docName.textContent;
                filterDocValue.value = docName.textContent;

                for (let item of switcherDocItems) {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active'); 
                    }
                }
                switcherDocItems[i].classList.add('active');
            } 
        });
    }

    function docCloseClickOutside(e) {
        if(!e.target.matches('.filters__switcher-doc, .filters__switcher-doc *, .filters__doctor *')) {
            switcherDoc.classList.remove('switcher-active');
        }
    }

    document.addEventListener('click', docCloseClickOutside);

    //Сброс Фильтров

    let filterResetButton = document.querySelector('.filters__counter-reset');

    filterResetButton.addEventListener('click', function() {
        
        if (!filtersLinks[0].classList.contains('filters__link-active')) {
            
            filtersLinks.forEach( function(item) {
                item.classList.remove('filters__link-active');
            });

            filtersLinks[0].classList.add('filters__link-active');
        }

        if (filterServValue.defaultValue !== '') {
            filterServValue.defaultValue = '';
            filterServValue.value = '';

            for (let item of switcherServItems) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active'); 
                }
            }
        }

        if (filterDocValue.defaultValue !== '') {
            filterDocValue.defaultValue = '';
            filterDocValue.value = '';

            for (let item of switcherDocItems) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active'); 
                }
            }
        }

        
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
            mobileSpecMenu.style.visibility = 'visible';
            mobileSpecMenu.style.bottom = '0';
            mobileSpecMenuOpen = true;
        }
    });

    mobileSpecMenuClose.addEventListener('click', function() {
        if (mobileSpecMenuOpen) {
            mobileSpecMenu.style.bottom = '-100%';
            mobileSpecMenuOpen = false;
            setTimeout(function() {
                mobileSpecMenu.style.visibility = 'hidden';
            }, 500);
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
            setTimeout(function() {
                mobileSpecMenu.style.visibility = 'hidden';
            }, 500);
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
            mobileServMenu.style.visibility = 'visible';
            mobileServMenu.style.bottom = '0';
            mobileServMenuOpen = true;
        }
    });

    mobileServMenuClose.addEventListener('click', function() {
        if (mobileServMenuOpen) {
            mobileServMenu.style.bottom = '-100%';
            mobileServMenuOpen = false;
            setTimeout(function() {
                mobileServMenu.style.visibility = 'hidden';
            }, 500);
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
            setTimeout(function() {
                mobileServMenu.style.visibility = 'hidden';
            }, 500);
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


});