// Your code here
const Dragon = require('./dragon');


class FriendlyDragon extends Dragon {
  constructor (_name, _color, _lifeGoals, _friend) {
    super(_name, _color);

    this.lifeGoals = _lifeGoals;
    this.friend = _friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach(goal => {
      console.log(`${this.name} likes to ${goal}`);
    });
    // return `${this.name} likes to ${this.lifeGoals}`;
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }
