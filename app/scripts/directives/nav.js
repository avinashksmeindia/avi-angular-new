'use strict';

angular.module('aviFrontApp').directive('navbar', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  }
})
