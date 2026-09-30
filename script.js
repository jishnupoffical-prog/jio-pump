const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

document.querySelectorAll('.product-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.product-tabs button.active')?.classList.remove('active');
    document.querySelector('.product-tabs button[aria-selected="true"]')?.setAttribute('aria-selected', 'false');
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    const filter = button.dataset.tab;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});
