import { Deck } from '../models';

export class BlackjackController {

  private deck: Deck;

  constructor() {
    this.deck = new Deck();
  }
}
