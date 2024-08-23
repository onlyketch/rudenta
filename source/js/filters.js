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