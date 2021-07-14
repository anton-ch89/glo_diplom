//модальное окно заказа звонка

const headerModal = () => {
    const callButton = document.querySelector('.btn-block'),
        headerModal = document.querySelector('.header-modal--opened'),
        overlay = document.querySelector('.overlay'),
        headerModalClose = document.querySelector('.header-modal__close');

    callButton.addEventListener('click', (event) => {
        event.preventDefault();
        headerModal.style.display = 'block';
        overlay.style.display = 'block';
    });

    headerModalClose.addEventListener('click', (event) => {
        event.preventDefault();
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    });
    overlay.addEventListener('click', (event) => {
        event.preventDefault();
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
    });

};

export default headerModal;