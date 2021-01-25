// const EMAIL = window.location.href.match(/\?email=(.*)/);
const EEMAIL = sessionStorage.getItem('email')

console.log(sessionStorage.getItem('name'));

if (sessionStorage.getItem('name')) {
  // if there was a name from google
  // document.querySelector('input[name="fullname"]').value = sessionStorage.getItem('name');
  // document.querySelector('input[type=email]').setAttribute('readonly', '');

}

document.querySelector('input[name=Password]').value = sessionStorage.getItem('password');
document.querySelector('input[name=Google_UID]').value = sessionStorage.getItem('id_token');



document.querySelector('input[type=email]').value = EEMAIL;
document.querySelector('input[name=FName]').value = sessionStorage.getItem('fname');
document.querySelector('input[name=LName]').value =  sessionStorage.getItem('lname');

// document.querySelector('input[type=email]').setAttribute('readonly', '');

const checkConfirmPassword = () => {
  let valid = false;
  const password = document.querySelector('input[name=password]').value.trim();
  const passwordField = new mdc.textField.MDCTextField(document.querySelector('input[name=password1]').parentElement);
  const confirmPassword = document.querySelector('input[name=password1]').value.trim();
  const helperValidationText = new mdc.textField.MDCTextFieldHelperText(document.querySelector('#confirm-password-helper-text'));

  if (password !== confirmPassword) {
    passwordField.valid = false;
    helperValidationText.foundation.setContent('Passwords do not match');
  } else {
    passwordField.valid = true;
    helperValidationText.foundation.setContent('');
    valid = true;
  }

  return valid;

}

document.querySelector('input[name=password1]').addEventListener('input', () => {
  const helperValidationText = new mdc.textField.MDCTextFieldHelperText(document.querySelector('#confirm-password-helper-text'));

  if(checkConfirmPassword()) {
    helperValidationText.foundation.setPersistent(false);
  } else {
    helperValidationText.foundation.setPersistent(true);

  }
})


// const PWD = document.querySelector("#pwd");
// var letter = document.querySelector("#letter span");
// var capital = document.querySelector("#capital span");
// var number = document.querySelector("#number span");
// var len = document.querySelector("#len span");
// var em = document.querySelector("#em span");



// PWD.onblur = function() {
//   document.querySelector(".pwd").style.display = "none";
// };

// PWD.onkeyup = function() {
//   document.querySelector(".pwd").style.display = "block";
//   let lowerCaseLetters = /[a-z]/g;

//   if (PWD.value.match(lowerCaseLetters)) {
//     letter.textContent = "done";
//     letter.style.backgroundColor = "green";
//   } else {
//     letter.textContent = "close";
//     letter.style.backgroundColor = "red";
//   }

//   let upperCaseLetters = /[A-Z]/g;

//   if (PWD.value.match(upperCaseLetters)) {
//     capital.textContent = "done";
//     capital.style.backgroundColor = "green";
//   } else {
//     capital.textContent = "close";
//     capital.style.backgroundColor = "red";
//   }
  
//   let numbers = /[0-9]/g;

//   if (PWD.value.match(numbers)) {
//     number.textContent = "done";
//     number.style.backgroundColor = "green";
//   } else {
//     number.textContent = "close";
//     number.style.backgroundColor = "red";
//   }

//   if (PWD.value.length >= 8) {
//     len.textContent = "done";
//     len.style.backgroundColor = "green";
//   } else {
//     len.textContent = "close";
//     len.style.backgroundColor = "red";
//   }

// };

// toggle confirm password visibility
document.querySelector('#toggle-confirm-password').addEventListener('click', () => {
  const confirmPassword = document.querySelector('input[name=password1]');

  if(confirmPassword.type === 'password') {
    confirmPassword.type = 'text';
    document.querySelector('#toggle-confirm-password').textContent = 'visibility_off';
  } else {
    confirmPassword.type = 'password';
    document.querySelector('#toggle-confirm-password').textContent = 'visibility';
  }
})


const RFORM = document.querySelector('form');


// const CHECKBOX = document.querySelector();


RFORM.addEventListener('submit', (e) => {


})
