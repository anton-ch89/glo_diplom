//Слайдер "Замеры"

class ServicesSlider {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        responsive = [],
        slidesToShow = 2,
    }) {
        if (!main || !wrap) {
            console.warn(`slider-carusel: Необходимо 2 свойства, "main" и "wrap"!`);
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
        this.responsive = responsive;
    }

    init() {

        this.addGloClass();
        this.addStyles();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }

    }
    addGloClass() {
        this.main.classList.add('glo-services-slider');
        this.wrap.classList.add('glo-services-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-services-slider__item');
        }
    }
    addStyles() {
        let style = document.querySelector('#servicesCarusel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
            document.head.append(style);
        }

        style.textContent = `
            .glo-services-slider {
                overflow: hidden !important;
                margin: 0 auto;
            }
            .glo-services-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-services-slider__item {
                display: flex !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
                width: ${this.options.widthSlide}% !important;
            }
            @media (max-width: 576px){
                .glo-services-slider {
                    overflow: hidden !important;
                    max-width: 500px;
                    margin: 0 auto;
                }
                .service-block {
                    width: 400px;
                }
            }
            @media (max-width: 992px){
                .service-block {
                    width: 600px;
                }
                .service-image{
                    display: none;
                }
                .service-text{
                    margin-left: 0;
                    border-radius: 10px;
                }
                .service-button{
                    width: 160px;
                }
            }
            @media (max-width: 1199px){
                .service-block {
                    width: 600px;
                }
                .service-image{
                    display: none;
                }
                .service-text{
                    margin-left: 0;
                    border-radius: 10px;
                }
            }
        }
        `;
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;

        }
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.append(this.prev);
        this.main.append(this.next);
    }

    responseInit() {
        const slidestToShowDefault = this.slidesToShow,
            allResponse = this.responsive.map(item => item.breakpoint),
            maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyles();
                    }
                }
            } else {
                this.slidesToShow = slidestToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyles();
            }
        };

        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
}

export default ServicesSlider;