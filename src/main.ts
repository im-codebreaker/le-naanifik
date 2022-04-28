import './style.scss'

interface ObserverOptions {
  root: null,
  rootMargin: string,
  threshold: number
}

const date: Date = new Date();
const planningItems: NodeListOf<HTMLElement> | null = document.querySelectorAll('.planning_grid-item');
const buttonBurger: HTMLButtonElement | null = document.querySelector('.navbar-burger');

const options: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}


let observer = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('active')) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    }
  })
}, options);

let targets: NodeListOf<HTMLElement> | null = document.querySelectorAll('.target');

targets.forEach((target: HTMLElement) => { observer.observe(target) })


planningItems.forEach((item: HTMLElement): void => {
  if (date.getDay().toString() === item.dataset?.date) {
    item.classList.add('active')
  } else {
    item.classList.remove('active')
  }
}
);

buttonBurger?.addEventListener('click', () => {
  buttonBurger.classList.toggle('open');
})

console.log('Hello')