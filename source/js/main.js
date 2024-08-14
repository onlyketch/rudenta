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
    let switcherSpecNames = document.querySelectorAll('.filters__switcher-spec .filters__switcher-name');

    filterSpec.addEventListener('click', function() {
        switcherSpec.classList.toggle('switcher-active');
    });

    for (let i = 0; i < switcherSpecNames.length; i++) {
        switcherSpecNames[i].addEventListener('click', function() {
            setTimeout( function() {
                specValueUpdate();
                switcherSpec.classList.remove('switcher-active');
            }, 450);
            
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
    let switcherServNames = document.querySelectorAll('.filters__switcher-serv .filters__switcher-name');

    filterServ.addEventListener('click', function() {
        switcherServ.classList.toggle('switcher-active');
    });

    for (let i = 0; i < switcherServNames.length; i++) {
        switcherServNames[i].addEventListener('click', function() {
            setTimeout( function() {
                servValueUpdate();
                switcherServ.classList.remove('switcher-active');
            }, 450);
            
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
    let mobileFiltersOverlay = document.querySelector('.mobile-filters-menu__overlay');
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

    //при изменении размера окна (ресайзе), скрываем мобильное меню

    window.addEventListener('resize', function() {
        if (mobileFiltersBodyOpen) {
            mobileFiltersBody.style.bottom = '-100%';
            mobileFiltersBodyOpen = false;
            mobileFiltersMenu.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }
    });




});