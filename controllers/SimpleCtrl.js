/**
 * Created by alexfaber on 2/12/15.
 */
app.controller('simpleController', ['$scope', function($scope){
    var dwarfs = ['Bashful', 'Doc', 'Dopey', 'Happy', 'Sleepy', 'Sneezy'];

    return $scope.dwarfs = dwarfs;
}]);