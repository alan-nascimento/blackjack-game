import { Cards, Player, Machine } from '../models';
import { CardView, PointsView, BetsView, DeckView } from '../views';
import { BetsValueView } from '../views/BetsValueView';
import { DealValueView } from '../views/DealValueView';
import { DealView } from '../views/DealView';
import { MessageView } from '../views/MessageView';

export default class Blackjack {

  private cards = new Cards();
  private player = new Player();
  private machine = new Machine();
  private playerView = new CardView('player-cards');
  private machineView = new CardView('machine-cards');
  private playerPoints = new PointsView('player-points');
  private machinePoints = new PointsView('machine-points');
  private betsValueView = new BetsValueView('total-bets');
  private betsView = new BetsView('bets');
  private deckView = new DeckView('deck');
  private dealValueView = new DealValueView('dealing');
  private dealView = new DealView('deal-bets');
  private messageView = new MessageView('teste');

  constructor() {
    this.init();
  }

  init() {
    this.betsView.update(this.player);
    this.betsValueView.update(this.player);
  }

  startGame() {
    this.player.pullCard(this.cards);
    this.player.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.machine.pullCard(this.cards);
    this.deckView.update(this.cards);
    this.updateView();
  }

  updateView() {
    this.playerView.update(this.player.Hand);
    this.machineView.update(this.machine.Hand);
    this.playerPoints.update(this.player);
    this.machinePoints.update(this.machine);
    this.betsView.update(this.player);
    this.dealValueView.update(this.player.Deal);
    this.betsValueView.update(this.player);
    this.dealView.update(this.player);
  }

  updateDeck() {
    this.deckView.update(this.cards);
  }

  updateDeal() {
    this.dealValueView.update(this.player.Deal);
  }

  restartGame() {
    this.messageView.update('lose');
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
    // if (this.machine.Points > 21
    //   || this.player.Points <= 21
    //   && this.player.Points >= this.machine.Points) {
    //   return;
    // }
    this.cards = new Cards();
    this.machine = new Machine();
    this.machinePoints.update(this.machine);
    this.player.setHand([]);
    this.player.setPoints(0);

    this.updateView();
    setTimeout(() => {

    });
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

  // setDeal(props: Bet[]) {
  //   this.dealValueView = props;
  // }
}
