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
// Check
const menu = document.querySelector('#contact');
console.log(menu);
// Algorithm
navbarMenu.addEventListener('click', (event) => {
	const target = event.target;
	const link = target.dataset.link;
	if (link === null) {
		return;
	}
	console.log(link);
	const scrollTo = document.querySelector(link);
	console.log(scrollTo); // null is not an object
	scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
