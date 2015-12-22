'use strict';

// Main Footer
angular.module('aviFrontApp').directive('mainfooter', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/mainfooter.html',
    controller: 'FooterController'
  }
})
// Main Navbar
angular.module('aviFrontApp').directive('navbar', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  }
})
