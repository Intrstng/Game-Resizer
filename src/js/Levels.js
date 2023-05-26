import { platforms } from '../index';

export function requestLevelMap(url, callback_1, callback_2, callback_3, callback_4, callback_5) {
  fetch(url)
    .then(response => {  
      if (response.status !== 200) {
        console.log(`Возникла проблема. Код ошибки: ${response.status}`);
        return;
      }
      response.json()
      .then(map => callback_1(map, platforms))
      .then(data => callback_2(data, platforms))
      .then(player => callback_3(player, platforms))
      .then(init => callback_4(init, platforms))
      .then(animate => callback_5(animate, platforms))
      .catch(err => console.error('Fetch Error - levels map load failed', err))
    })
}
