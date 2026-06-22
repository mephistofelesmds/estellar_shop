// Данные для каждой секции
const data = {
  goods: [
    { title: 'Освобождение от чистки', price: '1700 ⏚' },
    { title: 'Снятие варна за пункты правил 1,2,4,7', price: '2000 ⏚' },
    { title: 'Анти-бан при неактиве в течение 3-х дней', price: '1700 ⏚' },
    { title: 'Снижение нормы до 150 сообщений', price: '1300 ⏚' },
    { title: 'Дополнительная смена роли', price: '700 ⏚' },
    { title: 'Продление реста на неделю', price: '1800 ⏚' },
    { title: 'Подарок за звезды', price: '3000 ⏚' }
  ],
  currency: [
    { title: 'Топ-3 активности (3000+ сообщений/нед)', reward: '1000 ⏚' },
    { title: 'Актив под постами в лайф канале (неделя)', reward: '300 ⏚' },
    { title: 'Оригинальная идея для интерактива', reward: '100 ⏚' },
    { title: 'Участие в интерактивах и играх', reward: 'индивидуально' },
    { title: 'Оригинальная идея для видео', reward: '30 ⏚' }
  ],
  salary: [
    { title: 'Старший админ', reward: '1500 ⏚ / 2 недели' },
    { title: 'Младший админ', reward: '1200 ⏚ / 2 недели' },
    { title: 'Админ по лайфу и следящий', reward: '1000 ⏚ / 2 недели' },
    { title: 'Монтажер (за видео)', reward: '150 ⏚' },
    { title: 'Интерактивщик (за игру)', reward: '150 ⏚' }
  ],
  achievements: [
    { title: '5000 сообщений', reward: '1500 ⏚' },
    { title: '10000 сообщений', reward: '2000 ⏚' },
    { title: '20000 сообщений', reward: '2500 ⏚' },
    { title: '50000 сообщений', reward: '5000 ⏚' }
  ]
};

const grid = document.getElementById('fanficGrid');
const navLinks = document.querySelectorAll('.space-nav__link');

// Функция рендера карточек
function renderCards(sectionKey) {
  const items = data[sectionKey];
  if (!items) return;

  let html = '';
  items.forEach(item => {
    const price = item.price || item.reward || '';
    html += `
      <div class="fic-card">
        <div class="fic-info">
          <div class="fic-title">${item.title}</div>
          <div class="fic-meta"><span class="pairing">${price}</span></div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;

  // Обновляем активный пункт навигации
  navLinks.forEach(link => {
    link.style.background = 'rgba(30, 20, 15, 0.5)';
    link.style.borderColor = 'rgba(196, 92, 47, 0.3)';
    link.style.boxShadow = 'none';
  });
  const activeLink = Array.from(navLinks).find(link => link.dataset.section === sectionKey);
  if (activeLink) {
    activeLink.style.background = 'rgba(196, 92, 47, 0.2)';
    activeLink.style.borderColor = '#e38c42';
    activeLink.style.boxShadow = '0 0 25px rgba(227, 140, 66, 0.4), inset 0 0 25px rgba(227, 140, 66, 0.1)';
  }
}

// Обработчики навигации
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section) renderCards(section);
  });
});

// При загрузке показываем "Товары"
document.addEventListener('DOMContentLoaded', () => {
  renderCards('goods');
});