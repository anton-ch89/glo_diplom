'use strict';

import headerModal from './modules/headerModal.js';
import servicesModal from './modules/servicesModal.js';
import calc from './modules/calc.js';
import countTimer from './modules/countTimer.js';
import certificate from './modules/certificate.js';
import ServicesSlider from './modules/servicesSlider.js';
import smoothScroll from './modules/smoothScroll.js';
import sendForm from './modules/sendForm.js';
import validationForms from './modules/validationForms.js';
import BenefitsSlider from './modules/benefitsSlider.js';


document.addEventListener('DOMContentLoaded', () => {
//Модальное окно заказа звонка
headerModal();
// Модальные окна Замер
servicesModal();
//Калькулятор
calc();
//Таймер
countTimer('15 august 2021 12:25:30', true);
countTimer('15 august 2021 12:25:30', false);
//Документы
certificate();
// Отправка формы
sendForm();
//Скролл
smoothScroll();
//Валидация форм
document.querySelectorAll('form').forEach(e => {
	validationForms(e);
});


//Слайдер-карусель "Выгоды"
const carusel = new BenefitsSlider({
	main: '.benefits-inner',
	wrap: '.benefits-wrap',
    prev: '.benefits__arrow--left',
    next: '.benefits__arrow--right',
	slidesToShow: 3,
	infinity: true,
	responsive: [
		{
		breakpoint: 576,
		slidesToShow: 1,
	},
	],
});

carusel.init();


const services = new ServicesSlider({
	main: '.services-inner',
	wrap: '.services-wrap',
    prev: '.services__arrow--left',
    next: '.services__arrow--right',
	slidesToShow: 2,
	infinity: true,
	responsive: [
		{
		breakpoint: 576,
		slidesToShow: 1,
	},
	],
});

services.init();

});
