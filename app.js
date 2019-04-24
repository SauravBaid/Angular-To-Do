var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.names = ["Homework","Chocolates","Biscuits"];
  $scope.adder = function () {
    $scope.names.push($scope.add);
    $scope.add = "";
  };
  $scope.remover = function(x){
    $scope.names.splice(x,1)
  };
  $scope.deleted = function(x,$event){
    var el=$event.target;
    var access=angular.element(el).parent().parent();
    console.log(access);
    angular.element(access).addClass("hovered");
  };
  $scope.notHover = function(x,$event){
    var el=$event.target;
    var access=angular.element(el).parent().parent();
    console.log(access);
    angular.element(access).removeClass("hovered");
  };
});