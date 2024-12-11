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

    /************ Filters left side of reviews Start  *************/ 

    let reviewsFilters = document.querySelector('.reviews__filters');
    let reviewsFiltersResetBtn = document.querySelector('.reviews__filters-reset');
    let reviewsFiltersItemClinics = document.querySelectorAll('.reviews__filters-item-clinic');
    let reviewsFiltersItemDoc = document.querySelector('.doctor');
    let reviewsFiltersItemServ = document.querySelector('.service');
    let reviewsFiltersValueDoc = document.getElementById('doc-val');
    let reviewsFiltersValueServ = document.getElementById('service-val');  
    let reviewsFiltersDropDownDoc = document.querySelector('.doc');
    let reviewsFiltersDropDownServ = document.querySelector('.serv');
    let reviewsFiltersDropDownItems = document.querySelectorAll('.reviews__filters-item-dropdown-item');
    let reviewsFiltersDropDownCheckboxesGroups = document.querySelectorAll('.reviews__filters-item-dropdown-checkboxes');
    let selectedCheckboxesArray = [];

    

    if (reviewsFilters !== null) {

        for (let i = 0; i < reviewsFiltersItemClinics.length; i++) {
            reviewsFiltersItemClinics[i].addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    for (let item of reviewsFiltersItemClinics) {
                        item.classList.remove('active');
                    }
                    this.classList.add('active');
                }
            });
        };

        reviewsFiltersItemDoc.addEventListener('click', function() {
            reviewsFiltersDropDownDoc.classList.toggle('show');
        });

        reviewsFiltersItemServ.addEventListener('click', function() {
            reviewsFiltersDropDownServ.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            const withinBoundaries = e.composedPath().includes(reviewsFiltersDropDownDoc);
            const withinBtn = e.composedPath().includes(reviewsFiltersItemDoc);
         
            if ( !withinBoundaries && !withinBtn ) {
                if (reviewsFiltersDropDownDoc.classList.contains('show')) {
                    reviewsFiltersDropDownDoc.classList.remove('show');
                }
            }
        });

        document.addEventListener('click', function(e) {
            const withinBoundaries = e.composedPath().includes(reviewsFiltersDropDownServ);
            const withinBtn = e.composedPath().includes(reviewsFiltersItemServ);
         
            if ( !withinBoundaries && !withinBtn ) {
                if (reviewsFiltersDropDownServ.classList.contains('show')) {
                    reviewsFiltersDropDownServ.classList.remove('show');
                }
            }
        });

        for (let i = 0; i < reviewsFiltersDropDownItems.length; i++) {
            reviewsFiltersDropDownItems[i].addEventListener('click', function() {
                for (let item of reviewsFiltersDropDownItems) {
                    if (item.classList.contains('choosed')) {
                        item.classList.remove('choosed');
                    }
                }
                reviewsFiltersDropDownItems[i].classList.add('choosed');
                reviewsFiltersValueDoc.value = this.querySelector('.reviews__filters-item-dropdown-docname').textContent;
            });
        };


        for (let i = 0; i < reviewsFiltersDropDownCheckboxesGroups.length; i ++) {
            let checkboxMain = reviewsFiltersDropDownCheckboxesGroups[i].querySelector('.checkbox-main');
            let groupCheckboxes = reviewsFiltersDropDownCheckboxesGroups[i].querySelectorAll('.checkbox-group-item');
            checkboxMain.addEventListener('click', function() {
                for (let i = 0; i < groupCheckboxes.length; i++) {
                    groupCheckboxes[i].checked = this.checked;
                    groupCheckboxes[i].dispatchEvent(new Event('change'));
                }
            });

            for (let i = 0; i < groupCheckboxes.length; i++) {
                groupCheckboxes[i].addEventListener('change', function() {
                    if (groupCheckboxes[i].checked) {
                        selectedCheckboxesArray.push(groupCheckboxes[i].value);
                    } else {
                        selectedCheckboxesArray = selectedCheckboxesArray.filter(function(item) {
                            if (item !== groupCheckboxes[i].value) {
                                return true;
                            } 
                        });
                    }
                    let selectedCheckboxesValues = selectedCheckboxesArray.join(', ');
                    reviewsFiltersValueServ.value = selectedCheckboxesValues; 
                });
            }
        };

        reviewsFiltersResetBtn.addEventListener('click', function() {
            reviewsFiltersValueDoc.value = '';
            reviewsFiltersValueServ.value = '';
            
            for (let i = 0; i < reviewsFiltersDropDownCheckboxesGroups.length; i++) {
                let checkboxMain = reviewsFiltersDropDownCheckboxesGroups[i].querySelector('.checkbox-main');
                let groupCheckboxes = reviewsFiltersDropDownCheckboxesGroups[i].querySelectorAll('.checkbox-group-item');

                checkboxMain.checked = false;
                
                for (let item of groupCheckboxes) {
                    item.checked = false;
                }

                for (let item of reviewsFiltersDropDownItems) {
                    if (item.classList.contains('choosed')) {
                        item.classList.remove('choosed');
                    }
                }

                for (let item of reviewsFiltersItemClinics) {
                    item.classList.remove('active');
                }

                reviewsFiltersItemClinics[0].classList.add('active');
            }
        });

    };


    /************ Filters left side of reviews End  *************/

    
    /************ Filter above the list of reviews Start *************/

    let filterAboveReviewsBtn = document.querySelector('.reviews__reviews-filter-btn');
    let filterAboveReviewsDropDown = document.querySelector('.reviews__reviews-filter-dropdown');
    let filterAboveReviewsValue = document.querySelector('.reviews__reviews-filter-btn-val');
    let filterAboveReviewsItems = document.querySelectorAll('.reviews__reviews-filter-dropdown-item');
    
    if (filterAboveReviewsBtn !== null) {

        for (let item of filterAboveReviewsItems) {
            item.addEventListener('click', function() {
                filterAboveReviewsValue.textContent = item.textContent;
                filterAboveReviewsDropDown.classList.remove('show');
            });
        }

        filterAboveReviewsBtn.addEventListener('click', function() {
            filterAboveReviewsDropDown.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            const withinBoundaries = e.composedPath().includes(filterAboveReviewsDropDown);
            const withinBtn = e.composedPath().includes(filterAboveReviewsBtn);
         
            if ( !withinBoundaries && !withinBtn ) {
                if (filterAboveReviewsDropDown.classList.contains('show')) {
                    filterAboveReviewsDropDown.classList.remove('show');
                }
            }
        })

    }

    /************ Filter above the list of reviews End *************/




    /************ Paginations for page Reviews Start *************/ 

    let paginationBtnLeft = document.querySelector('.reviews__reviews-pagination-left');
    let paginationBtnRight = document.querySelector('.reviews__reviews-pagination-right');
    let paginationItems = document.querySelectorAll('.reviews__reviews-pagination-item');
    
    if (paginationBtnLeft !== null) {
        paginationBtnLeft.addEventListener('click', function() {
            if (!paginationBtnLeft.classList.contains('active')) {
                paginationBtnRight.classList.remove('active');
                paginationBtnLeft.classList.add('active');
            }
        });
    }

    if (paginationBtnRight !== null) {
        paginationBtnRight.addEventListener('click', function() {
            if (!paginationBtnRight.classList.contains('active')) {
                paginationBtnLeft.classList.remove('active');
                paginationBtnRight.classList.add('active');
            }
        });
    }

    if (paginationItems[0] !== null) {
        for (let i = 0; i < paginationItems.length; i++) {
            paginationItems[i].addEventListener('click', function() {
                if (!paginationItems[i].classList.contains('active')) {
                    for (let item of paginationItems) {
                        item.classList.remove('active');
                    }
                    paginationItems[i].classList.add('active');
                }
            });
        }
    }

    /************ Paginations End *************/

    /************ Reviews Resource Overlay Start *************/

    let reviewsResourcesBtnAll = document.querySelector('.reviews__resources-btn-all');
    let resourcesPanel = document.querySelector('.resources-panel');
    let resourcesPanelBody = document.querySelector('.resources-panel__body');
    let resourcesPanelCloseBtn = document.querySelector('.resources-panel__close');

    if (reviewsResourcesBtnAll !== null) {

        reviewsResourcesBtnAll.addEventListener('click', function() {
            resourcesPanel.classList.add('show');
            resourcesPanelBody.classList.add('open');
            document.body.classList.add('body-overflow');
        });

        resourcesPanelCloseBtn.addEventListener('click', function() {
            resourcesPanelBody.classList.remove('open');
            setTimeout(function() {
                resourcesPanel.classList.remove('show');
                document.body.classList.remove('body-overflow'); 
            }, 500);
            
        });
    }
     /************ Reviews Resource Overlay End *************/

    

 




    
});