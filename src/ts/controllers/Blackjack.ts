import { Cards, Player, Machine } from '../models';
import { CardView, PointsView } from '../views';

export default class Blackjack {

  private cards = new Cards();
  private player = new Player();
  private machine = new Machine();
  private playerView = new CardView('player-cards');
  private machineView = new CardView('machine-cards');
  private playerPoints = new PointsView('player-points');
  private machinePoints = new PointsView('machine-points');

  constructor() { }

  startGame() {
    this.player.pullCard(this.cards);
    this.player.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.updateView();
  }

  updateView() {
    this.playerView.update(this.player.Hand);
    this.machineView.update(this.machine.Hand);
    this.playerPoints.update(this.player);
    this.machinePoints.update(this.machine);
  }

  finishGame() {
    this.machine.play(this.player.Points, this.cards);
    this.updateView();
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
