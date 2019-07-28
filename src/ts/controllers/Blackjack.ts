import { Cards, Player, Machine } from '../models';
import { PlayerView, MachineView } from '../views';

export default class Blackjack {

  private cards: Cards;
  private player: Player;
  private machine: Machine;
  private playerView: PlayerView;
  private machineView: MachineView;

  constructor() {
    this.cards = new Cards();
    this.player = new Player();
    this.machine = new Machine();
    this.playerView = new PlayerView('player-cards');
    this.machineView = new MachineView('machine-cards');
  }

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
