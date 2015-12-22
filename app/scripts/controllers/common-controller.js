'use strict';

// Main Navbar
angular.module('aviFrontApp')
.controller('FooterController', function ($scope, $location) {

  $scope.isActive = function(path){
    return path === $location.path();
  };

});

// Main Footer
angular.module('aviFrontApp')
.controller('NavigationController', function ($scope, $location) {

  $scope.isActive = function(path){
    return path === $location.path();
  };

});
