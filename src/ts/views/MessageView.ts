import { View } from './index';

export class MessageView extends View<string> {

  render(model: string): string {
    return `
    <div id="result-popup">
      <div class="popup">
        <h2 id="result">You ${model}!</h2>
        <div class="resume">
          <div>Player: <span class="score"></span></div>
        </div>
        <button id="play-again">Play Again</button>
      </div>
    </div>`;
  }
}
