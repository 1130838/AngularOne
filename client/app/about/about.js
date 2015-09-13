'use strict';

angular.module('angularOneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });


function sqr (a){
  return Math.sqrt(a);
}
