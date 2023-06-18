
// burger__menu

document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".burger").classList.add("active");
});
document.querySelector(".burger__close").addEventListener("click", function() {
  document.querySelector(".burger").classList.remove("active");
});


const burgerLinks = document.querySelectorAll('.burger__link');
const burgerButton = document.querySelector('.burger__btm');

burgerLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.burger').classList.remove('active');
  });
});

burgerButton.addEventListener('click', function () {
  document.querySelector('.burger').classList.remove('active');
});


// mobail__search__form

document.querySelector(".form-btn__open").addEventListener("click", function () {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".form");
  form.classList.remove("form__active");
  form.querySelector("input").value = "";
  document.querySelector(".form-btn__open").classList.remove("active")
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".header__search-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
});


// header-scroll

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__bottom-list").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__scroll");

  
      document.querySelectorAll(".header__bottom-list").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });

      document.querySelectorAll(".header__scroll").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__bottom-lists")) {
      document.querySelectorAll(".header__scroll").forEach(el => {
        el.classList.remove("active-list--item");
      })
      document.querySelectorAll(".header__bottom-list").forEach(el => {
        el.classList.remove("active--btn");
      });
    }
  })
});

new SimpleBar(document.querySelector(".scroll-1"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".scroll-2"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".scroll-3"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".scroll-4"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".scroll-5"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});

// swiper-hero

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2500,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  },

  a11y: false,

});

// select-gallery

const element = document.querySelector('select');
const choices = new Choices(element, {

  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  
});

// checkbox-gallery

const checkboxes = document.querySelectorAll('.checkbox__input');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.checked = !this.checked;
      this.setAttribute('aria-checked', this.checked);
      e.preventDefault();
    }
  });

  checkbox.addEventListener('click', function (e) {
    this.setAttribute('aria-checked', this.checked);
  });
});




  
// swiper-gallery

let gallerySlider = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper__pagination-right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 38
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },


  a11y: false

});


// modal-gallery

var buttons = document.querySelectorAll('.gallery-slide');
var modal = document.querySelector('.modal');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    modal.style.display = 'flex';
  });
});

var closeButton = document.querySelector('.modal__close-btn');
closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    modal.classList.add('show');

    document.body.style.overflow = 'hidden';
  });
});

closeButton.addEventListener('click', function () {
  modal.classList.remove('show');

  document.body.style.overflow = 'auto';

});



// accordion

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__container',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  openOnInit: [0]
});



// work-tabs
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.content__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path
      document.querySelectorAll('.content__btn').forEach(elem => {
        elem.classList.remove('content__btn-active')
      })
      this.classList.add('content__btn-active')
      document.querySelectorAll('.content__tab').forEach(function (e) {
        e.classList.remove('content__tab--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('content__tab--active')
      })
    })
  })
});


// swiper-thing

const swiperthing = new Swiper('.thing__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 27,
  speed: 600,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
      },

  observer: true,
  observerParents: true,


  navigation: {
    nextEl: '.thing__button-next',
    prevEl: '.thing__button-prev',
  },

  breakpoints: {
    
    1980: {
      slidesPerView: 3,
      spaceBetween: 50,


    },
    
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,

    
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,


    },

    320: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,


    }
  },
   
   a11y: false

});

// swiper-project

const swiperproject = new Swiper('.project__swiper', {
  loop: true,
  speed: 600,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,

  },

  

  breakpoints: {

    1980: {
      slidesPerView: 3,
      spaceBetween: 50,


    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,


    },

    768: {
      slidesPerView: 2,
      spaceBetween: 33.97,


    },

    320: {
      slidesPerView: 1,
      spaceBetween: 33.97,


    }

  },
  

  navigation: {
    nextEl: '.project__next',
    prevEl: '.project__prev',
  },

  a11y: false

});


// popup

var openPopupElements = document.querySelectorAll('.open-popup');

var popups = document.querySelectorAll('.popup');

openPopupElements.forEach(function (openPopupElement) {
  openPopupElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      openPopup(openPopupElement);
    }
  });

  openPopupElement.addEventListener('click', function () {
    openPopup(openPopupElement);
  });
});

popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {

    if (event.target !== popup) {
      return;
    }

    closePopup(popup);
  });

  popup.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePopup(popup);
    }
  });
});

function openPopup(openPopupElement) {
  var popupId = openPopupElement.getAttribute('data-popup');

  popups.forEach(function (popup) {
    if (popup.id !== popupId && popup.classList.contains('visible')) {
      popup.classList.remove('visible');
    }
  });

  var popup = document.getElementById(popupId);
  if (popup.classList.contains('visible')) {
    popup.classList.remove('visible');
    openPopupElement.classList.remove('active'); 
  } else {
    popup.classList.add('visible');
    openPopupElement.classList.add('active'); 
  }


  openPopupElements.forEach(function (otherOpenPopupElement) {
    if (otherOpenPopupElement !== openPopupElement && otherOpenPopupElement.classList.contains('active')) {
      otherOpenPopupElement.classList.remove('active');
    }
  });
}

function closePopup(popup) {
  popup.classList.remove('visible');


  openPopupElements.forEach(function (openPopupElement) {
    if (openPopupElement.classList.contains('active')) {
      openPopupElement.classList.remove('active');
    }
  });
}


//map

ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {

    center: [55.758468, 37.601088],
    zoom: 14.5


  });
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.8, 37.8]
    }
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myGeoObject);


}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);



// contact form

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#D11616',
    fontSize: '16px',
    textDecoration: 'Open Sans',
  },
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не мениее 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Не более 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Заполните, пожалуйста, поле',
    },
  ])
  .addField('#tel', [
    {
      rule: 'customRegexp',
      value: /^((8|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,15}$/,
      errorMessage: 'Неверное значение',
    },
    {
      rule: 'required',
      errorMessage: 'Заполните, пожалуйста, поле',
    },
  ])