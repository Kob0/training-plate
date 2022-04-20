//Training of using classes in JavaScript;

import _ from 'lodash';
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.getItems(), (goods) => goods.count);
  }

  getCost() {
    return _.sumBy(this.getItems(), (goods) => goods.count * goods.item.price);
  }
};

