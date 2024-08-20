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
                    
                    if (callBackFormBodyOpen) {
                        callBackFormBody.style.right = '-100%';
                        callBackFormBodyOpen = false;
                    }
                    callBackSuccess.style.right = '0';   
                 
                }
           
            });
        }
    });

    callBackSuccessClose.addEventListener('click', function() {

        callBackSuccess.style.right = '-100%';

        setTimeout(function() {
            callBackInputName.value = '';
            callBackInputPhone.value = '';
            callBackInputComment.value = '';
            callBackInputCheckBox.checked = false;

            callBackBox.style.visibility = 'hidden';
            document.body.classList.remove('body-overflow');
        }, 400); 
    });


});