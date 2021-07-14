//Документы

const certificate = () => {
    const docs = document.querySelectorAll('.sertificate-document'),
        body = document.querySelector('body'),
        overlay = document.querySelector('.overlay'),
        head = document.querySelector('head');

    body.insertAdjacentHTML('beforeend', `
        <div id="myModal" class="modal">
        <span class="close">×</span>
        <img class="modal-content" id="img01">
        </div>
        `);

    head.insertAdjacentHTML('beforeend', `
        <style>
body {font-family: Arial, Helvetica, sans-serif;}

.sertificate-document {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.sertificate-document:hover {
    opacity: 0.7;
}

.modal {
    display: none; 
    position: fixed;
    padding-top: 100px;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9); 
}

.modal-content {
    margin: auto;
    display: block;
    width: 60%;
    max-width: 500px;
}


.modal-content, #caption {    
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }
}
</style>
        `);

    const modal = document.querySelector('#myModal'),
        modalImg = document.querySelector('#img01'),
        span = document.querySelector('.close');

    body.addEventListener('click', e => {
        docs.forEach(elem => {
            e.preventDefault();
            let target = e.target;
            if (target.closest('.sertificate-document')) {
                modal.style.display = "block";
                modalImg.src = './images/documents/original/document4.jpg';
            }
            if (target.closest('.close')) {
                modal.style.display = "none";

            }
        });
    });

};

export default certificate;