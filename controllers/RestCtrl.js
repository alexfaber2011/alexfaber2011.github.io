/**
 * Created by alexfaber on 2/16/15.
 */
/**
 * Created by alexfaber on 2/12/15.
 */
app.controller('RestCtrl', ['$scope', 'restService', function($scope, restService){

    restService.get(function(result){
        console.log(result);
        $scope.ip = result
    });
}]);