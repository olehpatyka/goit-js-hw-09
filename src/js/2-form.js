const feedbackFormKey = 'feedback-form-state';
const formElem = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

const inputEmailElem = formElem.querySelector("[name='email']");
const inputMessageElem = formElem.querySelector("[name='message']");

document.addEventListener('DOMContentLoaded', e => {
  const localFeedback = localStorage.getItem(feedbackFormKey);
  if (!localFeedback) {
    return;
  }
  const feedbackObj = JSON.parse(localFeedback);

  formData.email = feedbackObj.email || '';
  formData.message = feedbackObj.message || '';

  inputEmailElem.value = formData.email;
  inputMessageElem.value = formData.message;
});

formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem(feedbackFormKey);
    e.currentTarget.reset();
  }
});

formElem.addEventListener('input', e => {
  const formClass = new FormData(e.currentTarget);

  formData.email = formClass.get('email');
  formData.message = formClass.get('message');

  localStorage.setItem(feedbackFormKey, JSON.stringify(formData));
});
