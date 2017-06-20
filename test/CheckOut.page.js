var creditCard = ('[value="BRAINTREE_CREDIT_CARD"]');
var paypal = ('[value="BRAINTREE_PAYPAL"]');
var giftCard = ('[value="GIFT_CARD"]');
var cardHolder = ('[data-test-ref="CHECKOUT_PAYMENT_CARD_HOLDER"]');
var cardNumber = ('[id="credit-card-number"]');
var expiration = ('[id="expiration"]');
var cvv = ('[id="cvv"]');
var billingAdressCheckbox = ('[data-test-ref="CHECKOUT_BILLING_SAME_SHIPPING"]');
var checkoutSubmit = ('[data-test-ref="CHECKOUT_PAYMENT_SUBMIT"]');
var complimentary = ('[data-component="CheckoutSamples"]');
var premierSamples = ('[value="0001"]');
var differentSamples = ('[value="0002"]');
var samplesSubmit = ('[data-test-ref="CHECKOUT_SAMPLES_SUBMIT"]');
var orderTable = ('[role="grid"]');
var acceptTerms = ('[name="accept_terms"]');
var completePurchase = ('[data-ref="submit"]');

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
	get premierSamples() {return $(premierSamples);}
	get differentSamples() {return $(differentSamples);}
	get samplesSubmit() {return $(samplesSubmit);}
	get orderTable() {return $(orderTable);}
	get acceptTerms() {return $(acceptTerms);}
	get completePurchase() {return $(completePurchase);}
}


module.exports = new checkout();