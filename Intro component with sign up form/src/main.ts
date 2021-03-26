const button = document.querySelector('#form-submit');
const form: HTMLFormElement = document.forms[0];
const inputContainer = document.querySelectorAll('.form__input-container');

function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener('click', event => {
  event.preventDefault();

  inputContainer.forEach(item => {
    const input: HTMLInputElement = item.querySelector('.form__input');
    if (input.value === '') {
      item.classList.add('form__error');
    } else {
      if (input.name === 'email') {
        if (!validateEmail(input.value)) {
          item.classList.add('form__error');
          return;
        }
      }
      item.classList.remove('form__error');
    }
  });
});
