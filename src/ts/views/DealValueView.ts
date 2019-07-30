import { View } from './View';
import { Bet } from '../models';

export class DealValueView extends View<Bet[]> {

  render(model: Bet[]): string {
    return `<div>$${model.reduce((total, item) => total + item.value, 0)}</div>`;
  }
}
