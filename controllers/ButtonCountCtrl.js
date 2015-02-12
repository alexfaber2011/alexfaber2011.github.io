/**
 * Created by alexfaber on 2/12/15.
 */
app.controller('ButtonCountCtrl', ['$scope', 'buttonClickCountFactory', function($scope, buttonClickCountFactory){
    $scope.ctrlCount = 0;

    $scope.increment = function(){
        buttonClickCountFactory.increment();
    };

    $scope.getCount = function(){
        $scope.count = buttonClickCountFactory.getCount();
    };

    $scope.count = buttonClickCountFactory.getCount();

    $scope.ctrlIncrement = function() {
        $scope.ctrlCount++
    };
}]);