import { Bet } from './index';

export class Bets {

  private bets: Bet[] = [new Bet(100)];
  private total: number;

  constructor() {
    this.getBet();
    this.total = this.totalValue();
  }

  getBet() {
    return new Bet(100);
  }

  totalValue(): number {
    return this.total = this.bets.reduce((total, item) => total + item.value, 0);
  }

  get Bets() {
    return this.bets;
  }
}
