// Модальные окна Замер

const servicesModal = () => {
    const modal = document.querySelector('.services-modal'),
        overlay = document.querySelector('.overlay');

       document.body.addEventListener('click', (event) => {
        const target = event.target;

        if(target.closest('.service-button')){
            event.preventDefault();
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }
        if(target.closest('.services-modal__close') || target.closest('.overlay')){
            event.preventDefault();
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
        

       });

};

export default servicesModal;