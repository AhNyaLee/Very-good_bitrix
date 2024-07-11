document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы input с типом "tel"
  var phoneInputs = document.querySelectorAll('input[type="tel"]');

  // Проходим по каждому из найденных элементов
  phoneInputs.forEach(function (input) {
    // Настройки маски
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    // Инициализация маски
    var mask = IMask(input, maskOptions);

    // Обработчик для проверки длины номера при отправке формы
    input.closest('form').addEventListener('submit', function (event) {
      let digitsCount = input.value.replace(/\D+/g, '').length; // Удаляем все нецифровые символы и считаем оставшиеся цифры
      if (digitsCount < 11) {
        // Если количество цифр меньше 11, отменяем отправку формы и выводим сообщение
        event.preventDefault();
        alert('Введите корректный номер телефона. Минимум 11 цифр. Пример: +7 918 089 60 09');
      }
    });
  });
});
