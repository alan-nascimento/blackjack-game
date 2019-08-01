import Blackjack from './ts/controllers/Blackjack';
import './scss/blackjack.scss';
import { allSettled } from 'q';

const blackjack = new Blackjack();

const playerCards = document.querySelector('#player-cards');

const machineCards = document.querySelector('#machine-cards');

const keepShowingMachineCard = (position: number) => {
  machineCards
    .querySelector(`div:nth-child(${position.toString()})`)
    .classList
    .add('show-card');
};

const keepShowingCard = (position: number) => {
  playerCards
    .querySelector(`div:nth-child(${position.toString()})`)
    .classList
    .add('show-card');
};

const initialButtons = () => {
  document.getElementById('hit').setAttribute('disabled', '');
  document.getElementById('stand').setAttribute('disabled', '');
  document.getElementById('deal').removeAttribute('disabled');
  document.getElementById('bets').classList.remove('disabled');
  document.getElementById('deal-bets').classList.remove('disabled');
  document.getElementById('machine-points').setAttribute('style', 'transform: translateX(500px)');
};

const lose = () => {
  alert('You lose!');
  document.getElementById('bets').classList.remove('disabled');
  setTimeout(() => {
    for (let i = 0; i < blackjack.Player.Deal.length + i; i++) {
      initialButtons();
      blackjack.Player.loseBet();
      blackjack.updateDeal();
      document
        .querySelector('#deal-bets')
        .querySelectorAll('div')
        .forEach(item => item.classList.add('lose-bets'));
    }
  }, 500);
};

document.getElementById('deal').onclick = () => {
  if (blackjack.Player.Deal.length < 1) return alert('The minimum bet must be $ 100!');

  document.getElementById('hit').removeAttribute('disabled');
  document.getElementById('stand').removeAttribute('disabled');
  document.getElementById('deal').setAttribute('disabled', 'true');
  document.getElementById('bets').setAttribute('class', 'disabled');
  document.getElementById('deal-bets').setAttribute('class', 'disabled');
  document.getElementById('machine-points').setAttribute('style', 'transform: translateX(500px)');

  if (blackjack.Player.Points === 21) {
    alert('Congratulations, you won!');
    blackjack.Player.earnBet();
    document
      .querySelector('#deal-bets')
      .querySelectorAll('div')
      .forEach(item => item.classList.add('lose-bets'));
    setTimeout(() => blackjack.updateDeal(), 500);
  }


  // blackjack.updateView();

  blackjack.startGame();

  machineCards
    .querySelector('div:first-child')
    .classList.add('card_back');
  machineCards
    .querySelector('div:last-child')
    .classList.add('card_back');

  setTimeout(() =>
    playerCards
      .querySelector('div:first-child')
      .setAttribute('style', 'transform: translateX(0px)'), 250);

  setTimeout(() =>
    playerCards
      .querySelector('div:last-child')
      .setAttribute('style', 'transform: translateX(0px)'), 750);

  setTimeout(() =>
    machineCards
      .querySelector('div:first-child')
      .setAttribute('style', 'transform: translateX(0px)'), 500);

  setTimeout(() =>
    machineCards
      .querySelector('div:last-child')
      .setAttribute('style', 'transform: translateX(0px)'), 1000);
};

