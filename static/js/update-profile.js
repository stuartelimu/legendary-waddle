

const MOBFORM = document.querySelector('#edit-phone');
console.log(MOBFORM)
const textField = new mdc.textField.MDCTextField(MOBFORM.querySelector('.mdc-text-field'));
const TELINPUT = MOBFORM.querySelector('#id_telephone')
  
const EDITPHONE = document.querySelector('.edit-phone');


EDITPHONE.addEventListener('click', () => {
  // const phoneInput = document.querySelector('.telephone');
  if(EDITPHONE.textContent == "edit") {
    EDITPHONE.textContent = "save";
    TELINPUT.focus();
  } else {
    EDITPHONE.textContent = "edit";
  }
})

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');


TELINPUT.addEventListener("blur", () => {
  console.log(TELINPUT.value);
  EDITPHONE.textContent = "edit";
  UPDATETEL();
})

TELINPUT.addEventListener("focus", () => {
  console.log(TELINPUT.value);
  EDITPHONE.textContent = "save";
})

const UPDATETEL = () => {
  const request = new Request(
    MOBFORM.action,
    {headers: {'X-CSRFToken': csrftoken}}
  );
  fetch(request, {
    method: 'POST',
    body: {
      'telephone': TELINPUT.value
    },
    mode: 'same-origin'
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
    // if(data.statusCode == 200) { 
    //   PWD.style.display = 'unset';
    //   document.querySelector('#btn-login span').textContent = 'sign up'; 
    // }
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}

