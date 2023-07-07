let pwd01 = document.querySelector('input#pwd')
let pwd02 = document.querySelector('input#confirm-pwd')
let message = document.querySelector('.match-error');

function comparePwd () {
    if (pwd01.value !== pwd02.value) {
        message.textContent = 'Passwords do not match'
    } else if (pwd01.value === pwd02.value) {
        message.textContent = '';
    }
}
pwd02.addEventListener('keyup', () => comparePwd())

pwd01.addEventListener('keyup', () => {
    comparePwd();
    checkVisibility();
})

// Show password feature


let showPwd = document.querySelector('input#show-pwd')

showPwd.addEventListener('click', () => CheckShowPwd())

function CheckShowPwd () {
    if (showPwd.checked == true) {
        pwd01.setAttribute('type', 'text');
        pwd02.setAttribute('type', 'text');
    } else {
        pwd01.setAttribute('type', 'password');
        pwd02.setAttribute('type', 'password');
    }
}

// Only show the show pwd option if user is typing in pwd field.

let showPwdContainer = document.querySelector('.view-pwd-container');

function checkVisibility () {
    console.log('test');
    if (pwd01.value == '') {
        showPwdContainer.classList.remove('show-pwd');
        showPwdContainer.classList.add('hide-pwd');
    } else {
        showPwdContainer.classList.remove('hide-pwd');
        showPwdContainer.classList.add('show-pwd');
    }
}
