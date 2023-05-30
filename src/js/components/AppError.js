import { errorImg } from '../Assets';

export const ErrorComponent = {
  id: 'error',
  title: '404',
  render: (className = 'container') => {
    return `
      <section class="${className} error">
        <img class="error__img" src="${errorImg}" alt="error 404">
        <p class="error__msg">Page not found (<span>404</span> error), please try to return to the <a href="#main">main page</a>.</p>
      </section>
    `;
  }
};