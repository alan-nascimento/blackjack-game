import { Cards, Player, Machine, Bets } from '../models';
import { CardView, PointsView, BetsView, DeckView } from '../views';
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
  private deckView = new DeckView('deck');

  constructor() { }

  startGame() {
    this.player.pullCard(this.cards);
    this.player.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.player.getBet(this.bets);
    this.deckView.update(this.cards);
    this.updateView();
  }

  updateView() {
    this.playerView.update(this.player.Hand);
    this.playerPoints.update(this.player);
    this.machinePoints.update(this.machine);
    this.betsView.update(this.player.Bets);
  }

  updateDeck() {
    this.deckView.update(this.cards);
  }

  revealPlayerHand() {
    this.playerView.update(this.player.Hand);
  }

  revealMachineHand() {
    this.machineView.update(this.machine.Hand);
  }

  stand() {
    this.machine.play(this.player.Points, this.cards);
    this.machinePoints.update(this.machine);
    this.revealMachineHand();
    this.updateDeck();
  }

  finishGame() {
    if (this.machine.Points > 21 ||
      this.player.Points <= 21 &&
      this.player.Points >= this.machine.Points) {
      return;
    }
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
