import './index.html';
import './index.scss';

const order = document.querySelector('.order');
const form = document.querySelector('.order__form');
const btnSubmitText = document.querySelector('.order__submit-btn span');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const errorMessage = document.createElement('p');

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  btnSubmitText.textContent = 'Загрузка ...';

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      btnSubmitText.textContent = 'Заказ отправлен!';
      console.log(data);
    })
    .catch(() => {
      console.log('Ошибка');
      errorMessage.style.color = 'white';
      errorMessage.textContent = 'Что-то пошло не так... ';
      order.append(errorMessage);
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        btnSubmitText.textContent = 'ЗАКАЗАТЬ';
        errorMessage.remove();
      }, 1000);
    });
});
