/*
This is an example of using essence "money" and its prototype methods.
*/
const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  }
}

function Money(value, currency = 'usd') {
  this.currency = currency;
  this.value = value;
}

Money.prototype.getValue = function getValue() {
  return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
}

Money.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const convertedMoney = money.exchangeTo(currency);
  const additionalValue = convertedMoney.getValue();

  return new Money(this.getValue() + additionalValue, currency);
};

const money1 = new Money(200, 'eur');
const money2 = new Money(250, 'usd');
const money3 = money1.add(money2);

console.log(money3);