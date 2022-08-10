import throttle from 'lodash.throttle';

const STORAGE_MSG = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

fillTextarea()

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();

    // console.log('Form submitted');

    if (refs.email.value === '' || refs.textarea.value === '') {
        return alert('All fields must be filled!');
    }

    refs.email = '';
    refs.textarea = '';

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_MSG);
    console.log(formData);
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_MSG, JSON.stringify(formData));
}

function fillTextarea() {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_MSG));

    if (savedMsg) {
        refs.textarea.value = savedMsg.message;
        refs.email.value = savedMsg.email;

        formData.email = savedMsg.email;
        formData.message = savedMsg.message;
    }
}


