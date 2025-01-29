document.addEventListener('DOMContentLoaded', function() {

      /************ Filters left side of cases Start  *************/ 

  let reviewsFilters = document.querySelector('.reviews__filters');
  let reviewsFiltersResetBtn = document.querySelector('.reviews__filters-reset');
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

      reviewsFiltersItemDoc.addEventListener('click', function() {
          if (!reviewsFiltersDropDownDoc.classList.contains('show')) {
            reviewsFiltersValueDoc.focus();
          } else {
            reviewsFiltersValueDoc.blur();
          }
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
          reviewsFiltersValueDoc.defaultValue = '';
          reviewsFiltersValueServ.defaultValue = '';
          selectedCheckboxesArray = [];
          
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

          }
      });

  };

  /************ Filters left side of cases End  *************/

  /************ Filter above the list of cases Start *************/

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

      document.addEventListener('click', function(e) {
        const withinBoundaries = e.composedPath().includes(filterAboveReviewsSlideBodyMob);
        const withinBtn = e.composedPath().includes(filterAboveReviewsBtn);
     
        if ( !withinBoundaries && !withinBtn ) {
            if (filterAboveReviewsSlideBodyMob.classList.contains('open')) {
                filterAboveReviewsSlideBodyMob.classList.remove('open');
                setTimeout(function() {
                    filterAboveReviewsSlideMob.classList.remove('show');
                    document.body.classList.remove('body-overflow');
                }, 400);
            }
        }
    })

  }

  /************ Filter above the list of cases End *************/

    /************ Paginations for page Cases Start *************/ 

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

    /************ Mobile Filters of Cases Start  *************/

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
          if (reviewsFiltersServicesInputValueMob.defaultValue == '' 
              && reviewsFiltersDoctorsInputValueMob.defaultValue == '') {
                  reviewsFilterResetBtnMob.classList.remove('visible');
              } else {
                  reviewsFilterResetBtnMob.classList.add('visible');
              }
      }

      reviewsFilterResetBtnMob.addEventListener('click', function() {

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

   /************ Mobile Filters of Cases End  *************/








});