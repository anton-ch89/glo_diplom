// Отправка формы

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся';
        
    const forms = document.querySelectorAll('form'),
        text = document.querySelector('title').innerText;
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;`;

    forms.forEach(elem =>{
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            elem.append(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            if (text === 'Остекление балконов и лоджий' && document.getElementById('calc-total')){
                body[`total`] = document.getElementById('calc-total').value;
            }
    
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                    console.error(error);
                });
                elem.reset();
        });
    });
};

export default sendForm;