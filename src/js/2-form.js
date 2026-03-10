
let formData = {
    email:"",
    message: "",
};

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (e) => {

    formData[e.target.name] = e.target.value.trim();

    const zip = JSON.stringify(formData);
    localStorage.setItem(storageKey, zip);
});
document.addEventListener('DOMContentLoaded', e => {
    const zip = localStorage.getItem(storageKey);
    if (zip !== null) {
        formData = JSON.parse(zip);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);

    form.reset();
    localStorage.removeItem(storageKey);
        
    formData = {
        email:"",
        message: "",
    };

});

