'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
	if (window.scrollY >= navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
	const target = event.target;
	const link = target.dataset.link;
	if (link === null) {
		return;
	}
	scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
	scrollIntoView('#contact');
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({
		behavior: 'smooth',
		block: 'center'
	});
}

// Make home slowly fade to transparent as the window scrolls down
// 높이가 800이면 투명도가 0으로 400이면 0.5 처음이면 1로
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');
window.addEventListener('scroll', () => {
	homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});