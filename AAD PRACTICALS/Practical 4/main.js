var AdditionApp = angular.module('AdditionApp',[]);
AdditionApp.controller('DemoAddController', function($scope) {
 $scope.add = function() {
 $scope.n1=Number($scope.num1);
 $scope.n2=Number($scope.num2);
 return $scope.n1 + $scope.n2;
 };
}); 
 
var SubtractionApp = angular.module('SubtractionApp',[]);
SubtractionApp.controller('DemoSubController', function($scope) {
 $scope.sub = function() {
 $scope.n1=Number($scope.num1);
 $scope.n2=Number($scope.num2);
 return $scope.n1 - $scope.n2;
 };
});
var MultiplicationApp = angular.module('MultiplicationApp',[]);
MultiplicationApp.controller('DemoMulController', function($scope) {
 $scope.mul = function() {
 $scope.n1=Number($scope.num1);
 $scope.n2=Number($scope.num2);
 return $scope.n1 * $scope.n2;
};
}); 

var DivisionApp = angular.module('DivisionApp',[]);
DivisionApp.controller('DemoDivController', function($scope) {
$scope.div = function() {
$scope.n1=Number($scope.num1);
$scope.n2=Number($scope.num2);
return $scope.n1 / $scope.n2;
};
});