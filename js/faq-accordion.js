document.addEventListener('DOMContentLoaded', function () {
  const faqSection = document.querySelector('.faq');

  if (faqSection) {
    const accordions = faqSection.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      accordion.addEventListener('click', function (event) {
        if (!accordion.hasAttribute('open')) {
          event.preventDefault();
          // Закрываем все аккордеоны
          accordions.forEach((otherAccordion) => {
            otherAccordion.removeAttribute('open');
          });
          // Открываем активный аккордеон
          accordion.setAttribute('open', '');
        } else {
          console.log('Оставляем всё как есть');
        }
      });
    });
  }
});
