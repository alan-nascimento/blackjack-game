import { View } from './index';
import { Player } from '../models';

export class BetsView extends View<Player> {

  render(model: Player): string {
    return `${model.Bets.map((item, index) => {
      return `<div class="bet_100 push-bet" style="z-index: ${index};"></div>`;
    }).join('')}`;
  }
}
