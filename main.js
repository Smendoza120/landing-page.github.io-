const email = document.querySelector('.form__mail-input');
const buttonStarted = document.querySelector('.form__mail-button');
const messageError = document.querySelector('.form__error');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

buttonStarted.addEventListener('click', alertError);


function alertError(){
    let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!expReg.test(email.value)){
        messageError.classList.add('form__error-action');
        email.text = '';
    } else {
        messageError.classList.remove('form__error-action');
        email.text = '';
        email.value = '';
    }
}

