// Данные секций
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
    { title: 'Топ-3 активности (3000+ сообщений/нед)', price: '1000 ⏚' },
    { title: 'Актив под постами в лайф канале (неделя)', price: '300 ⏚' },
    { title: 'Оригинальная идея для интерактива', price: '100 ⏚' },
    { title: 'Участие в интерактивах и играх', price: 'индивидуально' },
    { title: 'Оригинальная идея для видео', price: '30 ⏚' }
  ],
  salary: [
    { title: 'Старший админ', price: '1500 ⏚ / 2 недели' },
    { title: 'Младший админ', price: '1200 ⏚ / 2 недели' },
    { title: 'Админ по лайфу и следящий', price: '1000 ⏚ / 2 недели' },
    { title: 'Монтажер (за видео)', price: '150 ⏚' },
    { title: 'Интерактивщик (за игру)', price: '150 ⏚' }
  ],
  achievements: [
    { title: '5000 сообщений', price: '1500 ⏚' },
    { title: '10000 сообщений', price: '2000 ⏚' },
    { title: '20000 сообщений', price: '2500 ⏚' },
    { title: '50000 сообщений', price: '5000 ⏚' }
  ]
};

const grid = document.getElementById('fanficGrid');
const navLinks = document.querySelectorAll('.space-nav__link');

// Добавляем плавающие частицы ко всем ссылкам
navLinks.forEach(link => {
  const particle = document.createElement('span');
  particle.classList.add('floating-particle');
  link.appendChild(particle);
});

// Функция обновления активной ссылки
function updateActiveLink(sectionKey) {
  navLinks.forEach(link => {
    link.style.background = 'rgba(30, 20, 15, 0.35)';
    link.style.borderColor = 'rgba(196, 92, 47, 0.12)';
    link.style.boxShadow = 'none';
    link.style.transform = 'scale(1)';
    link.classList.remove('active');
  });

  const activeLink = Array.from(navLinks).find(link => link.dataset.section === sectionKey);
  if (activeLink) {
    activeLink.style.background = 'rgba(196, 92, 47, 0.2)';
    activeLink.style.borderColor = '#e38c42';
    activeLink.style.boxShadow = '0 0 40px rgba(227, 140, 66, 0.3), 0 8px 25px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(227, 140, 66, 0.08)';
    activeLink.style.transform = 'translateY(-3px) scale(1.03)';
    activeLink.classList.add('active');
  }
}

// Рендер карточек
function renderCards(sectionKey) {
  const items = data[sectionKey];
  if (!items) return;

  let html = '';
  items.forEach((item, index) => {
    const price = item.price || '';
    const delay = index * 0.07;
    html += `
      <div class="fic-card" style="animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.1) ${delay}s both;">
        <div class="fic-info">
          <div class="fic-title">${item.title}</div>
          <div class="fic-meta"><span class="pairing">${price}</span></div>
        </div>
      </div>
    `;
  });

  // Плавное исчезновение старых карточек
  const oldCards = grid.querySelectorAll('.fic-card');
  oldCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(15px)';
    card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
  });

  setTimeout(() => {
    grid.innerHTML = html;
    updateActiveLink(sectionKey);
  }, 250);
}

// Клики по навигации с тактильной обратной связью
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section) {
      // Эффект нажатия
      link.style.transform = 'scale(0.94)';
      setTimeout(() => {
        link.style.transform = '';
      }, 150);
      renderCards(section);
    }
  });
});

// Загрузка: показываем товары
document.addEventListener('DOMContentLoaded', () => {
  renderCards('goods');
});