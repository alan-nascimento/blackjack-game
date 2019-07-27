import { Card } from './index';

export class Cards {

  private deck: Card[] = [];

  constructor() {
    this.deckGenerate();
  }

  deckGenerate(): void {
    for (let i = 1; i <= 4; i++) {
      for (let x = 1; x <= 13; x++) {
        this.deck.push(new Card(i, x));
      }
    }
  }

  getCard() {
    return this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0];
  }

  get Deck() {
    return this.deck;
  }
}
