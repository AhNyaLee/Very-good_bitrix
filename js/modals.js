
document.addEventListener('DOMContentLoaded', function () {

  // Функция для показа модального окна
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }

  // Функция для скрытия модального окна
  function hideModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // Обработчик кликов по ссылкам для открытия модальных окон
  document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Отменяем стандартное действие
      const modalId = this.getAttribute('data-target');
      showModal(modalId);
    });
  });

  // Обработчик кликов для закрытия модальных окон
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (event) {
      // Проверяем, кликнули ли вне области .modal__body
      if (!modal.querySelector('.modal__body').contains(event.target)) {
        hideModal(modal);
      }
    });

    // Обработчик кликов по кнопке закрытия
    modal.querySelectorAll('.close-button').forEach(button => {
      button.addEventListener('click', function () {
        hideModal(modal);
      });
    });

  });

});
