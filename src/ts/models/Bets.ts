import { Bet } from './index';

export class Bets {

  readonly bets: Bet[] = [];
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
}
