import { Cards, Player, Machine } from '../models';

export default class Blackjack {

  private cards: Cards;
  private player: Player;
  private machine: Machine;

  constructor() {
    this.cards = new Cards();
    this.player = new Player();
    this.machine = new Machine();
  }

  startGame() {
    this.player.pullCard(this.cards);
    this.player.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.machine.pullCard(this.cards);
  }

  finishGame() {
    this.machine.play(this.player.Points, this.cards);
  }

  get Cards() {
    return this.cards;
  }

  get Player() {
    return this.player;
  }

  get Machine() {
    return this.machine;
  }
}
