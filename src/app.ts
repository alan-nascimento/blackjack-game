import Blackjack from './ts/controllers/Blackjack';
import './scss/blackjack.scss';

const blackjack = new Blackjack();

const playerCards = document.querySelector('#player-cards');

const keepShowingCard = (position: number) => {
  playerCards
    .querySelector(`div:nth-child(${position.toString()})`)
    .classList
    .add('show-card');
};

document.getElementById('deal').onclick = () => {
  if (blackjack.Player.Deal.length < 1) return alert('The minimum bet must be $ 100!');

  document.getElementById('hit').removeAttribute('disabled');
  document.getElementById('stand').removeAttribute('disabled');
  document.getElementById('deal').setAttribute('disabled', 'true');
  document.getElementById('bets').setAttribute('class', 'disabled');
  document.getElementById('deal-bets').setAttribute('class', 'disabled');
  setTimeout(() => {
    playerCards.querySelector('div:first-child').setAttribute('style', 'transform: translateX(0px) !important;');
  }, 500);
  setTimeout(() => {
    playerCards.querySelector('div:last-child').setAttribute('style', 'transform: translateX(0px) !important;');
  }, 1000);
  blackjack.updateView();

  blackjack.startGame();
};

// Stand the to sse the machine game
document.getElementById('stand').onclick = () => {
  blackjack.stand();
};

// Get one card from deck
document.getElementById('hit').onclick = () => {

  blackjack.Player.pullCard(blackjack.Cards);

  blackjack.updateView();

  playerCards
    .querySelector('div:last-child')
    .setAttribute('style', 'transform: translateX(10000px)');

  setTimeout(() => {
    playerCards
      .querySelector('div:last-child')
      .setAttribute('style', 'transform: translateX(0px)');
  }, 0);

  let count = 1;

  while(playerCards.querySelectorAll('div').length -1 < blackjack.Player.Hand.length) {
    keepShowingCard(count);
    count += 1;
  }
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
