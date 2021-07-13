//Валидация форм

const validationForms = form => {
    const errorNameMessage = 'Имя должно быть не короче 2х букв.',
        errorPhoneMessage = 'Номер телефона должен содержать от 7 до 16 цифр.',
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = `font-size: 12px; line-height: 2; color: red;`;


    const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button');
    elementsForm.forEach(item => {
        item.setAttribute('required', true);
        item.addEventListener('input', () => {
            if (item.name === 'fio') {
                item.style.border = '';
                item.value = item.value.replace(/[^а-яё a-z]/ig, '');
                item.addEventListener('blur', () => {
                    if (item.value.length > 1) {
                        statusMessage.remove();
                        item.value = item.value.replace(/[^а-яё a-z]/gi, '')
                            .replace(/^[ \s]+|[ \s]+$/g, '')
                            .replace(/^[-]+|[-]+$/g, '')
                            .replace(/\s+/g, ' ')
                            .replace(/-+/g, '-')
                            .split(' ').map(item => {
                                if (item) {
                                    return item[0].toUpperCase() + item.slice(1).toLowerCase();
                                }
                            })
                            .join(' ');
                    } else {
                        item.style.border = '2px solid red';
                        item.value = '';
                        statusMessage.textContent = errorNameMessage;
                        item.insertAdjacentElement("afterend", statusMessage);
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    }
                });
    
            } else if (item.name === 'phone') {
                item.style.border = '';
                item.setAttribute('required', true);
                item.value = item.value.replace(/[^0-9()+]/, '');
                item.addEventListener('blur', () => {
                    const pattern = /^\+?[0-9]{7,16}$/;
                    if (pattern.test(item.value)) {
                        statusMessage.remove();
                        item.value = item.value.replace(/[^0-9\+]/g, '');
                    } else {
                        item.style.border = '2px solid red';
                        item.value = '';
                        statusMessage.textContent = errorPhoneMessage;
                        item.insertAdjacentElement("afterend", statusMessage);
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    }
                });
    
            }
        });
    });
};


export default validationForms;