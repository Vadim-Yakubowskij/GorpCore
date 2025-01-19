class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let autoSlideInterval;

function showSlide(n) {
    slides[slideIndex].classList.remove("active");
    slideIndex = (n + slides.length) % slides.length; // Обеспечивает цикличный переход
    slides[slideIndex].classList.add("active");
}

function plusSlides(n) {
    clearInterval(autoSlideInterval); // Остановить автоматическую промотку
    showSlide(slideIndex + n);
    startAutoSlide(); // Запустить автоматическую промотку снова
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        showSlide(slideIndex + 1);
    }, 3000); // Изменять слайд каждые 3 секунды
}

// Инициализация
showSlide(slideIndex);
startAutoSlide();

let slideIndex_Clothes = 0;
let slides_Clothes = document.querySelectorAll(".slide_Clothes");
let autoSlideInterval_Clothes;

function showSlide_Clothes(n) {
    slides_Clothes[slideIndex_Clothes].classList.remove("active");
    slideIndex_Clothes = (n + slides_Clothes.length) % slides_Clothes.length; // Обеспечивает цикличный переход
    slides_Clothes[slideIndex_Clothes].classList.add("active");
}

function plusSlides_Clothes(n) {
    clearInterval(autoSlideInterval_Clothes); // Остановить автоматическую промотку
    showSlide_Clothes(slideIndex_Clothes + n);
    startAutoSlide_Clothes(); // Запустить автоматическую промотку снова
}

function startAutoSlide_Clothes() {
    autoSlideInterval_Clothes = setInterval(function() {
        showSlide_Clothes(slideIndex_Clothes + 1);
    }, 9000); // Изменять слайд каждые 9 секунды
}

// Инициализация
showSlide_Clothes(slideIndex_Clothes);
startAutoSlide_Clothes();