import Board from './board';

class TetrisView {
  constructor (tetris) {
    this.tetris = tetris;
    this.board = new Board;
    this.clearedLineCount = document.getElementById('line-incrementor');
    this.render();
    this.startEventListeners();
    this.speed = 1000;
    this.level = 0;
  }

  startEventListeners () {
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 's':
          if (!this.timerId) {
            this.play();
          }
          break;
        case 'p':
          window.clearInterval(this.timerId);
          this.timerId = undefined;
          break;
        case 'ArrowLeft':
          this.board.moveLeft();
          this.board.update();
          this.render();
          break;
        case 'ArrowRight':
          this.board.moveRight();
          this.board.update();
          this.render();
          break;
        case 'ArrowDown':
          if (this.board.goToNextLevel) {
            this.increaseSpeed();
            window.clearInterval(this.timerId);
            this.timerId = undefined;
            this.play();
          }
          this.board.fall();
          this.board.update();
          this.render();
          break;
        case 'z':
          this.board.rotateLeft();
          this.board.update();
          this.render();
          break;
        case 'x':
          this.board.rotateRight();
          this.board.update();
          this.render();
          break;
        case 'r':
          this.board = new Board;
          this.render();
          this.timerId = undefined;
          document.getElementById('game-over').setAttribute('class', 'no-show');
          break;
        case 'l':
          this.increaseSpeed();
          window.clearInterval(this.timerId);
          this.timerId = undefined;
          this.play();
          break;
        default:
          return;
      }
    });
  }

  increaseSpeed () {
    this.speed = Math.floor(this.speed * 0.87);
    this.level += 1;
  }

  play () {
    this.timerId = window.setInterval(() => {
      if (this.board.goToNextLevel) {
        this.increaseSpeed();
        window.clearInterval(this.timerId);
        this.timerId = undefined;
        this.play();
      }
      this.board.fall();
      if (this.board.gameOver()) {
        window.clearInterval(this.timerId);
        let GOMessage = document.getElementById('game-over');
        GOMessage.setAttribute('class', 'show');
        GOMessage.innerHTML = `You cleared ${this.board.clearedLineCount} lines! Press R to reset the board.`;
      }
      this.board.update();
      this.render();
    }, this.speed);
  }

  render () {
    this.clearedLineCount.innerHTML = `Lines cleared: ${this.board.clearedLineCount.toString()}`;
    document.getElementById('user-speed').innerHTML = `Level: ${this.level ? this.level : 0}`;
    this.tetris.innerHTML = this.board.toString();
  }
}

export default TetrisView;
