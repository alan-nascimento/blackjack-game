import { Cards } from '../models';
import { View } from '.';

export class DeckView extends View<Cards> {

  render(cards: Cards): string {
    return `<div>${cards.Deck.length}</div>`;
  }
}
