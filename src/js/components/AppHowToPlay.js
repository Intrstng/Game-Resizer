import {
  arrows,
  spaceImg,
  fKeyImg,
  escKeyImg
} from '../Assets';

export const HowToPlayComponent = {
  id: 'howtoplay',
  title: 'How to play',
  render: (className = 'container') => {
    return `
      <section class="${className} controls">
        <h2 class="controls__title">Controls:</h2>
        <div class="controls__container">
          <img class="controls__img-key" src="${arrows}" alt="control arrows">
            <p class="controls__text">Press <span>Left</span> and <span>Right</span> arrows to control character movement.<br>Press <span>Up</span> arrow to jump.</p>
              <img class="controls__img-key" src="${spaceImg}" alt="space key">
                <p class="controls__text">Press <span>Space</span> to toggle the active and inactive state of the platform One / Two / Three.</p>
                  <img class="controls__img-letter" src="${fKeyImg}" alt="f key">
                    <p class="controls__text">Press <span>F</span> to open the game in full screen.</p>
                      <img class="controls__img-letter" src="${escKeyImg}" alt="escape key">
                        <p class="controls__text">To exit full screen mode, press the <span>Escape</span> button.</p>
        </div>
      </section>
    `;
  }
};