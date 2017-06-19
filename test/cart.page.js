var addToCartBtn = ('html body div.Aesop form.PDPHeader div.PDPHeaderBundle div.PDPHeader-wrapper div.PDPHeader-productInfoWrapper div.PDPHeaderCommonCTA.PDPHeader-cta--large button.Btn.Btn--action.Btn--filled.Btn--large.PDPHeaderCommonCTA-btn');
var ProductsInCart = ('body > div.Aesop > div:nth-child(4) > nav > div > ul.Nav-list.Nav-list-loginAndCart.Nav-list--inline > li.Nav-listItem.Nav-listItem--cart.Nav-listItem--noBorder > button');
var cartSummary = ('div.Cart-inner');
var navidateToCardBtn = ('body > div.Aesop > div:nth-child(4) > nav > div > ul.Nav-list.Nav-list-loginAndCart.Nav-list--inline > li.Nav-listItem.Nav-listItem--cart.Nav-listItem--noBorder > button');
var checkOutBtn = ('div.Btn-content');


class cart  {
  get addToCartBtn() {return $(addToCartBtn); }
  get ProductsInCart() {return $(ProductsInCart); }
  get cartSummary() {return $(cartSummary); }
  get navidateToCardBtn() {return $(navidateToCardBtn); }
  get checkOutBtn() {return $(checkOutBtn);}
  }

module.exports = new cart();