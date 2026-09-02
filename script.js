document.addEventListener('DOMContentLoaded', function() {
  const statusButtons = document.querySelectorAll('.status-btn');
  const allCards = document.querySelectorAll('.grid-card');
  
  function filterCards(category) {
    allCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (cardCategory === category) {
        card.classList.remove('hidden-card');
        card.style.animation = 'fadeIn 0.5s ease-out';
      } else {
        card.classList.add('hidden-card');
      }
    });
  }
  
  function updateActiveButton(activeButton) {
    statusButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    activeButton.classList.add('active');
  }
  
  // Назначаем обработчики на кнопки
  statusButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tab = this.getAttribute('data-tab');
      updateActiveButton(this);
      filterCards(tab);
    });
  });
  
  // Изначально показываем только карточку "ТОВАРЫ" (services)
  const activeButton = document.querySelector('.status-btn.active');
  if (activeButton) {
    const tab = activeButton.getAttribute('data-tab');
    filterCards(tab);
  } else {
    // Если по какой-то причине нет активной кнопки, активируем первую
    const firstButton = statusButtons[0];
    if (firstButton) {
      firstButton.classList.add('active');
      filterCards(firstButton.getAttribute('data-tab'));
    }
  }
});