const form = document.querySelector('#form');
const input = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();

    const emailString = input.value;
    console.log(emailString);
    if (!isValid(emailString)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
})

function isValid(email) {
    // Regular Expression to validate an email address in JavaScript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}