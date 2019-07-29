import { View } from './index';
import { Player, Machine } from '../models';

export class PointsView extends View<Player|Machine> {

  render(model: Player|Machine): string {
    return `<div class="points">${model.Points}</div>`;
  }
}
