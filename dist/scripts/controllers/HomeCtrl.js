(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.roomTest = this.rooms[0];
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();