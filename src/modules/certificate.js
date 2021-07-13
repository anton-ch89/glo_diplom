//Документы

const certificate = () => {
    const docs = document.querySelectorAll('.sertificate-document'),
        overlay = document.querySelector('.overlay'),
        
        body = document.querySelector('body');

      body.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.sertificate-document');
        if(target){
            event.preventDefault();
            docs.forEach(e => {
                if(e === target){
                    overlay.style.display = 'block';
                    // body.insertAdjacentHTML('beforeend', `
                    // <div>
                    // <img src="images/documents/document4.jpg" class="img-responsive" alt="">
                    // </div>
                    // `);
                }
            });
        }
    });
};

export default certificate;