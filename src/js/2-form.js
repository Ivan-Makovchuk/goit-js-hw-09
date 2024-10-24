const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

// Збереження даних у локальне сховище
function saveToLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Завантаження даних із локального сховища
function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : formData;
}

// Заповнення форми з локального сховища
window.addEventListener('DOMContentLoaded', () => {
  formData = loadFromLocalStorage();
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
});

// Обробка введення даних
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage(formData);
});

// Обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;
  
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});
