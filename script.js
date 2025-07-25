const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  nav.classList.toggle('open');
});
