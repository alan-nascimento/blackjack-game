import Blackjack from './ts/controllers/Blackjack';
import './scss/blackjack.scss';

const blackjack = new Blackjack();

blackjack.startGame();

document.getElementById('stand').onclick = () => blackjack.stand();

document.getElementById('hit').onclick = () => {
  blackjack.Player.pullCard(blackjack.Cards);
  blackjack.updateDeck();
  blackjack.updateView();
};
