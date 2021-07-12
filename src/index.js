'use strict';

import headerModal from './modules/headerModal.js';
import servicesModal from './modules/servicesModal.js';
import benefitsSlider from './modules/benefitsSlider.js';


//модальное окно заказа звонка
headerModal();
// Модальные окна Замер
servicesModal();

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
