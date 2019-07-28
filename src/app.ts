import Blackjack from './ts/controllers/Blackjack';

import './scss/blackjack.scss';

const blackjack = new Blackjack();

blackjack.startGame();

console.log(blackjack.Player.Hand);
console.log(blackjack.Machine.Hand);
