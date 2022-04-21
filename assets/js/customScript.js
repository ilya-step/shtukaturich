// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("header").classList.remove('_active');
	} else {
		document.getElementById("header").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// аккордион
$('.accordion').accordion({
	heightStyle: 'content',
	active: 0, // индекс открытой вкладки
	header: '> .accordion-item > .accordion-header'
});


// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}


//табы слева в карточке товара
$(".product__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".product__box_" + tabVal).addClass("active");
	$(".product__box_" + tabVal).siblings(".product__box").removeClass("active");
});
//табы снизу в карточке товара
$(".card__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".card__box_" + tabVal).addClass("active");
	$(".card__box_" + tabVal).siblings(".card__box").removeClass("active");
});


// Попап
let pop = $('.popup__overlay')
$('.popup__toggle').click(function () {
	pop.addClass('_active')
})
pop.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(pop).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	pop.removeClass('_active')
})



// счетчик товара в карточке товара
let buttonCountPlus = document.getElementsByClassName("buttonCountPlus");
let buttonCountMinus = document.getElementsByClassName("buttonCountMinus");
let count = document.getElementsByClassName("buttonCountNumber");
let countPost = document.getElementsByClassName("num");

if (count) {
	var p;
	for (p = 0; p < buttonCountPlus.length; p++) {
		buttonCountPlus[p].addEventListener("click", function () {
			let itemCount = this.previousElementSibling.textContent;
			if (itemCount < 100) {
				itemCount++;
				this.previousElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
	var m;
	for (m = 0; m < buttonCountMinus.length; m++) {
		buttonCountMinus[m].addEventListener("click", function () {
			let itemCount = this.nextElementSibling.textContent;
			if (itemCount > 1) {
				itemCount--;
				this.nextElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
}


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});

// слайдер owl
$(document).ready(function () {
	$(".owl-4-items").owlCarousel({
		margin: 20, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			900: {
				items: 3
			},
			1200: {
				margin: 0, //Отступ от картино если выводите больше 1
				items: 4
			}
		}
	});
	$(".owl-2-items").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 20, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
		mouseDrag: false,
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			1200: {
				items: 2
			}
		}
	});
});


// слайдер slick в карточке товара
$('.slider-product-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: false,
	fade: true,
	asNavFor: '.slider-product-nav'
});
$('.slider-product-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: false,
	asNavFor: '.slider-product-for',
	focusOnSelect: true
});