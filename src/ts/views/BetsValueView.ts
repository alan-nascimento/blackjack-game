import { View } from '.';
import { Bets } from '../models';

export class BetsValueView extends View<Bets> {

  render(model: Bets): string {
    return `<div>${model.totalValue}</div>`;
  }
}
