(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return{
        messages: messages,
        roomMessages: [],
        getByRoomID: function(roomID){
            var outRef = ref.orderByChild('roomID').equalTo(roomID);
            this.roomMessages = $firebaseArray(outRef);
            //this.roomMessages.$loaded().then(function (val) {console.log(val)});
        }
    }
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();