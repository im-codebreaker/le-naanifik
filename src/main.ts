import './style.scss'

const buttonBurger: HTMLButtonElement | null = document.querySelector('.navbar-burger');

buttonBurger?.addEventListener('click', () => {
  buttonBurger.classList.toggle('open');
})