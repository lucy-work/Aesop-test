var creditCard = ('[value="BRAINTREE_CREDIT_CARD"]');
var paypal = ('[value="BRAINTREE_PAYPAL"]');
var giftCard = ('[value="GIFT_CARD"]');
var cardHolder = ('[data-test-ref="CHECKOUT_PAYMENT_CARD_HOLDER"]');
var cardNumber = ('[id="credit-card-number"]');
var iframe = ('[id="braintree-hosted-field-number"]');
var expiration = ('[id="expiration"]');
var cvv = ('[id="cvv"]');
var billingAdressCheckbox = ('[data-test-ref="CHECKOUT_BILLING_SAME_SHIPPING"]');
var checkoutSubmit = ('[data-test-ref="CHECKOUT_PAYMENT_SUBMIT"]');
var complimentary = ('[data-component="CheckoutSamples"]');

class checkout {
	get creditCard() {return $(creditCard);}
	get paypal() {return $(paypal);}
	get giftCard() {return $(giftCard);}
	get cardHolder() {return $(cardHolder);}
	get cardNumber() {return $(cardNumber);}
	get expiration() {return $(expiration);}
	get cvv() {return $(cvv);}
	get billingAdressCheckbox() {return $(billingAdressCheckbox);}
	get checkoutSubmit() {return $(checkoutSubmit);}
	get complimentary() {return $(complimentary);}
	get iframe() {return $(iframe);}
}


module.exports = new checkout();