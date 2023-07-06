let pwd01 = document.querySelector('input#pwd')
let pwd02 = document.querySelector('input#confirm-pwd')
let pwdContainer = document.querySelector('.pwd-container');
let message = document.createElement('p');
pwdContainer.appendChild(message);

function comparePwd () {
    if (pwd01.value !== pwd02.value) {
        message.textContent = 'Passwords do not match'
    } else if (pwd01.value === pwd02.value) {
        message.textContent = '';
    }
}


pwd02.addEventListener('keyup', () => comparePwd());

pwd01.addEventListener('keyup', () => comparePwd());


let showPwd = document.querySelector('input#show-pwd')

showPwd.addEventListener('click', () => CheckShowPwd())

function CheckShowPwd () {
    if (showPwd.checked == true) {
        pwd01.setAttribute('type', 'text');
    } else {
        pwd01.setAttribute('type', 'password');
    }
}