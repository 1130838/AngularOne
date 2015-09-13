'use strict';

angular.module('angularOneApp')
  .controller('JqueryCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.result = function squareRoot(a) {
      return Math.sqrt(a);
    };

// ======== JQuery ==========================================
    $(document).ready(function () {
      // your jquery goes here
      $('#shares').keyup(function () {
        var input = $('#shares').val();

        var res = $scope.result(input);

        console.log(res);
        $('#result').text(res);
      });
    });

      var jumbotron = document.getElementById("jumbotron");

// ======== JQuery more ======================================

      $(function () {
      // your jquery goes here

        // mouse over and out in a element
        $(test).mouseover(function () {
          $(this).fadeOut(1500, function () {
            $(this).text('Changing Text').fadeIn(1500);
          });
        });

        $(test).mouseout(function () {
          $(this).fadeOut(1500, function () {
            $(this).text('Stuff with Jquery').fadeIn(1500);
          });
        });


        // resizing windows alert on console
        $(window).resize(function () {
          console.log('windows is resizing');
        });

        // get mouse coordinates
        $(document).on("mousemove", function (event) {
          var Xpos = document.getElementById("X");
          var Ypos = document.getElementById("Y");

          var relX = $("#jumbotron").Xpos = event.pageX;
          var relY = $("#jumbotron").Ypos = event.pageY;

          Xpos.innerHTML = relX;
          Ypos.innerHTML = relY;

          if (relX > 1000) {
            console.log("passed 500");
            $('#jumbotron').fadeOut(1500);
            $('#blueButton').text('X > 1000').css({
              'color': 'yellow'
            });

          } else {
            $('#jumbotron').fadeIn(1500);
            $('#blueButton').text('Mouse Coordinates').css({
              'color': 'white'
            });

          }

        });

      });

    });

