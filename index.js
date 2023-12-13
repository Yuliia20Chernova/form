const form = document.querySelector("form");
document.querySelector('[type='button']').addEventListener('click', e=> {
    if (!form.checkValidity()) {
        alert('Please, sign up form!');
    }

});