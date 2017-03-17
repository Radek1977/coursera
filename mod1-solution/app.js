(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function ()
  {
    var arrayOfAllInputs = new Array();
    var arrayOfDishes = new Array();
    if ($scope.dishes)
    {
      arrayOfAllInputs = $scope.dishes.split(",");
      for (var i = 0; i < arrayOfAllInputs.length; i++)
      {
        if (arrayOfAllInputs[i].trim() !== "")
        {
          arrayOfDishes.push(arrayOfAllInputs[i]);
        }
      }
    }

    if (arrayOfDishes.length === 0)
    {
      $scope.name = "Please enter data first";
      $scope.myColor = "red";
    }
    else if (arrayOfDishes.length <= 3)
    {
      $scope.name = "Enjoy!";
      $scope.myColor = "green";
    }
    else if (arrayOfDishes.length > 3)
    {
      $scope.name = "Too much!";
      $scope.myColor = "green";
    }
  };
}

})();
