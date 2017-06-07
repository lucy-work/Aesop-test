//expect = require('chai').expect; //add this to wdio.config.js and now i don't need to add this to every test code

describe("Have an info about 1 element", function(){
  it("1 element is an object", function(){
     
    browser.url('/skin/personal-care/amazing-care-for-oily-skin/?sku=0002&sku=0009&sku=0094');
    //browser.pause(1000);

    // browser.click('html body div.Aesop form.PDPHeader div.PDPHeaderBundle div.PDPHeader-wrapper div.PDPHeader-productInfoWrapper div.PDPHeaderBundleProductComposer ul.PDPHeaderBundleProductComposer-productList li.PDPHeaderBundleProductComposer-productListItem.PDPHeaderBundleProductComposer-productListItem--1 div.PDPHeaderBundleProductComposerProduct div.PDPHeaderBundleProductComposerProduct-header div.PDPHeaderBundleProductComposerProduct-checkbox div.FormCheckbox label.FormCheckbox-labelElement div.FormCheckbox-labelWrapper input.FormCheckbox-input');
   //browser.timeouts('page Load', 1000);

    var firstItem = browser.elements('.PDPHeaderBundleProductImage');
    console.log(typeof(firstItem));
    console.log(firstItem.value[1]);

   	

    });

  });


  