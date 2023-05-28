// Your code here

const Dragon = require('./dragon');

class EvilDragon extends Dragon {
    constructor(_name, _color, _evilDoings, _nemesis) {
        super(_name, _color);

        this.evilDoings = _evilDoings;
        this.nemesis = _nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach(evil => {
            console.log(`${this.name} will ${evil}`);
        });
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }

}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }
