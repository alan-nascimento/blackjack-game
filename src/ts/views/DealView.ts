import { View } from './index';
import { Player } from '../models';

export class DealView extends View<Player> {

  render(model: Player): string {
    return `${model.Deal.map((item, index) => {
      return `<div class="bet_100" style="z-index: ${index};"></div>`;
    }).join('')}`;
  }
}
