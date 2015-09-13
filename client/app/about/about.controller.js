'use strict';

angular.module('angularOneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.title = 'About page';

    //$scope.$eval = ('5');
    /*$scope.$eval = eval(res(9));*/

    //$scope.$eval = res(document.getElementById('in'));
    //var result = document.getElementById('in');
    //console.log(result);

  });


$(function () {

   var i = document.getElementById('in');

   var res = function (a) {
   return Math.sqrt(a);
   };


});







//
//var res = 5;
