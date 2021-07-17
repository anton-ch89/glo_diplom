//Модалльное окно Скидка


const offerModal = () => {
    const offerButton =  document.querySelector('.utp-button > a'),
    offerModal = document.querySelector('.offer-modal'),
    overlay = document.querySelector('.overlay'),
    orderModalClose = document.querySelector('.order-modal__close');

    offerButton.addEventListener('click', (event) => {
        offerModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    orderModalClose.addEventListener('click', (event) => {
        event.preventDefault();
        offerModal.style.display = 'none';
        overlay.style.display = 'none';
    });
    overlay.addEventListener('click', (event) => {
        event.preventDefault();
        offerModal.style.display = 'none';
        overlay.style.display = 'none';
    });

};

export default offerModal;