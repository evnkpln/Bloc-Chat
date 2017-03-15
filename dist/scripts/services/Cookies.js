(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/set_user.html',
                backdrop: true,
                controller: "UserModalCtrl as $ctrl"
            });
        }
        alert('Hello ' + $cookies.get('blocChatCurrentUser'));
    }
    
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.val = "";
        this.input = function() {
            if(this.val){
                $cookies.put('blocChatCurrentUser',this.val);
                $uibModalInstance.dismiss();
            }
        };
    }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies])
    .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();