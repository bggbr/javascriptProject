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
		block: 'center',
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

// Show "arrow up" button when scrolling down
const arrowBtn = document.querySelector('.arrow-up');
arrowBtn.addEventListener('click', () => {
	window.scrollTo(0, 0);
	scrollIntoView('#home');
});

// window.addEventListener('scroll', () => {
// 	if (window.scrollY > homeHeight / 2) {
// 		arrowBtn.style.display = 'block';
// 	} else {
// 		arrowBtn.style.display = 'none';
// 	}
// })
// the other solution
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2) {
		arrowBtn.classList.add('visible');
	} else {
		arrowBtn.classList.remove('visible');
	}
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
	const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
	if (filter === null) {
		return;
	}
	projectContainer.classList.add('animation-out');

	setTimeout(() => {
		projects.forEach((project) => {
			// console.log(project.dataset.type);
			if (filter === '*' || filter === project.dataset.type) {
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
		projectContainer.classList.remove('animation-out');
	}, 300);

	// 밑에는 forEach와 같은 것!!
	// for (let project of projects) {
	// 	console.log(project);
	// }

	// let project;
	// for (let i = 0; i < projects.length; i++) {
	// 	project = projects[i];

	// 	console.log(project);
	// }
});
