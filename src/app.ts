import './scss/blackjack.scss';
import { Deck } from './ts/models/index';

const deck = new Deck();

deck.getCard();

console.log(deck);
