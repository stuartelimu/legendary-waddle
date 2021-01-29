// const MDCFoo = mdc.foo.MDCFoo;
// const MDCFooFoundation = mdc.foo.MDCFooFoundation;

// const foo = new MDCFoo(document.querySelector('.mdc-foo'));


// mdc.ripple.MDCRipple.attachTo(document.querySelector('.username'));

// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

[].forEach.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    mdc.textField.MDCTextField.attachTo(el);
  });


// form submit
const PWD = document.querySelector("#id_password");
var letter = document.querySelector("#letter span");
var capital = document.querySelector("#capital span");
var number = document.querySelector("#number span");
var len = document.querySelector("#len span");
var em = document.querySelector("#em span");



PWD.onblur = function() {
  document.querySelector(".pwd").style.display = "none";
};

PWD.onkeyup = function() {
  document.querySelector(".pwd").style.display = "block";
  let lowerCaseLetters = /[a-z]/g;

  if (PWD.value.match(lowerCaseLetters)) {
    letter.textContent = "done";
    letter.style.backgroundColor = "green";
  } else {
    letter.textContent = "close";
    letter.style.backgroundColor = "red";
  }

  let upperCaseLetters = /[A-Z]/g;

  if (PWD.value.match(upperCaseLetters)) {
    capital.textContent = "done";
    capital.style.backgroundColor = "green";
  } else {
    capital.textContent = "close";
    capital.style.backgroundColor = "red";
  }
  
  let numbers = /[0-9]/g;

  if (PWD.value.match(numbers)) {
    number.textContent = "done";
    number.style.backgroundColor = "green";
  } else {
    number.textContent = "close";
    number.style.backgroundColor = "red";
  }

  if (PWD.value.length >= 8) {
    len.textContent = "done";
    len.style.backgroundColor = "green";
  } else {
    len.textContent = "close";
    len.style.backgroundColor = "red";
  }

};

// toggle password visibility
document.querySelector('.mdc-text-field__icon--trailing').addEventListener('click', () => {
  if(PWD.type === 'password') {
    PWD.type = 'text';
    document.querySelector('.mdc-text-field__icon--trailing').textContent = 'visibility_off';
  } else {
    PWD.focus();
    PWD.type = 'password';
    document.querySelector('.mdc-text-field__icon--trailing').textContent = 'visibility';
  }
})

// const input = document.querySelector('input[type="checkbox"]');

// document.querySelector('input[type="checkbox"]').setCustomValidity("Please indicate that you accept the Terms and Conditions");

// input.addEventListener('invalid', function (event) {
//   if (event.target.validity.valueMissing) {
//     event.target.setCustomValidity('Please accept the Terms & Conditions.');
//   }
// })

// input.addEventListener('change', function (event) {
//   event.target.setCustomValidity('');
// })

// validate email 
const EMAILINPUT = document.querySelector('input[type="email"]');
EMAILINPUT.onblur = function() {
  document.querySelector(".validation-card.email").style.display = "none";
};

EMAILINPUT.onkeyup = function() {
  document.querySelector(".validation-card.email").style.display = "block";

  const MAILFORMAT = /\S+@\S+\.\S+/;
  if(EMAILINPUT.value.match(MAILFORMAT)) {
    em.textContent = "done";
    em.style.backgroundColor = "green";
    // document.querySelector('#btn-login span').textContent = 'sign up';

  } else {
    EMAILINPUT.focus();
    em.textContent = "close";
    em.style.backgroundColor = "red";
    // document.querySelector('#btn-login span').textContent = 'sign in';

  }
};

EMAILINPUT.onchange = function() {

  // document.querySelector('#password').classList.remove('hide');

  // fetch('checkemail.php', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: EMAILINPUT.value
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // }).then(function (response) {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(response);
  // }).then(function (data) {
  //   console.log(data);
  // }).catch(function (error) {
  //   console.warn('Something went wrong.', error);
  // });

  // document.querySelector('#btn-login').textContent = 'sign up';
  // document.querySelector('#btn-login').id = 'btn-continue';


}

// check if new user 
EMAILINPUT.addEventListener('blur', () => {

  // console.log(document.querySelector('#btn-login span'));

  // document.querySelector('#btn-login span').textContent = 'sign in';


  // fetch('checkemail.php', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: EMAILINPUT.value
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // }).then(function (response) {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(response);
  // }).then(function (data) {
  //   console.log(data);
  //   if(data.statusCode == 200) { 
  //     PWD.style.display = 'unset';
  //     document.querySelector('#btn-login span').textContent = 'sign up'; 
  //   }
  // }).catch(function (error) {
  //   console.warn('Something went wrong.', error);
  // });
})

