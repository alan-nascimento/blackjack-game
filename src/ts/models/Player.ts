import { Card, Cards } from './index';

export class Player {

  private hand: Card[] = [];
  private points: number;

  pullCard(deck: Cards) {
    this.hand.push(deck.getCard());

    this.points = 0;
    let ace = 0;

    for (let i = 0; i < this.hand.length; i++) {
      let value = this.hand[i].value;

      if (value > 10) value = 10;
      if (value === 1) value = 11; ace += 1;
      this.points += value;
    }

    while (ace > 0 && this.points > 21) {
      this.points -= 10;
      ace -= 1;
    }
  }

  get Hand() {
    return this.hand;
  }

  get Points() {
    return this.points;
  }
}
