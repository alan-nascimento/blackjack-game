import { View } from './index';
import { Bet } from '../models';

export class BetsView extends View<Bet[]> {

  render(model: Bet[]): string {
    return `<div>${model}</div>`;
  }
}
