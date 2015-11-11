angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$http, $q,$state,contactusService,$ionicLoading,$stateParams,Products,$ionicHistory, $window,$rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
       $rootScope.cartProducts_qty= Products.cartProducts.length;
        $scope.loginData = {"email_id": "", "password": "", "logindate": new Date(), "company": "digilink" };
        $scope.enquire=[];
        $scope.enquire = {"name": "", "mobile_no": "", "create_ts": new Date(), "email": "", "enquire_from": "digilink","created_by": "","product_code":"","additional_remarks":"Enquiry From Digilink Mobile APP"};

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

        $scope.after_enquiry_msg = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Enquiry Status',
                template: 'Thank You! Your Enquiry has been sent. Our team will get in touch with you soon'
            });
            alertPopup.then(function(res) {
              //  console.log('Your Enquiry has been sent');
               $window.location.reload();
               // $rootScope.$destroy.prototype();


            });

        };

        $scope.toggleGroup = function(fiber) {
            if ($scope.isGroupShown(fiber)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = fiber;
            }
        };
        $scope.toggleGroup1 = function(copper) {
            if ($scope.isGroupShown1(copper)) {
                $scope.shownGroup1 = null;
            } else {
                $scope.shownGroup1 = copper;
            }
        };
        $scope.isGroupShown = function(fiber) {
            return $scope.shownGroup === fiber;
        };
        $scope.isGroupShown1 = function(copper) {
            return $scope.shownGroup1 === copper;
        };



        $scope.goToCart = function(){
            $state.go('app.cart');
        };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

        $scope.sendEnquiry= function(){

            $scope.enquire.product_code = $stateParams.prod_id;
            $scope.enquire.created_by= $scope.enquire.name;
            $scope.enquire.cartProducts = Products.cartProducts;


            $scope.loading = $ionicLoading.show({
                content: '<i class="icon ion-loading-c"></i>',
                template: '<ion-spinner class="spinner-energized"> Loading...</ion-spinner>',
                animation: 'fade-in',
                showBackdrop: false,
                maxWidth: 50,
                showDelay: 0
            });

            $timeout(function() {
                $scope.after_enquiry_msg();
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                $state.go('app.landing');
                $ionicLoading.hide();

            }, 1000);

//            contactusService.insertenquireinfo($http, $q, $scope.enquire ,$ionicLoading).then(function (data) {
//
//                    $ionicLoading.hide();
//
//
//                    $scope.after_enquiry_msg();
//
//                    $state.go('app.landing');
//
//                },
//                function () {
//
//                    $scope.error = error;
//                });
        }
})

    .factory("ProductList", function($firebaseArray) {

        var itemsRef = new Firebase("https://atulapp.firebaseio.com/");
        return $firebaseArray(itemsRef);

    })

    .controller("ProductsListCtrl", function($scope, ProductList,$ionicLoading,$timeout) {
        $scope.loading = $ionicLoading.show({
            content: '<i class="icon ion-loading-c"></i>',
            template: '<ion-spinner class="spinner-energized"> Loading...</ion-spinner>',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 50,
            showDelay: 0
        });

        $timeout(function () {
            $ionicLoading.hide();
            $scope.ProductList = ProductList;
        }, 2000);

        })
