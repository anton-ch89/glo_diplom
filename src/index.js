'use strict';

import headerModal from './modules/headerModal.js';
import servicesModal from './modules/servicesModal.js';
import calc from './modules/calc.js';
import countTimer from './modules/countTimer.js';
import docs from './modules/docs.js';
import smoothScroll from './modules/smoothScroll.js';
import sendForm from './modules/sendForm.js';
import benefitsSlider from './modules/benefitsSlider.js';


//Модальное окно заказа звонка
headerModal();
// Модальные окна Замер
servicesModal();
//Калькулятор
calc();
//Таймер
countTimer();
//Документы
docs();
// Отправка формы
sendForm();
//Скролл
smoothScroll();


//Слайдер-карусель "Выгоды"
const carusel = new benefitsSlider({
	main: '.benefits-inner',
	wrap: '.benefits-wrap',
    prev: '.benefits__arrow--left',
    next: '.benefits__arrow--right',
	slidesToShow: 3,
	infinity: true,
	responsive: [{
		breakpoint: 576,
		slidesToShow: 1,
	},
	],
});

carusel.init();