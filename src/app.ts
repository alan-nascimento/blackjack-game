import { Cards, Player } from './ts/models/index';

import './scss/blackjack.scss';
import Machine from './ts/models/Machine';

const cards = new Cards();
const player = new Player();
const machine = new Machine();

cards.getCard();
player.pullCard(cards);
machine.play(player.Points, cards);
machine.play(player.Points, cards);

console.log(cards.Deck);
console.log(player.Hand);
console.log(machine.Hand);
