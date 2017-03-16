(function() {
    function HomeCtrl(Room, Message, $scope) {
        this.rooms = Room.all;
        this.typedMessage = "";
        this.addRoom = function(){
            Room.addRoom({foo: "bar"});
        };
        $scope.messagesObject = Message;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();