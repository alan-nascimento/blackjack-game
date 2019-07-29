import { Player, Cards } from './index';

export class Machine extends Player {

  play(playerPoints: number, deck: Cards): void {
    if (this.Points > playerPoints || this.Points === playerPoints) return;
    while (playerPoints < 21) {
      this.pullCard(deck);
      if (this.Points > playerPoints) {
        break;
      }
    }
  }
}
