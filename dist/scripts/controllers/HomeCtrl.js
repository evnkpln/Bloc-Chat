(function() {
    function HomeCtrl(Room, $scope) {
        this.rooms = Room.all;
        this.addRoom = function(){
            Room.addRoom({foo: "bar"});
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();