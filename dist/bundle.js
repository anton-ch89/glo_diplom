(()=>{"use strict";const e=(e,t)=>{let o=document.querySelector(".count_1>span"),n=document.querySelector(".count_2>span"),s=document.querySelector(".count_3>span"),i=document.querySelector(".count_4>span");t&&(o=document.querySelectorAll(".count_1>span")[1],n=document.querySelectorAll(".count_2>span")[1],s=document.querySelectorAll(".count_3>span")[1],i=document.querySelectorAll(".count_4>span")[1]);let r=setInterval((()=>{let t=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60),s=Math.floor(t/60/60%24),i=Math.floor(t/60/60/24);return i<0&&s<0&&n<0&&o<0&&(o="00",n="00",s="00",i="00"),(i<10||s<10||n<10||o<10)&&(o=("0"+o).slice(-2),n=("0"+n).slice(-2),s=("0"+s).slice(-2),i=("0"+i).slice(-2)),{timeRemaining:t,days:i,hours:s,minutes:n,seconds:o}})();t.timeRemaining>0?(o.textContent=t.days,n.textContent=t.hours,s.textContent=t.minutes,i.textContent=t.seconds):clearInterval(r)}),1e3)},t=e=>{const t=document.createElement("div");t.style.cssText="font-size: 12px; line-height: 2; color: red;",[...e.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)).forEach((e=>{e.setAttribute("required",!0),e.addEventListener("input",(()=>{"fio"===e.name?(e.style.border="",e.value=e.value.replace(/[^а-яё a-z]/gi,""),e.addEventListener("blur",(()=>{e.value.length>1?(t.remove(),e.value=e.value.replace(/[^а-яё a-z]/gi,"").replace(/^[ \s]+|[ \s]+$/g,"").replace(/^[-]+|[-]+$/g,"").replace(/\s+/g," ").replace(/-+/g,"-").split(" ").map((e=>{if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")):(e.style.border="2px solid red",e.value="",t.textContent="Имя должно быть не короче 2х букв.",e.insertAdjacentElement("afterend",t),setTimeout((()=>{t.remove()}),5e3))}))):"phone"===e.name&&(e.style.border="",e.setAttribute("required",!0),e.value=e.value.replace(/[^0-9()+]/,""),e.addEventListener("blur",(()=>{/^\+?[0-9]{7,16}$/.test(e.value)?(t.remove(),e.value=e.value.replace(/[^0-9\+]/g,"")):(e.style.border="2px solid red",e.value="",t.textContent="Номер телефона должен содержать от 7 до 16 цифр.",e.insertAdjacentElement("afterend",t),setTimeout((()=>{t.remove()}),5e3))})))}))}))};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".btn-block"),t=document.querySelector(".header-modal--opened"),o=document.querySelector(".overlay"),n=document.querySelector(".header-modal__close");e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",o.style.display="block"})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",o.style.display="none"})),o.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",o.style.display="none"}))})(),(()=>{const e=document.querySelector(".services-modal"),t=document.querySelector(".overlay");document.body.addEventListener("click",(o=>{const n=o.target;n.closest(".service-button")&&(o.preventDefault(),e.style.display="block",t.style.display="block"),(n.closest(".services-modal__close")||n.closest(".overlay"))&&(o.preventDefault(),e.style.display="none",t.style.display="none")}))})(),e("15 august 2021 12:25:30",!0),e("15 august 2021 12:25:30",!1),(()=>{const e=document.querySelectorAll(".sertificate-document"),t=document.querySelector(".overlay");document.querySelector("body").addEventListener("click",(o=>{let n=o.target;n=n.closest(".sertificate-document"),n&&(o.preventDefault(),e.forEach((e=>{e===n&&(t.style.display="block")})))}))})(),(()=>{const e=document.querySelectorAll(".form-horizontal"),t=document.createElement("div");t.style.cssText="font-size: 2rem;",e.forEach((e=>{e.addEventListener("submit",(n=>{n.preventDefault(),e.append(t),t.textContent="Загрузка...";const s=new FormData(e);let i={};s.forEach(((e,t)=>{i[t]=e})),o(i).then((e=>{if(200!==e.status)throw new Error("status network is not 200");t.textContent="Спасибо! Мы скоро с Вами свяжемся",setTimeout((()=>{t.remove()}),3e3)})).catch((e=>{t.textContent="Что-то пошло не так",setTimeout((()=>{t.remove()}),3e3),console.error(e)})),e.reset()}))}));const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(),(()=>{const e=document.querySelector(".smooth-scroll");e.style.display="none",document.addEventListener("scroll",(()=>{const t=document.querySelector("#offer").getBoundingClientRect().bottom;e.style.display=t<0?"block":"none"})),e.addEventListener("click",(()=>{const e=document.querySelector("#header").getBoundingClientRect().top;window.scrollBy({top:e,behavior:"smooth"})}))})(),t(document.querySelectorAll(".form-horizontal")[0]),t(document.querySelectorAll(".form-horizontal")[1]),new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:s=!1,position:i=0,responsive:r=[],slidesToShow:l=3}){e&&t||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(n),this.slidesToShow=l,this.options={position:i,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyles(){let e=document.querySelector("#sliderCarusel-style");e||(e=document.createElement("style"),e.id="sliderCarusel-style",document.head.append(e)),e.textContent=`\n            .glo-slider {\n                overflow: hidden !important;\n                max-width: 540px;\n                margin: 0 auto;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                display: flex !important;\n                flex: 0 0 ${this.options.widthSlide}% !important;\n                width: ${this.options.widthSlide}% !important;\n                flex-direction: column;\n            }\n            .glo-slider__next, \n            .glo-slider__prev {\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: transparent;\n            }\n            @media (max-width: 576px){\n                .glo-slider {\n                    overflow: hidden !important;\n                    max-width: 180px;\n                    margin: 0 auto;\n                }\n            }\n        }\n        `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),o=Math.max(...t),n=()=>{const n=document.documentElement.clientWidth;if(n<o)for(let e=0;e<t.length;e++)n<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()};n(),window.addEventListener("resize",n)}}({main:".benefits-inner",wrap:".benefits-wrap",prev:".benefits__arrow--left",next:".benefits__arrow--right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init()}))})();