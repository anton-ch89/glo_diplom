(()=>{"use strict";const e=(e,t)=>{let n=document.querySelector(".count_1>span"),i=document.querySelector(".count_2>span"),s=document.querySelector(".count_3>span"),o=document.querySelector(".count_4>span");t&&(n=document.querySelectorAll(".count_1>span")[1],i=document.querySelectorAll(".count_2>span")[1],s=document.querySelectorAll(".count_3>span")[1],o=document.querySelectorAll(".count_4>span")[1]);let r=setInterval((()=>{let t=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),i=Math.floor(t/60%60),s=Math.floor(t/60/60%24),o=Math.floor(t/60/60/24);return o<0&&s<0&&i<0&&n<0&&(n="00",i="00",s="00",o="00"),(o<10||s<10||i<10||n<10)&&(n=("0"+n).slice(-2),i=("0"+i).slice(-2),s=("0"+s).slice(-2),o=("0"+o).slice(-2)),{timeRemaining:t,days:o,hours:s,minutes:i,seconds:n}})();t.timeRemaining>0?(n.textContent=t.days,i.textContent=t.hours,s.textContent=t.minutes,o.textContent=t.seconds):clearInterval(r)}),1e3)};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".btn-block"),t=document.querySelector(".header-modal--opened"),n=document.querySelector(".overlay"),i=document.querySelector(".header-modal__close");e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",n.style.display="block"})),i.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",n.style.display="none"})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",n.style.display="none"}))})(),(()=>{const e=document.querySelector(".services-modal"),t=document.querySelector(".overlay");document.body.addEventListener("click",(n=>{const i=n.target;i.closest(".service-button")&&(n.preventDefault(),e.style.display="block",t.style.display="block"),(i.closest(".services-modal__close")||i.closest(".overlay"))&&(n.preventDefault(),e.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelector("#calc-type"),t=document.querySelector("#calc"),n=document.querySelector("#calc-input"),i=document.querySelector("#calc-type-material"),s=document.getElementById("calc-total");if(t){n.addEventListener("input",(()=>{n.value=n.value.replace(/[^0-9]/,"")}));const o=()=>{let t=0;i.value&&e.value&&(t=Math.ceil(i.value*e.value*n.value)),s.value=t};t.addEventListener("change",(e=>{const t=e.target;(t.matches("select")||t.matches("input"))&&o()}))}})(),e("15 august 2021 12:25:30",!0),e("15 august 2021 12:25:30",!1),(()=>{const e=document.querySelectorAll(".sertificate-document"),t=document.querySelector("body"),n=(document.querySelector(".overlay"),document.querySelector("head"));t.insertAdjacentHTML("beforeend",'\n        <div id="myModal" class="modal">\n        <span class="close">×</span>\n        <img class="modal-content" id="img01">\n        </div>\n        '),n.insertAdjacentHTML("beforeend","\n        <style>\nbody {font-family: Arial, Helvetica, sans-serif;}\n\n.sertificate-document {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.sertificate-document:hover {\n    opacity: 0.7;\n}\n\n.modal {\n    display: none; \n    position: fixed;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    width: 100%; \n    height: 100%; \n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.9); \n}\n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 60%;\n    max-width: 500px;\n}\n\n\n.modal-content, #caption {    \n    -webkit-animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0)} \n    to {-webkit-transform:scale(1)}\n}\n\n@keyframes zoom {\n    from {transform:scale(0)} \n    to {transform:scale(1)}\n}\n\n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n</style>\n        ");const i=document.querySelector("#myModal"),s=document.querySelector("#img01");t.addEventListener("click",(t=>{e.forEach((e=>{let n=t.target;n.closest(".sertificate-document")&&(t.preventDefault(),i.style.display="block",s.src="./images/documents/original/document4.jpg"),n.closest(".close")&&(i.style.display="none")}))}))})(),(()=>{const e=document.querySelector("#reviews"),t=document.createElement("div");t.classList.add("container"),t.innerHTML='<div class="row text-center"><div class ="col-12"><div class="loadingio-spinner-spinner-5aucb47nhvp"><div class="ldio-yq4giadanxn">\n    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n    </div></div></div></div>',e.append(t);const n=[];fetch("https://moddle-diploma-default-rtdb.firebaseio.com/comments.json").then((e=>(t.remove(),e.json()))).then((i=>{t.remove(),i.forEach((e=>{const t=document.createElement("div");t.classList.add("row"),t.classList.add("comment-item"),t.classList.add("review-margin-bottom"),0===e.id||3===e.id?t.innerHTML=`\n                    <div class="col-xs-3 col-sm-2">\n                        <div class="review-user">\n                            <img src="images/users/${e.image?e.image:"unnamed.png"}" alt="" class="img-responsive avatar">\n                        </div>\n                    </div>\n                    <div class="col-xs-9 col-sm-9">\n                        <div class="review-inner review-green review-arrow review-arrow-left">\n                            <p class="text-normal">${e.author}</p>\n                            <p>${e.comment}</p>\n                        </div>\n                    </div>\n                    `:1===e.id||4===e.id?t.innerHTML=`\n                <div class="col-xs-9 col-sm-9">\n                    <div class="review-inner review-gray review-arrow review-arrow-right">\n                        <p class="text-normal">${e.author}</p>\n                        <p>${e.comment}</p>\n                    </div>\n                </div>\n                <div class="col-xs-3 col-sm-2">\n                    <div class="review-user">\n                        <img src="images/users/${e.image?e.image:"unnamed.png"}" alt="" class="img-responsive avatar">\n                    </div>\n                </div>\n                `:t.innerHTML=`\n                <div class="col-xs-3 col-sm-2">\n                    <div class="review-user">\n                        <img src="images/users/${e.image?e.image:"unnamed.png"}" alt="" class="img-responsive avatar">\n                    </div>\n                </div>\n                <div class="col-xs-9 col-sm-9">\n                    <div class="review-inner review-orange review-arrow review-arrow-left">\n                        <p class="text-normal">${e.author}</p>\n                        <p>${e.comment}</p>\n                    </div>\n                </div>\n                `,n.push(t)}));for(let t=0;t<3;t++)e.querySelector(".comments-container").append(n[t]),0===t&&n[t].querySelector(".review-inner");let s=3;setInterval((()=>{e.querySelectorAll(".comment-item")[0].remove(),6===s&&(s=0),e.querySelector(".comments-container").append(n[s]),s++}),2e4)}))})(),(()=>{const e=document.querySelector(".utp-button > a"),t=document.querySelector(".offer-modal"),n=document.querySelector(".overlay"),i=document.querySelector(".order-modal__close");e.addEventListener("click",(e=>{t.style.display="block",n.style.display="block"})),i.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",n.style.display="none"})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",n.style.display="none"}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector("title").innerText,n=document.createElement("div");n.style.cssText="font-size: 2rem;",e.forEach((e=>{e.addEventListener("submit",(i=>{i.preventDefault(),e.append(n),n.textContent="Загрузка...";const s=new FormData(e);let o={};s.forEach(((e,t)=>{o[t]=e})),"Остекление балконов и лоджий"===t&&document.getElementById("calc-total")&&(o.total=document.getElementById("calc-total").value),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(o).then((e=>{if(200!==e.status)throw new Error("status network is not 200");n.textContent="Спасибо! Мы скоро с Вами свяжемся",setTimeout((()=>{n.remove()}),3e3)})).catch((e=>{n.textContent="Что-то пошло не так",setTimeout((()=>{n.remove()}),3e3),console.error(e)})),e.reset()}))}))})(),(()=>{const e=document.querySelector(".smooth-scroll");e.style.display="none",document.addEventListener("scroll",(()=>{const t=document.querySelector("#offer").getBoundingClientRect().bottom;e.style.display=t<0?"block":"none"})),e.addEventListener("click",(()=>{const e=document.querySelector("#header").getBoundingClientRect().top;window.scrollBy({top:e,behavior:"smooth"})}))})(),document.querySelectorAll("form").forEach((e=>{(e=>{const t=document.createElement("div");t.style.cssText="font-size: 12px; line-height: 2; color: red;",[...e.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)).forEach((e=>{e.setAttribute("required",!0),e.addEventListener("input",(()=>{"fio"===e.name?(e.style.border="",e.value=e.value.replace(/[^а-яё a-z]/gi,""),e.addEventListener("blur",(()=>{e.value.length>1?(t.remove(),e.value=e.value.replace(/[^а-яё a-z]/gi,"").replace(/^[ \s]+|[ \s]+$/g,"").replace(/^[-]+|[-]+$/g,"").replace(/\s+/g," ").replace(/-+/g,"-").split(" ").map((e=>{if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")):(e.style.border="2px solid red",e.value="",t.textContent="Имя должно быть не короче 2х букв.",e.insertAdjacentElement("afterend",t),setTimeout((()=>{t.remove()}),5e3))}))):"phone"===e.name&&(e.style.border="",e.setAttribute("required",!0),e.value=e.value.replace(/[^0-9()+]/,""),e.addEventListener("blur",(()=>{/^\+?[0-9]{7,16}$/.test(e.value)?(t.remove(),e.value=e.value.replace(/[^0-9\+]/g,"")):(e.style.border="2px solid red",e.value="",t.textContent="Номер телефона должен содержать от 7 до 16 цифр.",e.insertAdjacentElement("afterend",t),setTimeout((()=>{t.remove()}),5e3))})))}))}))})(e)})),new class{constructor({main:e,wrap:t,next:n,prev:i,infinity:s=!1,position:o=0,responsive:r=[],slidesToShow:l=3}){e&&t||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(i),this.slidesToShow=l,this.options={position:o,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyles(){let e=document.querySelector("#benefitsCarusel-style");e||(e=document.createElement("style"),e.id="sliderCarusel-style",document.head.append(e)),e.textContent=`\n            .glo-slider {\n                overflow: hidden !important;\n                max-width: 540px;\n                margin: 0 auto;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                display: flex !important;\n                flex: 0 0 ${this.options.widthSlide}% !important;\n                width: ${this.options.widthSlide}% !important;\n                flex-direction: column;\n            }\n            @media (max-width: 576px){\n                .glo-slider {\n                    overflow: hidden !important;\n                    max-width: 180px;\n                    margin: 0 auto;\n                }\n            }\n        }\n        `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),n=Math.max(...t),i=()=>{const i=document.documentElement.clientWidth;if(i<n)for(let e=0;e<t.length;e++)i<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()};i(),window.addEventListener("resize",i)}}({main:".benefits-inner",wrap:".benefits-wrap",prev:".benefits__arrow--left",next:".benefits__arrow--right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init(),new class{constructor({main:e,wrap:t,next:n,prev:i,infinity:s=!1,position:o=0,responsive:r=[],slidesToShow:l=2}){e&&t||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(i),this.slidesToShow=l,this.options={position:o,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-services-slider"),this.wrap.classList.add("glo-services-slider__wrap");for(const e of this.slides)e.classList.add("glo-services-slider__item")}addStyles(){let e=document.querySelector("#servicesCarusel-style");e||(e=document.createElement("style"),e.id="sliderCarusel-style",document.head.append(e)),e.textContent=`\n            .glo-services-slider {\n                overflow: hidden !important;\n                margin: 0 auto;\n            }\n            .glo-services-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-services-slider__item {\n                display: flex !important;\n                flex: 0 0 ${this.options.widthSlide}% !important;\n                width: ${this.options.widthSlide}% !important;\n            }\n            @media (max-width: 576px){\n                .glo-services-slider {\n                    overflow: hidden !important;\n                    max-width: 500px;\n                    margin: 0 auto;\n                }\n                .service-block {\n                    width: 400px;\n                }\n            }\n            @media (max-width: 992px){\n                .service-block {\n                    width: 600px;\n                }\n                .service-image{\n                    display: none;\n                }\n                .service-text{\n                    margin-left: 0;\n                    border-radius: 10px;\n                }\n                .service-button{\n                    width: 160px;\n                }\n            }\n            @media (max-width: 1199px){\n                .service-block {\n                    width: 600px;\n                }\n                .service-image{\n                    display: none;\n                }\n                .service-text{\n                    margin-left: 0;\n                    border-radius: 10px;\n                }\n            }\n        }\n        `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),n=Math.max(...t),i=()=>{const i=document.documentElement.clientWidth;if(i<n)for(let e=0;e<t.length;e++)i<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()};i(),window.addEventListener("resize",i)}}({main:".services-inner",wrap:".services-wrap",prev:".services__arrow--left",next:".services__arrow--right",slidesToShow:2,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init()}))})();