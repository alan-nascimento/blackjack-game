import { View } from './index';
import { Bet } from '../models';

export class BetsView extends View<Bet[]> {

  render(model: Bet[]): string {
    return `<div class="bet_100">${model.map(item => `${item.value}`)}</div>`;
  }
}
