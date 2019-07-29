import { Cards, Player, Machine, Bets } from '../models';
import { CardView, PointsView, BetsView } from '../views';
import { BetsValueView } from '../views/BetsValueView';

export default class Blackjack {

  private cards = new Cards();
  private bets = new Bets();
  private player = new Player();
  private machine = new Machine();
  private playerView = new CardView('player-cards');
  private machineView = new CardView('machine-cards');
  private playerPoints = new PointsView('player-points');
  private machinePoints = new PointsView('machine-points');
  private betsValueView = new BetsValueView('total-bets');
  private betsView = new BetsView('bets');

  constructor() { }

  startGame() {
    this.player.pullCard(this.cards);
    this.player.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.player.getBet(this.bets);
    this.updateView();
  }

  updateView() {
    this.playerView.update(this.player.Hand);
    this.machineView.update(this.machine.Hand);
    this.playerPoints.update(this.player);
    this.machinePoints.update(this.machine);
    this.betsView.update(this.player.Bets);
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
