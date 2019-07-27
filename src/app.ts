import { Cards, Player } from './ts/models/index';

import './scss/blackjack.scss';

const cards = new Cards();
const player = new Player();

cards.getCard();
player.pullCard(cards);

console.log(cards.Deck);
console.log(player.Hand);
