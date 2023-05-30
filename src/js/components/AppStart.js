import {
        levelIcon_1,
        levelIcon_2,
        levelIcon_3,
        levelIcon_4,
        levelIcon_5,
        levelIcon_6,
        levelIcon_7,
        levelIcon_8,
        levelIcon_9,
        levelIcon_10,
        levelIcon_11,
        levelIcon_12,
        levelIcon_13,
        levelIcon_14,
        levelIcon_15,
        levelIcon_16,
        levelIcon_17
      } from '../Assets';

export const StartComponent = {
  id: 'game',
  title: 'Start game',
  render: (className = "container") => {
    return `
      <section class="${className} level">
        <h2 class="level__title">Select level:</h2>
        <div class="level__list">
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_1}" alt="logout button" data-stage="1"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_2}" alt="logout button" data-stage="2"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_3}" alt="logout button" data-stage="3"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_4}" alt="logout button" data-stage="4"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_5}" alt="logout button" data-stage="5"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_6}" alt="logout button" data-stage="6"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_7}" alt="logout button" data-stage="7"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_8}" alt="logout button" data-stage="8"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_9}" alt="logout button" data-stage="9"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_10}" alt="logout button" data-stage="10"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_11}" alt="logout button" data-stage="11"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_12}" alt="logout button" data-stage="12"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_13}" alt="logout button" data-stage="13"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_14}" alt="logout button" data-stage="14"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_15}" alt="logout button" data-stage="15"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_16}" alt="logout button" data-stage="16"></a>
          <a href="#canvas" class="level__item level__item_hover level__item_active level__item_disabled"><img class="level__img" src="${levelIcon_17}" alt="logout button" data-stage="17"></a>
        </div>
      </section>
    `;
  }
};