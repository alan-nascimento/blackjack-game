import { View } from './index';
import { Card } from '../models';

export class CardView extends View<Card[]> {

  render(model: Card[]): string {
    return `
      ${model.map(card =>
        `<div class="card_${card.suit}_${card.value}"></div>`).join('')
      }`;
  }
}
