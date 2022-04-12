/*
this is an example of function that makes rational numbers
and its methods to work with it.
*/

const makeRational = (numer, denom) => {
  return {
    numer,
    denom,
    setNumer(newNumer)  {
      this.numer = newNumer;
    },
    setDenom(newDenom) {
      this.denom = newDenom;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
    add(rational) {
      const newNumer = this.getNumer() * rational.getDenom() + this.getDenom() * rational.getNumer();
      const newDenom = this.getDenom() * rational.getDenom();
      return makeRational(newNumer, newDenom);
    }
  }
};

const rat = makeRational(3, 8);
const rat2 = makeRational(15, 36);
const rat3 = rat.add(rat2);

console.log(rat3.toString()); // 228/288;