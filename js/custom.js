
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

  
  document.addEventListener('DOMContentLoaded', function () {
	var swiper = new Swiper(".mySwiper", {
	centeredSlides: false,
	breakpoints: {
		480: {
			slidesPerView: 1
		}
	},
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {                      
		el: '.swiper-pagination',
	},
  });

});
