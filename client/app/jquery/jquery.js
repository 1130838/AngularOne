'use strict';

angular.module('angularOneApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jquery', {
        url: '/jquery',
        templateUrl: 'app/jquery/jquery.html',
        controller: 'JqueryCtrl'
      });
  });