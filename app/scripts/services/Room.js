(function() {
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var addR = function(newRoom){
            this.all.$add(newRoom)
        };
        return{
            all: rooms,
            addRoom: addR
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();