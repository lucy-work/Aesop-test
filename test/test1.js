//expect = require('chai').expect; //add this to wdio.config.js and now i don't need to add this to every test code

describe("Complete the payment. Happy pass: ", function(){
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
    browser.pause(1000);
    var title = browser.getTitle().toLowerCase();
    expect(title, 'url doesn\'t change to checkout').to.include('checkout');
    console.log(title);

  });

  browser.pause(2500);

  it("user adds the email", function() {
    browser.keys('Tab');
    //browser.click('/html/body/div[3]/div[6]/div/div/section/form/div[2]/div/label');
    browser.pause(500);
    //var emailField = browser.elements('input.FormText-input CheckoutCustomer-formTextInput');
    //emailField.focus();
    browser.setValue('[name="email"]', 'test@test.test');
    browser.pause(2500);
  });

  it("the additional user info fields appears", function() {
    var prefix = browser.isVisible('[data-test-ref="CHECKOUT_CUSTOMER_PREFIX"]');
    var firstName = browser.isVisible('[data-test-ref="CHECKOUT_CUSTOMER_FIRST_NAME"]');
    var lastName = browser.isVisible('[data-test-ref="CHECKOUT_CUSTOMER_LAST_NAME"]');

    expect(prefix, 'prefix field is not visible').to.be.true;
    expect(firstName, 'firstName field is not visible').to.be.true;
    expect(lastName, 'lastName field is not visible').to.be.true;
  });

  it("user fills out the form", function() {
    var dropdownPrefix = browser.elements('select.FormSelect-input');
    // //dropdownPrefix.selectByValue('Mrs.');
     //console.log(dropdownPrefix.value.value);
    browser.selectByValue('select.FormSelect-input','mrs');
    // browser.keys('Tab');
    browser.click('/html/body/div[3]/div[6]/div/div/section/form/div[3]/div[1]/div[2]/label')
    browser.setValue('[data-test-ref="CHECKOUT_CUSTOMER_FIRST_NAME"]', 'Iterman');
    browser.click('/html/body/div[3]/div[6]/div/div/section/form/div[3]/div[1]/div[3]/label');
    browser.setValue('[data-test-ref="CHECKOUT_CUSTOMER_LAST_NAME"]','Liudmyla');
    browser.submitForm('.CheckoutCustomerForm');

    browser.pause(5000);
    var county = browser.isVisible('/html/body/div[3]/div[7]/div/div/section/form/div[2]/div/div[2]');
    var address = browser.isVisible('/html/body/div[3]/div[7]/div/div/section/form/div[2]/div/div[3]/div/div');
    
    expect(county, 'Country dropdown is not on the view').to.be.true;
    expect(address, 'Address field is not on the view').to.be.true; 

   });

  console.log("foo");

  });


   