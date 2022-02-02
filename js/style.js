
// burger__menu

document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".burger__menu").classList.add("active");
});
document.querySelector(".burger__close").addEventListener("click", function() {
  document.querySelector(".burger__menu").classList.remove("active");
});


// mobail__searsh__form

document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".mobail__search__form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".mobail__search__form");
  if (!target.closest(".mobail__search__container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
});



// header-scroll

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__bottom-list").forEach(item => {
  item.addEventListener("click", function() {
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

document.addEventListener("click", function(e) {
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
})

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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})

// select-gallery

const element = document.querySelector('select');
const choices = new Choices(element, {

  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
});




  
// swiper-gallery

let gallerySlider = new Swiper(".swiper-right--content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
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
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});