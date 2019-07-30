import { View } from '.';
import { Player } from '../models';

export class BetsValueView extends View<Player> {

  render(model: Player): string {
    return `<div>$${model.Bets.reduce((total, item) => total + item.value, 0)}</div>`;
  }
}
