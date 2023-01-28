'use strict';

const pwd = document.querySelector('#pwd');
const confPwd = document.querySelector('#confirm-pwd');
const passwordsInput = document.querySelectorAll('#pwd, #confirm-pwd');

const pwdWarning = document.createElement('p');
pwdWarning.textContent = '* Passwords do not match';
pwdWarning.style.cssText = 'color: red; font-size: 1.2rem; position: absolute; bottom: 10; margin: 0';



passwordsInput.forEach(input => {
  input.addEventListener('input', () => {
    if (pwd.value && pwd.value !== confPwd.value && confPwd.value) {
      pwd.style.border = '1.5px red solid';
      confPwd.style.border = '1.5px red solid';
      document.querySelector('.form-wrapper').appendChild(pwdWarning);
    } else {
      pwd.style.border = "";
      confPwd.style.border = "";
      pwdWarning.remove();
    }
  })  
});



  
