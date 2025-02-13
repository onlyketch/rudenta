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


    //Мобильное меню фильтры «Услуги»

    let mobFiltersServicesItem = document.getElementById('mobile-filters-serv-item');
    let mobServicesMenu = document.querySelector('.mobile-services-menu');
    let mobServicesMenuClose = document.querySelector('.mobile-services-menu__close');
    let mobileServiceMenuItems = document.querySelectorAll('.mobile-services-menu__item');
    let mobFiltersServicesInput = document.getElementById('mob-filters-service-val');

    mobFiltersServicesItem.addEventListener('click', function() {
        mobServicesMenu.classList.add('show');
    });

    for (let i = 0; i < mobileServiceMenuItems.length; i++) {
        mobileServiceMenuItems[i].addEventListener('click', function() {
            let itemName = this.querySelector('.mobile-services-menu__name');
            for (let item of mobileServiceMenuItems) {
                if (item.classList.contains('choosed')) {
                    item.classList.remove('choosed');
                } 
            }
            this.classList.add('choosed');
            mobFiltersServicesInput.defaultValue = itemName.textContent;
            mobServicesMenu.classList.remove('show');
            mobileFiltersDefaultCheck();
        });
    }

    mobServicesMenuClose.addEventListener('click', function() {
        mobServicesMenu.classList.remove('show');
    });

    //Мобильное меню фильтры «Врач»

    let mobFiltersDocItem = document.getElementById('mobile-filters-doc-item');
    let mobDocMenu = document.querySelector('.mobile-doctors-menu');
    let mobDocMenuClose = document.querySelector('.mobile-doctors-menu__close');
    let mobileDocMenuItems = document.querySelectorAll('.mobile-doctors-menu__item');
    let mobFiltersDocInput = document.getElementById('mob-filters-doctor-val');

    mobFiltersDocItem.addEventListener('click', function() {
        mobDocMenu.classList.add('show');
    });

    for (let i = 0; i < mobileDocMenuItems.length; i++) {
        mobileDocMenuItems[i].addEventListener('click', function() {
            let itemName = this.querySelector('.mobile-doctors-menu__docname');
            for (let item of mobileDocMenuItems) {
                if (item.classList.contains('choosed')) {
                    item.classList.remove('choosed');
                } 
            }
            this.classList.add('choosed');
            mobFiltersDocInput.defaultValue = itemName.textContent;
            mobDocMenu.classList.remove('show');
            mobileFiltersDefaultCheck();
        });
    }

    mobDocMenuClose.addEventListener('click', function() {
        mobDocMenu.classList.remove('show');
    });

    //reset & submit

    mobileFiltersReset.addEventListener('click', function() {
        
        filtersLinksMob.forEach( function(item) {
            item.classList.remove('filters__link-active');
        });

        filtersLinksMob[0].classList.add('filters__link-active');

        mobFiltersServicesInput.defaultValue = '';
        mobFiltersDocInput.defaultValue = '';

        for (let item of mobileServiceMenuItems) {
            if (item.classList.contains('choosed')) {
                item.classList.remove('choosed');
            }
        }

        for (let item of mobileDocMenuItems) {
            if (item.classList.contains('choosed')) {
                item.classList.remove('choosed');
            }
        }

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

    //Отображение/скрытие кнопки сбросить в мобильных фильтрах

    function mobileFiltersDefaultCheck() {
        if ( filtersLinksMob[0].classList.contains('filters__link-active') 
            && mobFiltersServicesInput.defaultValue == '' && mobFiltersDocInput.defaultValue == '') {
                mobileFiltersReset.style.visibility = 'hidden';
        } else {
            mobileFiltersReset.style.visibility = 'visible';
        }
    }


});