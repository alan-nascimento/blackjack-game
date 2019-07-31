import Blackjack from './ts/controllers/Blackjack';
import './scss/blackjack.scss';

const blackjack = new Blackjack();

document.getElementById('deal').onclick = () => {
  if (blackjack.Player.Deal.length < 1) return alert('The minimum bet must be $ 100!');

  document.getElementById('hit').removeAttribute('disabled');
  document.getElementById('stand').removeAttribute('disabled');
  document.getElementById('deal').setAttribute('disabled', '');

  blackjack.startGame();
};

document.getElementById('stand').onclick = () => blackjack.stand();

document.getElementById('hit').onclick = () => {
  blackjack.Player.pullCard(blackjack.Cards);
  blackjack.updateDeck();
  blackjack.updateView();
};

document.querySelector('#deal-bets').addEventListener('click', () => {
  (<HTMLElement>event.target).classList.add('bet_animation_inverse');
  (<HTMLElement>event.target).classList.add('pull-bet');
  setTimeout(() => {
    blackjack.Player.earnBet();
    blackjack.updateView();
  }, 800);
});

document.addEventListener('click', (event: Event) => {
  if ((<HTMLElement>event.target).classList.contains('push-bet')) {
    (<HTMLElement>event.target).classList.add('bet_animation');
    setTimeout(() => {
      blackjack.Player.dealBet();
      blackjack.updateView();
    }, 800);
  }
});