.controller('GalleryCtrl', function($scope, Products,$ionicLoading,$timeout,ProductList) {

        $scope.loading = $ionicLoading.show({
            content: '<i class="icon ion-loading-c">Loading</i>',
            template: '<ion-spinner class="spinner-energized"> Loading...</ion-spinner>',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 300,
            showDelay: 0
        });
        $timeout(function () {
            $ionicLoading.hide();


        $scope.products = Products.galleryProducts;
           $scope.products = ProductList;
  $scope.products = [{
      title: 'Copper Cable',
      description: 'product description',
      quantity: 25,
        price: 452,
        images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg',
            'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

            'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
        id: 1
    },
      {
      title: 'Fiber Cable',
            description: 'product description1',
            quantity: 45,
            price: 486,
          images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg',
              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',
              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg'
             ],
            id: 2
    },
      {
      title: 'Solid Cable',
            description: 'product description2',
            quantity: 45,
            price: 52,
          images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Category+5e%2C+UTP+Keystone%2C+Modular+Jack%2C+Blue.jpg',
              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
            id: 3
    },
      {
    title: 'Wall Mount',
    description: 'product description3',
    quantity: 32,
    price: 250,
          images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg',
              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
    id: 4
},
      {
title: 'Fiber Patch Cord',
    description: 'product description4',
    quantity: 2,
    price: 102,
    images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Punch+Down+Tool.jpg','img/Fiber- Patch Cord.jpg','img/Copper- Patch Panel.jpg','img/Copper- Patch Cord.jpg'],
    id: 5
},
      {
          title: 'Patch Panel',
          description: 'product description4',
          quantity: 122,
          price: 502,
          images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK++QUICK+PUNCH+DOWN+TOOL.jpg','img/Copper- Patch Panel.jpg','img/Fiber- Patch Cord.jpg','img/Copper- Patch Cord.jpg'],
          id: 6
      },
{
          title: 'Adaptor',
          description: 'product description',
          quantity: 25,
          price: 452,
          images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg',
              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

              'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
          id: 7
      },
          {
              title: 'Tools',
              description: 'product description1',
              quantity: 45,
              price: 486,
              images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg',
                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',
                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg'
              ],
              id: 8
          },
          {
              title: 'Connector',
              description: 'product description2',
              quantity: 45,
              price: 52,
              images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Category+5e%2C+UTP+Keystone%2C+Modular+Jack%2C+Blue.jpg',
                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
              id: 9
          },
          {
              title: 'Wall Mount',
              description: 'product description3',
              quantity: 32,
              price: 250,
              images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+LIU+06+PORT++WALL++MOUNT+BLK+with+Splice+Tray+and+Cable+spool.PNG',

                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+5e%2C+4+pair%2C+SFTP+-+305m.jpg',
                  'https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Solid+Cable+Cat+6A+(10G)+4+pair+UTP+-+305m.jpg'],
              id: 10
          },
          {
              title: 'Modular Jack',
              description: 'product description4',
              quantity: 2,
              price: 102,
              images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK+Punch+Down+Tool.jpg','img/Fiber- Patch Cord.jpg','img/Copper- Patch Panel.jpg','img/Copper- Patch Cord.jpg'],
              id: 11
          },
          {
              title: 'Patch Panel',
              description: 'product description4',
              quantity: 122,
              price: 502,
              images: ['https://s3-ap-southeast-1.amazonaws.com/cdn-new-annectos/seep_mobile/DIGILINK++QUICK+PUNCH+DOWN+TOOL.jpg','img/Copper- Patch Panel.jpg','img/Fiber- Patch Cord.jpg','img/Copper- Patch Cord.jpg'],
              id: 12
          }


      ];

//        if (!$scope.products.length) {
//            for (var i = 0; i < 25; i++) {
//                var ind = Math.floor(Math.random() * 4);
//
//                var prod         = {};
//                prod.id          = i+1;
//                prod.title       = 'Polaroid Camera';
//                prod.images      = images[ind];
//                prod.description = 'A retro camera';
//                prod.quantity    = ind+1;
//                prod.price       = prices[ind];
//                Products.galleryProducts.push(prod);
//                console.log( Products.galleryProducts);
//            }
//        }
        }, 2000);

})

.controller('CartCtrl', function($scope, $stateParams, Products,$state) {

        $scope.cartProducts = Products.cartProducts;

        // TO BE REMOVED

        $scope.checkoutPath = 'checkout';

        $scope.goToGallery = function(){
            $state.go('gallery');
        };


})

    .service('contactusService', function () {



        this.insertenquireinfo = function ($http, $q, dataobj) {
         //   var apiPath = 'http://54.209.87.32/ecomm.bulk.grass.api' + '/user/registration/insert_enquire_info/';
            var apiPath = 'http://54.209.87.32/ecomm.bulk.grass.api' + '/user/registration/insert_enquire_info/';
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: apiPath,
                data: dataobj,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject("An error occured while validating User");
            });
            return deferred.promise;
        };




    })

;
