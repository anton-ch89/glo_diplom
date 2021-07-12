(()=>{"use strict";(()=>{const t=document.querySelector(".btn-block"),e=document.querySelector(".header-modal--opened"),i=document.querySelector(".overlay"),s=document.querySelector(".header-modal__close");t.addEventListener("click",(t=>{t.preventDefault(),e.style.display="block",i.style.display="block"})),s.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none",i.style.display="none"}))})(),(()=>{const t=document.querySelector(".services-modal"),e=document.querySelector(".overlay");document.body.addEventListener("click",(i=>{const s=i.target;s.closest(".service-button")&&(i.preventDefault(),t.style.display="block",e.style.display="block"),s.closest(".services-modal__close")&&(i.preventDefault(),t.style.display="none",e.style.display="none")}))})(),new class{constructor({main:t,wrap:e,next:i,prev:s,infinity:o=!1,position:n=0,responsive:r=[],slidesToShow:l=4}){t&&e||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.slides=document.querySelector(e).children,this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slidesToShow=l,this.options={position:n,infinity:o,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyles(){let t=document.querySelector("#sliderCarusel-style");t||(t=document.createElement("style"),t.id="sliderCarusel-style",document.head.append(t)),t.textContent=`\n            .glo-slider {\n                overflow: hidden !important;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                display: flex !important;\n                align-items: center;\n                justify-content: space-around;\n                flex: 0 0 ${this.options.widthSlide}% !important;\n                margin: auto 0 !important;\n                flex-direction: column;\n            }\n            .glo-slider__next, \n            .glo-slider__prev {\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: transparent;\n            }\n        }\n        `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next)}responseInit(){const t=this.slidesToShow,e=this.responsive.map((t=>t.breakpoint)),i=Math.max(...e),s=()=>{const s=document.documentElement.clientWidth;if(s<i)for(let t=0;t<e.length;t++)s<e[t]&&(this.slidesToShow=this.responsive[t].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()};s(),window.addEventListener("resize",s)}}({main:".benefits-inner",wrap:".benefits-wrap",prev:".benefits__arrow--left",next:".benefits__arrow--right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init()})();