// Stand the to see the machine game
document.getElementById('stand').onclick = () => {
  blackjack.stand();

  document.getElementById('hit').setAttribute('disabled', '');
  document.getElementById('stand').setAttribute('disabled', '');
  document.getElementById('machine-points').setAttribute('style', 'transform: translateX(0px)');

  setTimeout(() => {
    if (blackjack.Machine.Points > 21
      || blackjack.Player.Points <= 21
      && blackjack.Player.Points >= blackjack.Machine.Points) {
      alert('Congratulations, you won!');
      setTimeout(() => {
        blackjack.updateDeal();
        blackjack.finishGame();
        initialButtons();
        document
          .getElementById('machine-points')
          .setAttribute('style', 'transform: translateX(0px)');
        document
          .getElementById('player-points')
          .setAttribute('style', 'transform: translateX(0px)');
        document
          .querySelector('#deal-bets')
          .querySelectorAll('div')
          .forEach(item => {
            item.classList.remove('bet_animation_inverse');
            item.classList.add('bet_animation');
          });
      }, 200);
      blackjack.Player.earnBet();
      document.getElementById('machine-points').setAttribute('style', 'transform: translateX(500px)');
    } else {
      lose();
      initialButtons();
      blackjack.finishGame();
    }
  }, 500);

  machineCards
    .querySelector('div:first-child')
    .classList.remove('card_back');

  machineCards
    .querySelector('div:last-child')
    .classList.remove('card_back');

  // machineCards
  //   .querySelector('div:last-child')
  //   .setAttribute('style', 'transform: translateX(10000px)');

  setTimeout(() =>
    machineCards
      .querySelector('div:last-child')
      .setAttribute('style', 'transform: translateX(0px)'), 0);

  let count = 1;
  while(machineCards.querySelectorAll('div').length -1 < blackjack.Machine.Hand.length) {
    keepShowingMachineCard(count);
    count += 1;
  }
};

// Get one card from deck
document.getElementById('hit').onclick = () => {

  blackjack.Player.pullCard(blackjack.Cards);

  blackjack.updatePlayerGame();

  machineCards
    .querySelector('div:first-child')
    .classList.add('card_back');
  machineCards
    .querySelector('div:last-child')
    .classList.add('card_back');

  playerCards
    .querySelector('div:last-child')
    .setAttribute('style', 'transform: translateX(10000px)');

  setTimeout(() =>
    playerCards
      .querySelector('div:last-child')
      .setAttribute('style', 'transform: translateX(0px)'), 0);

  if (blackjack.Player.Points === 21) {
    alert('Congratulations, you won!');
    blackjack.Player.earnBet();
    document
      .querySelector('#deal-bets')
      .querySelectorAll('div')
      .forEach(item => item.classList.add('lose-bets'));
    setTimeout(() => blackjack.updateDeal(), 500);
  }

  setTimeout(() => {

    if (blackjack.Player.Points > 21) {
      alert('You lose!');
      document.getElementById('bets').classList.remove('disabled');
      setTimeout(() => {
        for (let i = 0; i < blackjack.Player.Deal.length + i; i++) {
          initialButtons();
          blackjack.Player.loseBet();
          blackjack.updateDeal();
          document
            .querySelector('#deal-bets')
            .querySelectorAll('div')
            .forEach(item => item.classList.add('lose-bets'));
        }
      }, 500);

      if (blackjack.Player.Bets.length === 0) {
        setTimeout(() => blackjack.restartGame(), 1000);
        setTimeout(() => document.querySelector('#result-popup').remove(), 2000);
      }

      initialButtons();

      blackjack.finishGame();
    }

  }, 1000);

  let count = 1;

  while(playerCards.querySelectorAll('div').length -1 < blackjack.Player.Hand.length) {
    keepShowingMachineCard(count);
    keepShowingCard(count);
    count += 1;
  }
};

document.querySelector('#deal-bets').addEventListener('click', () => {
  (<HTMLElement>event.target).classList.add('bet_animation_inverse');
  (<HTMLElement>event.target).classList.add('pull-bet');
  setTimeout(() => {
    blackjack.Player.earnBet();
    blackjack.updateDeal();
  }, 500);
});

document.addEventListener('click', (event: Event) => {
  if ((<HTMLElement>event.target).classList.contains('push-bet')) {
    (<HTMLElement>event.target).classList.add('bet_animation');
    setTimeout(() => {
      blackjack.Player.dealBet();
      blackjack.updateDeal();
    }, 500);
  }
});
