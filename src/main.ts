import './style.scss'

const date: Date = new Date();
const planningItems: NodeListOf<HTMLElement> | null = document.querySelectorAll('.planning_grid-item');
const buttonBurger: HTMLButtonElement | null = document.querySelector('.navbar-burger');

buttonBurger?.addEventListener('click', () => {
  buttonBurger.classList.toggle('open');
})

Array(planningItems)[0].forEach((item) => {
  if (date.getDay().toString() === item.dataset?.date) {
    item.classList.add('active')
  } else {
    item.classList.remove('active')
  }
}
);