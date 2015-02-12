/**
 * Created by alexfaber on 2/12/15.
 */
app.factory('buttonClickCountFactory', ['$q', function($q){
    privateData = {
        count: 0
    };

    return {
        increment: function() {
            privateData.count++;
            console.info('[buttonClickCountFactory] increment() ', privateData.count);
        },
        getCount: function(){
            return privateData.count;
        }
    };
}]);