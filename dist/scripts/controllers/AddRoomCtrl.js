(function (){
    function AddRoomCtrl($uibModal, $scope){
        $scope.roomMenu = function(){
            var openedModal = $uibModal.open({
                templateUrl: '/templates/add_room.html',
                backdrop: true,
                controller: "RoomModalCtrl as $ctrl"
            });
        };
    }
    
    function RoomModalCtrl(Room, $uibModalInstance) {
        this.val = "default";
        this.input = function() {
            if(this.val){
                Room.addRoom({'name':this.val});
                $uibModalInstance.dismiss();
            }
        };
    }
    angular
        .module('blocChat')
        .controller('AddRoomCtrl',['$uibModal', '$scope', AddRoomCtrl])
        .controller('RoomModalCtrl',['Room', '$uibModalInstance', RoomModalCtrl]);
})();