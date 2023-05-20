import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const formRef = document.querySelector('.feedback-form');
const userEmailRef = document.querySelector('input[name="email"]');
const userMessageRef = document.querySelector('textarea[name="message"]');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(saveFormDataToLocalStorage, 500));

populateFormFields();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  formRef.reset();
  localStorage.removeItem(STORAGE_KEY);
  // clearFormDataFromLocalStorage();
}

function saveFormDataToLocalStorage() {
  formData = {
    email: userEmailRef.value,
    message: userMessageRef.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    userEmailRef.value = formData.email || '';
    userMessageRef.value = formData.message || '';
  }
}

function clearFormDataFromLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

///////////////////// 2 v ////////////////

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const feedbackForm = document.querySelector(`.feedback-form`);

// initForm();

// feedbackForm.addEventListener(`submit`, evt => {
//   evt.preventDefault();
//   const formData = new FormData(feedbackForm);
//   formData.forEach((value, name) => console.log(value, name));
// });

// feedbackForm.addEventListener(`change`, evt => {
//   let persistedFilters = localStorage.getItem(STORAGE_KEY);
//   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//   persistedFilters[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFilters));
// });

// feedbackForm.addEventListener(`reset`, () => {
//   localStorage.removeItem(STORAGE_KEY);
// });

// function initForm() {
//   let persistedFilters = localStorage.getItem(STORAGE_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       feedbackForm.elements[name].value = value;
//     });
//   }
// }
