import { getLocalStorage } from "../Utils";

export const SettingsComponent = {
  id: 'settings',
  title: 'Settings',
  render: (className = 'container') => {
    return `
      <section class="${className} settings">
        <h2 class="settings__title">Audio settings:</h2>
          <div class="settings__slider-box">
            <label for="volume-sounds">Sound effects</label>
            <input type="range" id="volume-snd" class="settings__slider settings__slider_hover" name="volume-sounds"
              min="0" max="1" value="${getLocalStorage('settings', 'soundEffects')}" step="0.1">   
                <label for="volume-music">Music</label>
                <input type="range" id="volume-msc" class="settings__slider settings__slider_hover" name="volume-music" 
                  min="0" max="1" value="${getLocalStorage('settings', 'musicEffects')}" step="0.1">
          </div>
      </section>
    `;
  }
};