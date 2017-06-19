var item = require('./item.page.js');
var cart = require('./cart.page.js');
var form = require('./form.page.js')

describe("Complete the payment. Happy pass: ", function(){
   browser.url('/skin/personal-care/amazing-care-for-oily-skin/?sku=0002&sku=0009&sku=0094');

  it("image is not a visable any more and checkbox is unselected", function(){
    item.checkbox.click();
    browser.pause(500);
    var imageVisible = item.image.isVisible();
    expect(imageVisible, 'the picture is still displayed').to.be.false;
    });

  it("checkbox is unselected", function() { 
   	var checked = item.checkbox.isSelected();
    expect(checked, 'the checkbox is still selected').to.be.false;
    });

  it("user is able to add products to the cart", function() {
    cart.addToCartBtn.click();
    browser.pause(5500);
    var amountOfProducts = cart.ProductsInCart.getAttribute('data-count');
    expect(amountOfProducts, 'amount of the product in the cart is different with amount of added products').to.equal('2');
  });  

  it("user views the cart", function(){
    cart.navidateToCardBtn.click();
    browser.pause(2000);
    var cartVisible = cart.cartSummary.isVisible();
    expect(cartVisible, 'cart is invisible').to.be.true;
    
  });

  it("user clicks checkout button", function() {
    cart.checkOutBtn.click();
    browser.pause(1000);
    var title = browser.getTitle().toLowerCase();
    expect(title, 'url doesn\'t change to checkout').to.include('checkout');
    console.log(title);

  });

  it("user adds the email", function() {
    form.emailLable.waitForVisible();
    form.emailLable.click();
    form.emailField.setValue('test@test.test');
    browser.pause(3500);
  }); 


  it("the additional fields appears", function() {
    var prefixVisible = form.prefix.isVisible();
    var firstNameVisible = form.firstName.isVisible();
    var lastNameVisible = form.lastName.isVisible();
    
    expect(prefixVisible, 'prefix field is not visible').to.be.true;
    expect(firstNameVisible, 'firstName field is not visible').to.be.true;
    expect(lastNameVisible, 'lastName field is not visible').to.be.true;
  });

  it("user fills out the form", function() {
    form.prefixDropdown.selectByValue('mrs');
    form.firstNameLabel.click();
    form.firstName.setValue('Iterman');
    form.lastNameLabel.click();
    form.lastName.setValue('Liudmyla');

    browser.submitForm('.CheckoutCustomerForm');
    browser.pause(5000);

  });

  it("country and address fields are visable", function() {
    var countyVisible = form.country.isVisible();
    var addressVisible = form.addressField.isVisible();

    expect(countyVisible, 'Country dropdown is not on the view').to.be.true;
    expect(addressVisible, 'Address field is not on the view').to.be.true; 

  });

  it("user selects county and enters Address", function(){
    form.country.selectByValue('US');
    form.addressLable.click();
    form.addressField.setValue("New York Avenue");
    //form.addressField.keys('ArrowDown');
    form.addressLable.click();
    browser.keys('\uE015');
    browser.keys('Enter');
    form.city.setValue('Brooklyn');
    form.state.selectByValue('NY');
    form.zipCode.click();
    form.zipCode.setValue('00001');
    form.phoneNumb.setValue('3472345666');
    form.submitBut.submitForm();
    browser.pause(3000);

    var shipMethodVisible  = form.shipMethod.isVisible();
    expect(shipMethodVisible, "ship methods are not visable").to.be.true;

  })
    
  it("user selects the type of the shipping", function(){
    form.expressShip.click();
    browser.pause(3000);



   }) 
  

  browser.end();

});
