class BlueL {
  constructor () {
    this.positions = ['down', 'right', 'up', 'left'];
    this.position = 'left';
    this.className = 'blue-l';
    this.coords = [[-1, 3], [0, 3], [0, 4], [0, 5]];
    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
    this.executeRotationLeft = this.executeRotationLeft.bind(this);
  }

  rotateLeftCoords () {
    let first, second, third, fourth;
    switch (this.position) {
      case 'down':
        first = [this.coords[0][0] + 1, this.coords[0][1] - 2];
        second = [this.coords[1][0], this.coords[1][1] - 1];
        third = [this.coords[2][0] - 1, this.coords[2][1] + 1];
        fourth = this.coords[3];
        return [first, second, third, fourth];
      case 'right':
        first = [this.coords[0][0] - 1, this.coords[0][1]];
        second = [this.coords[1][0] - 1, this.coords[1][1]];
        third = [this.coords[2][0], this.coords[2][1] - 2];
        fourth = [this.coords[3][0], this.coords[3][1] - 2];
        return [first, second, third, fourth];
      case 'up':
        first = [this.coords[0][0] + 1, this.coords[0][1]];
        second = [this.coords[1][0] + 2, this.coords[1][1] - 1];
        third = [this.coords[2][0] + 1, this.coords[2][1] + 1];
        fourth = [this.coords[3][0], this.coords[3][1] + 2];
        return [first, second, third, fourth];
      case 'left':
        first = [this.coords[0][0] - 1, this.coords[0][1] + 2];
        second = [this.coords[1][0] - 1, this.coords[1][1] + 2];
        third = this.coords[2]
        fourth = this.coords[3];
        return [first, second, third, fourth];
      default:
        return this.coords;
    }
  }

  executeRotationLeft (newCoords) {
    this.coords = newCoords;
    this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length]
  }

  rotateRightCoords () {
    let first, second, third, fourth;
    switch (this.position) {
      case 'down':
        first = [this.coords[0][0] + 1, this.coords[0][1] - 2];
        second = [this.coords[1][0] + 1, this.coords[1][1] - 2];
        third = this.coords[2];
        fourth = this.coords[3];
        return [first, second, third, fourth];
      case 'left':
        first = [this.coords[0][0] - 1, this.coords[0][1]];
        second = [this.coords[1][0] - 2, this.coords[1][1] + 1];
        third = [this.coords[2][0] - 1, this.coords[2][1] - 1];
        fourth = [this.coords[3][0], this.coords[3][1] - 2];
        return [first, second, third, fourth];
      case 'up':
        first = [this.coords[0][0] + 1, this.coords[0][1]];
        second = [this.coords[1][0] + 1, this.coords[1][1]];
        third = [this.coords[2][0], this.coords[2][1] + 2];
        fourth = [this.coords[3][0], this.coords[3][1] + 2];
        return [first, second, third, fourth];
      case 'right':
        first = [this.coords[0][0] - 1, this.coords[0][1] + 2];
        second = [this.coords[1][0], this.coords[1][1] + 1];
        third = [this.coords[2][0] + 1, this.coords[2][1] - 1];
        fourth = this.coords[3];
        return [first, second, third, fourth];
      default:
        return this.coords;
    }
  }

  executeRotationRight (newCoords) {
    this.coords = newCoords;
    let idx = this.positions.indexOf(this.position);
    let newIdx = ((idx - 1) % this.positions.length + this.positions.length) % this.positions.length;
    this.position = this.positions[newIdx];
  }
}

export default BlueL;
