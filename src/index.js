'use strict';

import headerModal from './modules/headerModal.js';
import servicesModal from './modules/servicesModal.js';
import calc from './modules/calc.js';
import countTimer from './modules/countTimer.js';
import certificate from './modules/certificate.js';
import smoothScroll from './modules/smoothScroll.js';
import sendForm from './modules/sendForm.js';
import BenefitsSlider from './modules/benefitsSlider.js';


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