'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// window.addEventListener('scroll', () => {
// 	if (window.scrollY >= navbarHeight) {
// 		navbar.style.position = 'fixed';
// 		navbar.style.width = '100%';
// 		navbar.style.backgroundColor = '#059449';
// 	} else {
// 		navbar.style.backgroundColor = 'transparent';
// 	}
// });

window.addEventListener('scroll', () => {
	if (window.scrollY >= navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});
