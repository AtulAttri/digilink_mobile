(function(angular){
angular.module("ionicShop.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("cart-footer.html","<div class=\'title cart-footer\'>Checkout</div>");
$templateCache.put("cart-item.html","<div ng-if=\'!emptyProducts\'>\n  <div class=\'card product-card\' ng-repeat=\'product in products track by $index\'>\n    <div class=\'item item-thumbnail-right product-item\'>\n      <img ng-src=\'{{product.images[0]}}\' class=\'product-image\' ion-product-image=\'product\'>\n      <h3 class=\'product-title\'>{{product.title}}</h3>\n      <p class=\'product-description\'>{{product.description}}</p>\n\n      <i class=\'icon ion-plus-round icon-plus-round\' mouse-down-up ng-click=\'addProduct(product)\'></i>\n         <span class=\'product-quantity\'>{{product.purchaseQuantity}}</span>\n      <i class=\'icon ion-minus-round icon-minus-round\' mouse-down-up ng-click=\'removeProduct(product)\'></i>\n\n      <span class=\'product-price\'>INR {{product.price}}</span>\n    </div>\n  </div>\n  <div>\n    <br><br><br><br>\n  </div>\n</div>\n\n<div class=\'empty-cart-div\' ng-if=\'emptyProducts\'>\n  <h3 class=\'empty-cart-header\'>Your bag is empty!</h3>\n  <i class=\'icon ion-bag empty-cart-icon\'></i>\n</div>");
$templateCache.put("checkout-footer.html","<div class=\'title purchase-footer\'>Pay</div>");
$templateCache.put("checkout.html","\n<span class=\'checkout-form-description\'>Please enter your credit card details:</span>\n\n<div class=\'list checkout-form\'>\n  <checkout-name ng-if=\'hasNameDir\'></checkout-name>\n  <checkout-card></checkout-card>\n  <checkout-address ng-if=\'hasAddressDir\'></checkout-address>\n  <checkout-email ng-if=\'hasEmailDir\'></checkout-email>\n</div>\n\n<h2 class=\'checkout-total\'>Total: INR {{total}}</h2>\n");
$templateCache.put("gallery-item.html","<div class=\'ion-gallery-content\'>\n  <div class=\'card gallery-card\' ng-repeat=\'product in products track by $index\'>\n    <div class=\'item gallery-item\'>\n      <div class=\'gallery-image-div\'>\n        <img ng-src=\'{{product.images[0]}}\' class=\'gallery-product-image\'>\n      </div>\n      <h3 class=\'gallery-product-title\'>{{product.title}}</h3>\n      <h3 class=\'gallery-product-price\'>INR {{product.price}}</h3>\n      <div class=\'gallery-product-add\' ng-click=\'addToCart(product)\'>\n        <h3 class=\'gallery-product-add-title\' cart-add>{{addText}}</h3>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("partials/address-line-one.html","<label class=\'item item-input address-line-one\'>\n  <input type=\'text\' ng-model=\'checkout.addressLineOne\' placeholder=\'Address Line 1\'>\n</label>");
$templateCache.put("partials/address-line-two.html","<label class=\'item item-input address-line-two\'>\n  <input type=\'text\' ng-model=\'checkout.addressLineTwo\' placeholder=\'Address Line 2\'>\n</label>");
$templateCache.put("partials/address.html","<div class=\'item item-divider\'>Address: </div>\n<address-one-input></address-one-input>\n<address-two-input></address-two-input>\n<city-input></city-input>\n<state-input></state-input>\n<zip-input></zip-input>\n");
$templateCache.put("partials/card-cvc-input.html","<label class=\'item item-input card-cvc-input\'>\n  <input type=\'tel\' ng-model=\'checkout.cvc\' ng-focus=\'onCvcFocus()\' ng-blur=\'onCvcBlur()\' placeholder=\'CVC\'>\n  <i class=\"icon\" style=\'width: 40px; text-align: center;\'></i>\n</label>");
$templateCache.put("partials/card-exp-input.html","<label class=\'item item-input card-exp-input\'>\n  <input type=\'tel\' ng-model=\'checkout.exp\' ng-focus=\'onExpFocus()\' ng-blur=\'onExpBlur()\' placeholder=\'MM/YYYY\'>\n  <i  class=\"icon\" style=\'width: 40px; text-align: center;\'></i>\n</label>");
$templateCache.put("partials/card-form.html","<div class=\'item item-divider\'>Card Info: </div>\n<card-num-input></card-num-input>\n<card-exp-input></card-exp-input>\n<card-cvc-input></card-cvc-input>");
$templateCache.put("partials/card-num-input.html","<label class=\'item item-input card-num-input\'>\n  <input type=\'tel\' ng-model=\'checkout.cc\' ng-focus=\'onNumFocus()\' ng-blur=\'onNumBlur()\' placeholder=\'Credit Card Number\'>\n  <i  class=\"icon ion-card\" style=\'width: 40px; text-align: center;\'></i>\n</label>");
$templateCache.put("partials/cart-image-modal.html","<div class=\"modal image-slider-modal\">\n\n  <ion-header-bar>\n    <button class=\"button button-light icon ion-ios7-undo-outline\" ng-click=\'closeModal()\'></button>\n    <h1 class=\"title\">More Images</h1>\n    \n  </ion-header-bar>\n\n    <ion-slide-box class=\'image-slider-box\' does-continue=\'true\'>\n      <ion-slide ng-repeat=\'image in product.images\' class=\'image-ion-slide\'>\n        <ion-content>\n          <div class=\'image-slide-div\'>\n            <h3 class=\'image-slide-description\'>{{product.description}}</h3>\n            <img src=\'{{image}}\' class=\'image-slide\'>\n          </div>\n        </ion-content>\n      </ion-slide>\n    </ion-slide-box>\n\n</div>");
$templateCache.put("partials/city-input.html","<label class=\'item item-input city-input\'>\n  <input type=\'text\' ng-model=\'checkout.city\' placeholder=\'City\'>\n</label>");
$templateCache.put("partials/email-input.html","<div class=\"item item-divider\">E-mail: </div>\n<label class=\"item item-input email-input\">\n  <input type=\"text\" ng-model=\"checkout.email\" ng-focus=\'onEmailFocus()\' ng-blur=\'onEmailBlur()\' placeholder=\"E-Mail\">\n  <i class=\"icon\" style=\'width: 40px; text-align: center;\'></i>\n</label>\n\n");
$templateCache.put("partials/first-name-input.html","  <label class=\'item item-input first-name-input\'>\n    <input type=\'text\' ng-model=\'checkout.lastName\' placeholder=\'Last Name\'>\n  </label>");
$templateCache.put("partials/last-name-input.html","  <label class=\'item item-input last-name-input\'>\n    <input type=\'text\' ng-model=\'checkout.firstName\' placeholder=\'First Name\'>\n  </label>");
$templateCache.put("partials/name-input.html","<div class=\'item item-divider\'>Name: </div>\n<first-name-input></first-name-input>\n<last-name-input></last-name-input>");
$templateCache.put("partials/state-input.html","<label class=\'item item-input state-input\'>\n  <input type=\'text\' ng-model=\'checkout.state\' placeholder=\'State\'>\n</label>");
$templateCache.put("partials/zipcode-input.html","<label class=\'item item-input zip-code-input\'>\n  <input type=\'text\' ng-model=\'checkout.zipcode\' ng-focus=\'onZipFocus()\' ng-blur=\'onZipBlur()\' placeholder=\'Zipcode\'>\n  <i class=\"icon zip-code-input-icon\" style=\'width: 40px; text-align: center;\'></i>\n</label>");}]);
})(angular);