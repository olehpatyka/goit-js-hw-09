const feedbackFormKey = 'feedback-form-state';
const formElem = document.querySelector('.feedback-form');
let formData = new FormData(formElem);
const inputEmailElem = formElem.querySelector("[name='email']");
const inputMessageElem = formElem.querySelector("[name='message']");

document.addEventListener('DOMContentLoaded', e => {
  const localFeedback = localStorage.getItem(feedbackFormKey);
  if (!localFeedback) {
    return;
  }
  const feedbackObj = JSON.parse(localFeedback);

  inputEmailElem.value = feedbackObj.email || '';
  inputMessageElem.value = feedbackObj.message || '';
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  formData = new FormData(e.currentTarget);

  const formFields = {
    email: formData.get('email'),
    message: formData.get('message'),
  };

  if (!formFields.email || !formFields.message) {
    alert('Fill please all fields');
  } else {
    console.log(formFields);

    localStorage.removeItem(feedbackFormKey);
    e.currentTarget.reset();

    formData = new FormData(e.currentTarget);
  }
});

formElem.addEventListener('input', e => {
  formData = new FormData(e.currentTarget);

  const formFields = {
    email: formData.get('email'),
    message: formData.get('message'),
  };

  localStorage.setItem(feedbackFormKey, JSON.stringify(formFields));
});
