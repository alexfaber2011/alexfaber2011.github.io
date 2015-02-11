/**
 * Created by alexfaber on 2/11/15.
 */
var app = angular.module("theHub", []);

simpleController = function($scope){
  var dwarfs = ['Bashful', 'Doc', 'Dopey', 'Happy', 'Sleepy', 'Sneezy'];
  return $scope.dwarfs = dwarfs;
};

app.controller('simpleController', simpleController);