const FORM = document.querySelector('form');

FORM.addEventListener('submit', (e) => {
  // e.preventDefault();

  // let BTNACTION = FORM.querySelector('button[type=submit] span').textContent;

  // login or redirect to next page to continue signup
  // fetch('checkemail.php', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: EMAILINPUT.value
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // }).then(function (response) {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(response);
  // }).then(function (data) {
  //   console.log(data);
  // }).catch(function (error) {
  //   console.warn('Something went wrong.', error);
  // });

  // const input = document.querySelector("#phone").value;
  // console.log(input);

  // sessionStorage.setItem("password", PWD.value);
  // sessionStorage.setItem("email", EMAILINPUT.value);

  // console.log(PWD.value)
  // console.log(EMAILINPUT.value)

  // if (BTNACTION === 'sign up') {
  //   location.href = 'signup.html'
  // } else {

  //   fetch('login.php', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: EMAILINPUT.value,
  //       password: PWD.value
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   }).then(function (response) {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     return Promise.reject(response);
  //   }).then(function (data) {
  //     console.log(data);
  //     if(data.statusCode == 200) { location.href = 'home.html'; }
  //   }).catch(function (error) {
  //     console.warn('Something went wrong.', error);
  //   });

    
  // }

})



// google sign in 
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  // fetch('POST', 'https://file.com/', {email: email, name: name})
  // 200  OK
  // 302  success
  // 404 
}

var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '952635760547-m433c51fic0jjq02thcmlsut10gjjt15.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  // console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        // document.getElementById('name').innerText = "Signed in: " +

        var id_token = googleUser.getAuthResponse().id_token;
        sessionStorage.setItem('id_token', id_token);
        //   googleUser.getBasicProfile().getName();
        console.log("Signed in: " + googleUser.getBasicProfile().getName()); 
        // add email and img to session
        sessionStorage.setItem("email", googleUser.getBasicProfile().getEmail())
        sessionStorage.setItem("avator", googleUser.getBasicProfile().getImageUrl())
        sessionStorage.setItem("name", googleUser.getBasicProfile().getName())

        // get first name
        sessionStorage.setItem("fname", googleUser.getBasicProfile().getGivenName())

        // get last name
        sessionStorage.setItem("lname", googleUser.getBasicProfile().getFamilyName())

        // if first time user

        fetch('checkemail.php', {
          method: 'POST',
          body: JSON.stringify({
            email: googleUser.getBasicProfile().getEmail()
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        }).then(function (data) {
          console.log(data);
          if(data.statusCode == 201) { 
            location.href = "home.html";
          } else { window.location.href = "signup.html"; }
        }).catch(function (error) {
          console.warn('Something went wrong.', error);
        });

        
      }, function(error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
}


startApp();

// facebook sign in
const FBSUBMIT = document.querySelector('#fb');
FBSUBMIT.addEventListener('click', () => {
  FB.login(function(response) {
    if (response.status === 'connected') {
      // Logged into your webpage and Facebook.
      console.log('logged in')
      testAPI();

    } else {
      // The person is not logged into your webpage or we are unable to tell. 
      console.log('something went wrong')

    }
  });
})

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me?fields={fieldname_of_type_UserDevice}', function(response) {

    console.log('user id: ', response.id);

    console.log('auth_method: ', response.auth_method);
    console.log('user birthday: ', response.birthday);

    console.log('gender: ',response.gender)

    console.log('type of device: ', response.os);



    // user_currency
    // list<UserDevices>
    // gender



    console.log('Successful login for: ' + response.name);
    // document.getElementById('status').innerHTML =
    //   'Thanks for logging in, ' + response.name + '!';
    console.log('full name, ' + response.name + '!');

    // add email and img to session
    sessionStorage.setItem("email", response.email)
    console.log('email ' + response.email + '!');

    sessionStorage.setItem("avator", "http://graph.facebook.com/" + response.id + "/picture?type=normal");

    // sessionStorage.setItem("name", googleUser.getBasicProfile().getName())

    // get first name
    sessionStorage.setItem("fname", response.first_name)
    console.log('first name, ' + response.first_name + '!');

    // get last name
    sessionStorage.setItem("lname", response.last_name)
    console.log('last name, ' + response.last_name + '!');

    // if first time user
    location.href = "/signup.html";

    
  });
}

