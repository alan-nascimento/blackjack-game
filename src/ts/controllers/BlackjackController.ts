import { Cards, Card } from '../models';

export class BlackjackController {

  private deck: Cards;

  constructor() {
    this.deck = new Cards();
  }
}
