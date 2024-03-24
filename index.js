const form = document.querySelector('.email-form');
const email = document.getElementById('email');
const errorText = document.querySelector('.error-message');

// Show error message
function showError(message) {
  errorText.className = 'error-message show-error';
  errorText.innerText = message;
  email.className = 'email-form__input show-error';
}

// Hide error message
function hideError() {
  errorText.className = 'error-message';
  email.className = 'email-form__input';
}

// Check email is valid
function isEmailValid() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim() === '') {
    showError(`Whoops! It looks like you forgot to add your email`);
    return false;
  } else if (!re.test(email.value.trim())) {
    showError('Please provide a valid email address');
    return false;
  } else {
    hideError();
    return true;
  }
}

// Event listener
form.addEventListener('submit', (e) => {
  if (!isEmailValid()) e.preventDefault();
});
