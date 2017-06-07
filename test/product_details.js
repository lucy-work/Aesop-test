// expect = require('chai').expect;   //add this to wdio.config.js and now i don't need to add this to every test code

describe("The product's details is opened", function(){
  it("detail opens after clicking to product", function(){
     
    browser.url('/skin/personal-care/amazing-care-for-oily-skin/?sku=0002&sku=0009&sku=0094')
    //browser.timeouts('page Load', 1000);

    var title = browser.getTitle();
    console.log("Title is " + title);

    browser.click('html body div.Aesop form.PDPHeader div.PDPHeaderBundle div.PDPHeader-wrapper div.PDPHeader-productInfoWrapper div.PDPHeaderBundleProductComposer ul.PDPHeaderBundleProductComposer-productList li.PDPHeaderBundleProductComposer-productListItem.PDPHeaderBundleProductComposer-productListItem--1 div.PDPHeaderBundleProductComposerProduct div.PDPHeaderBundleProductComposerProduct-header');
    
    var detailsVisable = browser.isVisible('html body div.Aesop form.PDPHeader div.PDPHeaderBundle div.PDPHeader-wrapper div.PDPHeader-productInfoWrapper div.PDPHeaderBundleProductComposer ul.PDPHeaderBundleProductComposer-productList li.PDPHeaderBundleProductComposer-productListItem.PDPHeaderBundleProductComposer-productListItem--1 div.PDPHeaderBundleProductComposerProduct div.PDPHeaderBundleProductComposerProduct-header');
    expect(detailsVisable, 'Details is not in the view').to.be.true; 
    });


  });


  