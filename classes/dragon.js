// Your code here

class Dragon {
  constructor (_name, _color) {
    this.name = _name;
    this.color = _color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);
  }

}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
