class item  {
  get image() {return $('[data-sku="0009"]'); }
  get checkbox() {return $('[value="0009"]'); }
  }

module.exports = new item();