import { Card, Cards, Bet } from './index';

export class Player {

  private hand: Card[] = [];
  private bets: Bet[] = [];
  private deal: Bet[] = [];
  private points: number;

  constructor() {
    this.initialBets();
  }

  pullCard(deck: Cards) {
    this.hand.push(deck.getCard());

    this.points = 0;
    let ace = 0;

    for (let i = 0; i < this.hand.length; i++) {
      let value = this.hand[i].value;

      if (value > 10) {
        value = 10;
      }
      if (value === 1) {
        value = 11;
        ace += 1;
      }

      this.points += value;
    }

    while (ace > 0 && this.points > 21) {
      this.points -= 10;
      ace -= 1;
    }
  }

  initialBets() {
    for (let i = 0; i < 10; i++) {
      this.bets.push(new Bet(100));
    }
  }

  dealBet() {
    this.deal.push(new Bet(100));
    this.bets.shift();
  }

  earnBet() {
    this.bets.push(new Bet(100));
    this.deal.shift();
  }

  loseBet() {
    this.deal.pop();
  }

  get Hand() {
    return this.hand;
  }

  get Points() {
    return this.points;
  }

  get Bets() {
    return this.bets;
  }

  get Deal() {
    return this.deal;
  }

  setHand(array: []) {
    this.hand = array;
  }

  setPoints(number: number) {
    this.points = number;
  }
}
