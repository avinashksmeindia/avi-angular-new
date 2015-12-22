'use strict';


angular.module('aviFrontApp')
  .controller('NavigationController', function ($scope, $location) {

    $scope.isActive = function(path){
      return path === $location.path();
    };

  });
