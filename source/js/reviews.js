document.addEventListener('DOMContentLoaded', function() {

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
              reviewsFiltersValueDoc.defaultValue = this.querySelector('.reviews__filters-item-dropdown-docname').textContent;
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
                  reviewsFiltersValueServ.defaultValue = selectedCheckboxesValues; 
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
  let filterAboveReviewsSlideMob = document.querySelector('.reviews-mob-sorting-menu');
  let filterAboveReviewsSlideBodyMob = document.querySelector('.reviews-mob-sorting-menu__body');
  let filterAboveReviewsSlideCloseMob = document.querySelector('.reviews-mob-sorting-menu__close');
  let filterAboveReviewsSlideItemsMob = document.querySelectorAll('.reviews-mob-sorting-menu__item');
  
  if (filterAboveReviewsBtn !== null) {

      for (let item of filterAboveReviewsItems) {
          item.addEventListener('click', function() {
              filterAboveReviewsValue.textContent = item.textContent;
              filterAboveReviewsDropDown.classList.remove('show');
          });
      }

      filterAboveReviewsBtn.addEventListener('click', function() {
          if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
              filterAboveReviewsSlideMob.classList.add('show');
              filterAboveReviewsSlideBodyMob.classList.add('open');
              document.body.classList.add('body-overflow');
          } else {
              filterAboveReviewsDropDown.classList.toggle('show');
          }
      });

      filterAboveReviewsSlideCloseMob.addEventListener('click', function() {
          filterAboveReviewsSlideBodyMob.classList.remove('open');
          setTimeout(function() {
              filterAboveReviewsSlideMob.classList.remove('show');
              document.body.classList.remove('body-overflow');
          }, 500);
      });

      for (let i = 0; i < filterAboveReviewsSlideItemsMob.length; i++) {
          filterAboveReviewsSlideItemsMob[i].addEventListener('click', function() {
              for (let item of filterAboveReviewsSlideItemsMob) {
                  if (item.classList.contains('choosed')) item.classList.remove('choosed');
              }
              this.classList.add('choosed');
              filterAboveReviewsValue.textContent = this.textContent;
              filterAboveReviewsSlideBodyMob.classList.remove('open');
              setTimeout(function() {
                  filterAboveReviewsSlideMob.classList.remove('show');
                  document.body.classList.remove('body-overflow');
              }, 500);
          });
      }

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

   /************ Mobile Filters of Reviews Start  *************/

   let reviewsFilterBtnMob = document.querySelector('.reviews__filter-btn-mob');
   let reviewsFiltersMenuMob = document.querySelector('.reviews-mob-filters-menu');
   let reviewsFiltersMenuBodyMob = document.querySelector('.reviews-mob-filters-menu__body');
   let reviewsFilterCloseBtnMob = document.querySelector('.reviews-mob-filters-menu__close');
   let reviewsFilterResetBtnMob = document.querySelector('.reviews-mob-filters-menu__reset');
   let reviewsFilterSubmitBtnMob = document.querySelector('.reviews-mob-filters-menu__submit');

   if (reviewsFiltersMenuMob !== null) {

      reviewsFilterBtnMob.addEventListener('click', function() {
          reviewsFiltersMenuMob.classList.add('show');
          reviewsFiltersMenuBodyMob.classList.add('open');
          document.body.classList.add('body-overflow');
          reviewsMobileFiltersCheck();
      });

      reviewsFilterCloseBtnMob.addEventListener('click', function() {
          reviewsFiltersMenuBodyMob.classList.remove('open');
          setTimeout(function() {
              reviewsFiltersMenuMob.classList.remove('show');
              document.body.classList.remove('body-overflow');  
          }, 500);
      });

      reviewsFilterSubmitBtnMob.addEventListener('click', function() {
          reviewsFiltersMenuBodyMob.classList.remove('open');
          setTimeout(function() {
              reviewsFiltersMenuMob.classList.remove('show');
              document.body.classList.remove('body-overflow');  
          }, 500);
      });

      /* Clinics Switching */

      let reviewFiltersClinicsValuesMob = document.querySelectorAll('.reviews-mob-filters-menu__item-value');

      for (let i = 0; i < reviewFiltersClinicsValuesMob.length; i++) {
          reviewFiltersClinicsValuesMob[i].addEventListener('click', function() {
              if (!this.classList.contains('active')) {
                  for (let item of reviewFiltersClinicsValuesMob) {
                      item.classList.remove('active');
                  }
                  this.classList.add('active');
                  reviewsMobileFiltersCheck();
              }
          });
      };

      /* Menu of Service */

      let reviewsFiltersServicesItemMob = document.getElementById('mob-services-menu');
      let reviewsFiltersServicesMenuMob = document.querySelector('.reviews-mob-services-menu');
      let reviewsFiltersServicesMenuCloseMob = document.querySelector('.reviews-mob-services-menu__close');
      let reviewsFiltersServicesMenuGroupsMob = document.querySelectorAll('.reviews-mob-services-menu__group');
      let reviewsFiltersServicesMenuSubmitMob = document.querySelector('.reviews-mob-services-menu__submit');
      let reviewsFiltersServicesInputValueMob = document.getElementById('mob-service-val');
      let reviewsSelectedChekboxesArrayMob = [];

      reviewsFiltersServicesItemMob.addEventListener('click', function() {
          reviewsFiltersServicesMenuMob.classList.add('open');
      });

      reviewsFiltersServicesMenuCloseMob.addEventListener('click', function() {
          reviewsFiltersServicesMenuMob.classList.remove('open');
      });

      for (let i = 0; i < reviewsFiltersServicesMenuGroupsMob.length; i++) {
          let checkboxMain = reviewsFiltersServicesMenuGroupsMob[i].querySelector('.reviews-mob-services-menu__group-input-main');
          let groupCheckboxes = reviewsFiltersServicesMenuGroupsMob[i].querySelectorAll('.reviews-mob-services-menu__group-input');
          checkboxMain.addEventListener('click', function() {
              for (let i = 0; i < groupCheckboxes.length; i++) {
                  groupCheckboxes[i].checked = this.checked;
                  groupCheckboxes[i].dispatchEvent(new Event('change'));
              }
          });
      }

      reviewsFiltersServicesMenuSubmitMob.addEventListener('click', function() {
          if (reviewsSelectedChekboxesArrayMob.length > 0) reviewsSelectedChekboxesArrayMob = [];
          let groupCheckboxes = document.querySelectorAll('.reviews-mob-services-menu__groups .reviews-mob-services-menu__group-input');
          for (let item of groupCheckboxes) {
              if (item.checked == true) reviewsSelectedChekboxesArrayMob.push(item.value);
          }
          let selectedCheckboxesValues = reviewsSelectedChekboxesArrayMob.join(', ');
          reviewsFiltersServicesInputValueMob.defaultValue = selectedCheckboxesValues;
          reviewsFiltersServicesMenuMob.classList.remove('open');
          reviewsMobileFiltersCheck();
      });

      /* Menu of Doctors */

      let reviewsFiltersDoctorsItemMob = document.getElementById('mob-doctors-menu');
      let reviewsFiltersDoctorsMenuMob = document.querySelector('.reviews-mob-doctors-menu');
      let reviewsFiltersDoctorsMenuCloseMob = document.querySelector('.reviews-mob-doctors-menu__close');
      let reviewsDoctorsMenuItemsMob = document.querySelectorAll('.reviews-mob-doctors-menu__item');
      let reviewsFiltersDoctorsInputValueMob = document.getElementById('mob-doctor-val');

      reviewsFiltersDoctorsItemMob.addEventListener('click', function() {
          reviewsFiltersDoctorsMenuMob.classList.add('open');
      });

      reviewsFiltersDoctorsMenuCloseMob.addEventListener('click', function() {
          reviewsFiltersDoctorsMenuMob.classList.remove('open');
      });

      for (let i = 0; i < reviewsDoctorsMenuItemsMob.length; i++) {
          reviewsDoctorsMenuItemsMob[i].addEventListener('click', function() {
              if (!this.classList.contains('choosed')) {
                  for (let item of reviewsDoctorsMenuItemsMob) {
                      if (item.classList.contains('choosed')) 
                          item.classList.remove('choosed');
                  }
                  this.classList.add('choosed');
                  reviewsFiltersDoctorsInputValueMob.defaultValue = this.querySelector('.reviews-mob-doctors-menu__docname').textContent;
                  reviewsFiltersDoctorsMenuMob.classList.remove('open');
                  reviewsMobileFiltersCheck();
              }
          });
      }

      /* Visibility and work of Reset Button */

      function reviewsMobileFiltersCheck() {
          if (reviewFiltersClinicsValuesMob[0].classList.contains('active') 
              && reviewsFiltersServicesInputValueMob.defaultValue == '' 
              && reviewsFiltersDoctorsInputValueMob.defaultValue == '') {
                  reviewsFilterResetBtnMob.classList.remove('visible');
              } else {
                  reviewsFilterResetBtnMob.classList.add('visible');
              }
      }

      reviewsFilterResetBtnMob.addEventListener('click', function() {
          for (let item of reviewFiltersClinicsValuesMob) {
              item.classList.remove('active');
          }

          reviewFiltersClinicsValuesMob[0].classList.add('active');
          reviewsFiltersServicesInputValueMob.defaultValue = '';
          reviewsFiltersDoctorsInputValueMob.defaultValue = '';

          let groupCheckboxes = document.querySelectorAll('.reviews-mob-services-menu__groups .reviews-mob-services-menu__group-input');

          for (let item of groupCheckboxes) {
              if (item.checked == true) item.checked = false;
          }

          for (let item of reviewsDoctorsMenuItemsMob) {
              if (item.classList.contains('choosed')) item.classList.remove('choosed');
          }

          reviewsMobileFiltersCheck();
      });

   }

   /************ Mobile Filters of Reviews End  *************/

   /************ Mobile Resources Panel Start  *************/

   let reviewsResourcesBtnAllMob = document.querySelector('.reviews__resources-btn-all-mob');
   let reviewsResourcesPanelMob = document.querySelector('.reviews-mob-resources-panel');
   let reviewsResourcesPanelBodyMob = document.querySelector('.reviews-mob-resources-panel__body');
   let reviewsResourcesPanelCloseBtnMob = document.querySelector('.reviews-mob-resources-panel__close');

   if (reviewsResourcesBtnAllMob !== null) {

      reviewsResourcesBtnAllMob.addEventListener('click', function() {
          reviewsResourcesPanelMob.classList.add('show');
          reviewsResourcesPanelBodyMob.classList.add('open');
          document.body.classList.add('body-overflow');
       });
  
       reviewsResourcesPanelCloseBtnMob.addEventListener('click', function() {
          reviewsResourcesPanelBodyMob.classList.remove('open');
          setTimeout(function() {
              reviewsResourcesPanelMob.classList.remove('show');
              document.body.classList.remove('body-overflow');
          }, 500);
       });

   }


   /************ Mobile Resources Panel End  *************/

  /************  Feedback Form Start  *************/
  let feedbackCallButtons = document.querySelectorAll('.callfeedback');
  let feedbackForm = document.querySelector('.feedback-form');
  let feedbackTagForm = document.querySelector('.feedback-form__form');
  let feedbackFormBody = document.querySelector('.feedback-form__body');
  let feedbackFormSuccess = document.querySelector('.feedback-form__success');
  let feedbackFormClose = document.querySelector('.feedback-form__close');
  let feedbackFormSuccessClose = document.querySelector('.feedback-form__success-close');
  let feedbackFormInputPhone = document.getElementById('feedback-form-phone');
  let feedbackFormTextarea = document.getElementById('feedback-form-review');
  let feedbackFormFieldGrade = document.getElementById('feedback-field-grade');
  let feedbackFormFieldReview = document.querySelector('.feedback-form__form-field-review');
  let feedbackFormFieldClinic = document.getElementById('feedback-field-clinic');
  let feedbackFormFieldService = document.getElementById('feedback-field-service');
  let feedbackFormFieldName = document.getElementById('feedback-field-name');
  let feedbackFormFieldCity = document.getElementById('feedback-field-city');
  let feedbackFormFieldDoctor = document.getElementById('feedback-field-doctor');
  let feedbackFormFieldConditions = document.querySelector('.feedback-form__form-conditions'); 
  let feedbackFormFieldClinicDropItems = feedbackFormFieldClinic.querySelectorAll('.feedback-form__form-field-dropdown-item');
  let feedbackFormFieldServiceDropItems = feedbackFormFieldService.querySelectorAll('.feedback-form__form-field-dropdown-item');
  let feedbackFormFieldCityDropItems = feedbackFormFieldCity.querySelectorAll('.feedback-form__form-field-dropdown-item');
  let feedbackFormFieldDoctorDropItems = feedbackFormFieldDoctor.querySelectorAll('.feedback-form__form-field-dropdown-item');
  let feedbackFormFieldClinicInput = document.getElementById('feedback-form-clinic');
  let feedbackFormFieldServiceInput = document.getElementById('feedback-form-service');
  let feedbackFormFieldCityInput = document.getElementById('feedback-form-city');
  let feedbackFormFieldDoctorInput = document.getElementById('feedback-form-doctor');
  let feedbackFormGradeInput = document.getElementById('feedback-form-grade');
  let feedbackFormNameInput = document.getElementById('feedback-form-name');
  let feedbackFormConditionsCheckBox = document.getElementById('feedback-form-conditions-checkbox');
  let feedbackFormFieldTokenBox = document.querySelector('.feedback-form__form-field-tokenbox');
  let feedbackFormFieldTokenCloseBtns = null;
  let feedbackFormFieldTokensCounter = 0;
  let feedbackFormFieldHaveError = false;
  let feedbackFormOpenClass = 'open';

  if (window.innerWidth < 740) {
    feedbackFormOpenClass = 'open-mob';
  }

  if (feedbackForm !== null) {
      for (let btn of feedbackCallButtons) {
          btn.addEventListener('click', function() {
              feedbackForm.classList.add('show');
              feedbackFormBody.classList.add(feedbackFormOpenClass); 
              feedbackFormBody.scrollTop = 0;
              document.body.classList.add('body-overflow');
          });
      }

      feedbackFormClose.addEventListener('click', function() {
          feedbackFormBody.classList.remove(feedbackFormOpenClass);
          setTimeout(function() {
              feedbackForm.classList.remove('show');
              document.body.classList.remove('body-overflow');
          }, 400);
      });

      feedbackFormSuccessClose.addEventListener('click', function() {
        feedbackFormSuccess.classList.remove(feedbackFormOpenClass);
        setTimeout(function() {
            feedbackForm.classList.remove('show');
            document.body.classList.remove('body-overflow');
        }, 400); 
      });

      function showDropDown(fieldName) {
          let fieldInput = fieldName.querySelector('input');
          fieldName.addEventListener('click', function(e) {
              e.stopPropagation();
              let feedbackFormFieldDropDown = this.querySelector('.feedback-form__form-field-dropdown');
              if (fieldInput.getAttribute('type') !== null) {
                  fieldInput.focus();
                  feedbackFormFieldDropDown.classList.add('show');
              } else {
                  feedbackFormFieldDropDown.classList.toggle('show');
              }

              if (feedbackFormFieldDoctorInput.classList.contains('hide')) {
                  feedbackFormFieldDoctorInput.classList.remove('hide');
                  feedbackFormFieldDoctorInput.focus();
              }
          });
      };

      function hideWhenClickOutside(elem, e) {
          let feedbackFormFieldDropDown = elem.querySelector('.feedback-form__form-field-dropdown');
          const withinBoundaries = e.composedPath().includes(feedbackFormFieldDropDown);
          const withinField = e.composedPath().includes(elem);
       
          if ( !withinBoundaries && !withinField ) {
              if (feedbackFormFieldDropDown.classList.contains('show')) {
                  feedbackFormFieldDropDown.classList.remove('show');
              }
          }
      }

      function chooseItem(items, input, parentField) {
          let feedbackFormFieldDropDown = parentField.querySelector('.feedback-form__form-field-dropdown');
          for (let i = 0; i < items.length; i++) {
              items[i].addEventListener('click', function(e) {
                  e.stopPropagation();
                  for (let item of items) {
                      if (item.classList.contains('choosed')) {
                          item.classList.remove('choosed');
                      }
                  }
                  items[i].classList.add('choosed');
                  input.value = this.querySelector('.feedback-form__form-field-dropdown-name').textContent;
                  input.defaultValue = this.querySelector('.feedback-form__form-field-dropdown-name').textContent;

                  if (input.classList.contains('error')) {
                    input.classList.remove('error');
                    parentField.querySelector('.feedback-form__form-error-text').classList.remove('show');
                  }

                  feedbackFormFieldDropDown.classList.remove('show');
             
              });
          };
      }

      function createToken(text) {
          let tokenElem = document.createElement('div');
          tokenElem.className = 'feedback-form__form-field-tokenbox-token';
          tokenElem.id = 'token-' + feedbackFormFieldTokensCounter; 
          
          let tokenTextElem = document.createElement('div');
          tokenTextElem.className = 'feedback-form__form-field-tokenbox-token-text';
          tokenTextElem.textContent = text;

          let tokenCloseElem = document.createElement('div');
          tokenCloseElem.className = 'feedback-form__form-field-tokenbox-token-close';
          tokenCloseElem.innerHTML = '<svg viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.48468 0.172177C6.67994 0.367439 6.67994 0.684022 6.48468 0.879284L4.36336 3.0006L6.48468 5.12192C6.67994 5.31719 6.67994 5.63377 6.48468 5.82903C6.28942 6.02429 5.97283 6.02429 5.77757 5.82903L3.65625 3.70771L1.53493 5.82903C1.33967 6.02429 1.02308 6.02429 0.827823 5.82903C0.632561 5.63377 0.632561 5.31719 0.827823 5.12192L2.94914 3.0006L0.827823 0.879284C0.632561 0.684022 0.632561 0.367439 0.827823 0.172177C1.02309 -0.0230851 1.33967 -0.0230851 1.53493 0.172177L3.65625 2.2935L5.77757 0.172177C5.97283 -0.0230851 6.28941 -0.0230851 6.48468 0.172177Z" /></svg>';

          tokenElem.append(tokenTextElem);
          tokenElem.append(tokenCloseElem);

          feedbackFormFieldTokenBox.prepend(tokenElem);
          feedbackFormFieldTokensCounter = feedbackFormFieldTokensCounter + 1;

          feedbackFormFieldTokenCloseBtns = document.querySelectorAll('.feedback-form__form-field-tokenbox-token-close');
          for (let i = 0; i < feedbackFormFieldTokenCloseBtns.length; i++) {
              feedbackFormFieldTokenCloseBtns[i].addEventListener('click', function(e) {
                  e.stopPropagation();
                  for (let item of feedbackFormFieldDoctorDropItems) {
                      if (item.getAttribute('data-token') == this.parentNode.id) {
                          item.classList.remove('choosed');
                      }
                  }
                  this.parentNode.parentNode.removeChild(this.parentNode);
                  feedbackFormFieldTokensCounter = feedbackFormFieldTokensCounter - 1;
                  feedbackFormFieldTokenCloseBtns = document.querySelectorAll('.feedback-form__form-field-tokenbox-token-close');
                  if (feedbackFormFieldTokenCloseBtns.length < 1) {
                      feedbackFormFieldDoctorInput.classList.remove('haveTokens');
                      feedbackFormFieldDoctorInput.classList.remove('hide');
                  }
                  if (feedbackFormFieldDoctor.querySelector('.feedback-form__form-field-dropdown').classList.contains('show')) {
                      feedbackFormFieldDoctorInput.focus();
                  }
                  
              });
          }
      }
      
      //mask for phone input
      let maskOptions = {
        mask: '+{7} 000 000-00-00'
      };
      const mask = IMask(feedbackFormInputPhone, maskOptions);
      feedbackFormInputPhone.addEventListener('focus', function() {
          mask.value = '+7 ';
      });

      //textarea autoheight
      function autoHeight(elem) {
          elem.style.height = '16px';
          elem.style.height = elem.scrollHeight + 'px';
      }

      feedbackFormTextarea.addEventListener('input', function() {
          autoHeight(this);
      });

      //choose clinic
      showDropDown(feedbackFormFieldClinic);
    
      document.addEventListener('click', function(e) {
          hideWhenClickOutside(feedbackFormFieldClinic, e);
      });

      chooseItem(feedbackFormFieldClinicDropItems, feedbackFormFieldClinicInput, feedbackFormFieldClinic);

      //choose service
      showDropDown(feedbackFormFieldService);

      document.addEventListener('click', function(e) {
          hideWhenClickOutside(feedbackFormFieldService, e);
      });

      chooseItem(feedbackFormFieldServiceDropItems, feedbackFormFieldServiceInput, feedbackFormFieldService);

      //choose city
      showDropDown(feedbackFormFieldCity);

      document.addEventListener('click', function(e) {
          hideWhenClickOutside(feedbackFormFieldCity, e);
      });

      chooseItem(feedbackFormFieldCityDropItems, feedbackFormFieldCityInput, feedbackFormFieldCity);

      //choose doctors
      showDropDown(feedbackFormFieldDoctor);

      document.addEventListener('click', function(e) {
          hideWhenClickOutside(feedbackFormFieldDoctor, e);
          if (feedbackFormFieldTokensCounter > 0) {
              feedbackFormFieldDoctorInput.classList.add('hide');
          }
      });

      for (let i = 0; i < feedbackFormFieldDoctorDropItems.length; i ++) {
          
          feedbackFormFieldDoctorDropItems[i].addEventListener('click', function(e) {
              e.stopPropagation();
              feedbackFormFieldDoctorInput.focus();
              let feedbackFormFieldDoctorName = this.querySelector('.feedback-form__form-field-dropdown-name').textContent; 
              if (!this.classList.contains('choosed') && feedbackFormFieldTokensCounter < 5) {
                  createToken(feedbackFormFieldDoctorName);
                  this.classList.add('choosed');
                  this.setAttribute('data-token', 'token-' + (feedbackFormFieldTokensCounter - 1));
                  if (feedbackFormFieldTokensCounter > 0) {
                      feedbackFormFieldDoctorInput.classList.add('haveTokens');
                  }
              }
              
          });
      }


  }

  $('.feedback-form__form-grade').hover(function() {
      if (!$('.feedback-form__form-grades').hasClass('checked')) {

          var $this = $(this);
          var $prevAll = $(this).prevAll();

          var className = $this.attr("class") + "-hover";

          $this.addClass(className);
          $prevAll.addClass(className);
      }
      
  }, function() {
      if (!$('.feedback-form__form-grades').hasClass('checked')) {

          var $this = $(this);
          var $prevAll = $(this).prevAll();
 
          $this.removeClass('feedback-form__form-grade-hover');
          $prevAll.removeClass('feedback-form__form-grade-hover');
      } 
  });

  $('.feedback-form__form-grade').click(function() {
      var elemNum = $(this).index();

      if ($('.feedback-form__form-grades').hasClass('checked')) {

          var $this = $(this);
          var $prevAll = $(this).prevAll();
          

          $('.feedback-form__form-grade').each(function(index, item) {
              $(item).removeClass('feedback-form__form-grade-hover');
          });

          var className = $this.attr("class") + "-hover";

          $this.addClass(className);
          $prevAll.addClass(className);

      } else {
          $('.feedback-form__form-grades').addClass('checked');
      }

      
      switch (elemNum) {
          case 0:
              $('.feedback-form__form-grades-text').text('Очень плохо');
              break;
          case 1:
              $('.feedback-form__form-grades-text').text('Плохо');
              break;
          case 2:
              $('.feedback-form__form-grades-text').text('Нормально');
              break;
          case 3:
              $('.feedback-form__form-grades-text').text('Хорошо');
              break;
          case 4:
              $('.feedback-form__form-grades-text').text('Отлично');
              break;        
          default:
              $('.feedback-form__form-grades-text').text('Отлично');
      }

      if (feedbackFormGradeInput.classList.contains('error')) {
        feedbackFormGradeInput.classList.remove('error');
        feedbackFormFieldGrade.querySelector('.feedback-form__form-error-text').classList.remove('show');
      }

      feedbackFormGradeInput.value = elemNum + 1;
  });

    feedbackFormTextarea.addEventListener('input', function(e) {
        this.defaultValue = this.value;
        if (this.classList.contains('error')) {
            let errorText = document.querySelector('#feedback-form-review + .feedback-form__form-error-text');
            if (this.textContent.length >= 3) {
                this.classList.remove('error');
                errorText.classList.remove('show');
            }
        }

    });

    feedbackFormNameInput.addEventListener('input', function(e) {
        if (this.classList.contains('error')) {
            let errorText = document.querySelector('#feedback-field-name .feedback-form__form-error-text');
            if (this.value.length >= 3) {
                this.classList.remove('error');
                errorText.classList.remove('show');
            }
        }

    });


    feedbackFormFieldConditions.querySelector('span').addEventListener('click', function() {
        let errorText = document.querySelector('.feedback-form__form-conditions > .feedback-form__form-error-text');
        if (feedbackFormConditionsCheckBox.classList.contains('error')) {
            feedbackFormConditionsCheckBox.classList.remove('error');
            errorText.classList.remove('show');
        }

    });

   /************  Feedback Form End *************/

   /************  Feedback Form Validation and Submit Start *************/
   function showError(elem) {
        elem.querySelector('.feedback-form__form-error-text').classList.add('show');
        if (elem.querySelector('input') !== null) {
            elem.querySelector('input').classList.add('error');
        } else {
            elem.querySelector('textarea').classList.add('error');
        }
        
        elem.scrollIntoView({behavior: 'smooth'});
   }
   
   function checkErros() {
     if (feedbackFormGradeInput.value == '') {
        showError(feedbackFormFieldGrade);
     }
     
     if (feedbackFormTextarea.textContent == '' || feedbackFormTextarea.textContent.length < 3) {
        showError(feedbackFormFieldReview);
     }

     if (feedbackFormFieldClinicInput.value == '') {
        showError(feedbackFormFieldClinic);
     }

     if (feedbackFormNameInput.value == '' || feedbackFormNameInput.value.length < 3) {
        showError(feedbackFormFieldName);
     }

     if (feedbackFormConditionsCheckBox.checked == false) {
        showError(feedbackFormFieldConditions);
     }

     let elemWithError = feedbackTagForm.querySelectorAll('.error');
     if (elemWithError.length > 0) {
        feedbackFormFieldHaveError = true;
     } else {
        feedbackFormFieldHaveError = false;
     }
   }

   
   
   feedbackTagForm.addEventListener('submit', function(e) {
        e.preventDefault();
        checkErros();
        
        if (feedbackFormFieldHaveError == false) {

            let form_data = $(this).serialize();
            $.ajax({
                type: "GET", 
                url: "/",
                data: form_data,
                success: function() {
                    feedbackFormBody.classList.remove(feedbackFormOpenClass);
                    feedbackFormSuccess.classList.add(feedbackFormOpenClass);
                }
           
            });

        }

   });





   /************  Feedback Form Validation and Submit End *************/










});