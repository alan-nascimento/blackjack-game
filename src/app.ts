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

document.addEventListener('click', (event: Event) => {
  if ((<HTMLElement>event.target).classList.contains('bet_100')) {
    (<HTMLElement>event.target).classList.add('bet_animation');
    setTimeout(() => {
      blackjack.Player.dealBet();
      blackjack.updateView();
    }, 800);
  }
});
