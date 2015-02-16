/**
 * Created by alexfaber on 2/16/15.
 *
 * API Documentation: https://docs.angularjs.org/api/ngResource/service/$resource
 */
app.factory('restService', ['$resource', function($resource){
    return $resource('http://ip.jsontest.com/');
}]);