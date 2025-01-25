class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  BRIE: 'Aged Brie',
  PASS: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  CONJURED: 'Conjured',
}

const updateBrie = (item) => {

    item.sellIn -= 1;
    item.quality = Math.min(50, item.sellIn > 0 ? item.quality + 1: item.quality + 2)
}

const updatePass = (item) => {

    rawQuality = () => {

      if (this.sellIn < 0) return 0;
      if (this.sellIn <= 5) return this.quality + 3;
      if (this.sellIn <= 10) return this.quality + 2;

      return item.quality + 1;
    }
    
    item.sellIn -= 1;
    item.quality = Math.min(50, rawQuality())
}

const updateSulfuras = (item) => {
  item.sellIn -= 1
  item.quality = 80
}

const updateConjured = (item) => {
  item.sellIn -= 1;
  item.quality = Math.max(0, item.sellIn < 0 ? item.quality -4 : item.quality - 2 );
}

const updateNormal = (item) => {
  item.sellIn -= 1;
  item.quality = Math.max(0, item.sellIn > 0 ? item.quality - 1 : item.quality - 2)
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of items) {
      switch (item.name) {
        case ItemTypes.BRIE:
          updateBrie(item);
          continue;
        case ItemTypes.PASS:
          updatePass(item);
          continue;
        case ItemTypes.SULFURAS:
          updateSulfuras(item);
          continue;
        case ItemTypes.CONJURED:
          updateConjured(item);
          continue;
        default:
          updateNormal(item);
          continue
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
