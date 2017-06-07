//expect = require('chai').expect; //add this to wdio.config.js and now i don't need to add this to every test code

describe("User is able to unselect the second product", function(){
   browser.url('/skin/personal-care/amazing-care-for-oily-skin/?sku=0002&sku=0009&sku=0094');

  // beforeEach(function() {
  //   browser.url('/skin/personal-care/amazing-care-for-oily-skin/?sku=0002&sku=0009&sku=0094');
  //   // browser.click('[value="0009"]');
  //      browser.pause(500);
  // })

  it("image is not a visable any more and checkbox is unselected", function(){
    browser.click('[value="0009"]');
    browser.pause(500);
    var imageVisible = browser.isVisible('[data-sku="0009"]');
    expect(imageVisible, 'the picture is still displayed').to.be.false;
    });

  it("checkbox is unselected", function() { 
   	var checked = browser.isSelected('[value="0009"]');
    expect(checked, 'the checkbox is still selected').to.be.false;
    });

  it("user is able to add products to the cart", function() {
    browser.click('html body div.Aesop form.PDPHeader div.PDPHeaderBundle div.PDPHeader-wrapper div.PDPHeader-productInfoWrapper div.PDPHeaderCommonCTA.PDPHeader-cta--large button.Btn.Btn--action.Btn--filled.Btn--large.PDPHeaderCommonCTA-btn');
    browser.pause(5500);
    var amountOfProducts = browser.getAttribute('body > div.Aesop > div:nth-child(4) > nav > div > ul.Nav-list.Nav-list-loginAndCart.Nav-list--inline > li.Nav-listItem.Nav-listItem--cart.Nav-listItem--noBorder > button', 'data-count');
    expect(amountOfProducts, 'amount of the product in the cart is different with amount of added products').to.equal('2');
  });  

  it("user views the cart", function(){
    browser.click('body > div.Aesop > div:nth-child(4) > nav > div > ul.Nav-list.Nav-list-loginAndCart.Nav-list--inline > li.Nav-listItem.Nav-listItem--cart.Nav-listItem--noBorder > button');
    browser.pause(2000);
    var cartVisible = browser.isVisible('div.Cart-inner');
    expect(cartVisible, 'cart is invisible').to.be.true;
    
  });

  it("user clicks checkout button", function() {
    browser.click('div.Btn-content');
    var title = browser.getTitle().toLowerCase();
    expect(title, 'url doesn\'t change to checkout').to.include('checkout');
    console.log(title);

  });

  it("user adds the email", function() {
    browser.setValue('input.FormText-input CheckoutCustomer-formTextInput', 'emai@kk.aa');
  })


  });


   