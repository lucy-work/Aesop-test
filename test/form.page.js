var emailLable = ('.CheckoutCustomerForm > .Form-row > .FormText');
var emailField = ('[name="email"]');
var prefix = ('[data-test-ref="CHECKOUT_CUSTOMER_PREFIX"]');
var firstName = ('[data-test-ref="CHECKOUT_CUSTOMER_FIRST_NAME"]');
var lastName = ('[data-test-ref="CHECKOUT_CUSTOMER_LAST_NAME"]');
var prefixDropdown = ('select.FormSelect-input');
var firstNameLabel = ('/html/body/div[3]/div[6]/div/div/section/form/div[3]/div[1]/div[2]/label');
var lastNameLabel = ('/html/body/div[3]/div[6]/div/div/section/form/div[3]/div[1]/div[3]/label');
var country = ('[name="country"]');
var addressLable = ('body > div.Aesop > div:nth-child(9) > div > div > section > form > div:nth-child(2) > div > div:nth-child(3) > div > div');
var addressField = ('[data-test-ref="ADDRESS_LINE_1"]');
var city = ('[name="town"]');
var state = ('[name="region"]');
var zipCode = ('[name="postalCode"]');
var phoneNumb = ('[name="phoneNumber"]');
var submitBut = ('[data-test-ref="CHECKOUT_SHIPPING_SUBMIT"]');
var shipMethod = ('.CheckoutShipping-optionsWrapper');
var expressShip = ('[value="express"]');

class form {
	get emailLable() {return $(emailLable); }
	get emailField() {return $(emailField); }
	get prefix() {return $(prefix); }
	get firstName() {return $(firstName);}
	get lastName() {return $(lastName);}
	get prefixDropdown() {return $(prefixDropdown);}
	get firstNameLabel() {return $(firstNameLabel);}
	get lastNameLabel() {return $(lastNameLabel);}
	get country() {return $(country);}
  	get addressLable() {return $(addressLable);}
  	get addressField() {return $(addressField);}
  	get city() {return $(city);}
  	get state() {return $(state);}
  	get zipCode() {return $(zipCode);}
  	get phoneNumb() {return $(phoneNumb);}
	get submitBut() {return $(submitBut);}
	get shipMethod() {return $(shipMethod);}
	get expressShip() {return $(expressShip);}

}

module.exports = new form();