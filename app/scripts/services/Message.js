(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return{
        messages: messages,
        roomMessages: [],
        currentRoom: 0,
        getByRoomID: function(roomID){
            var outRef = ref.orderByChild('roomID').equalTo(roomID);
            this.currentRoom = roomID;
            this.roomMessages = $firebaseArray(outRef);
            //this.roomMessages.$loaded().then(function (val) {console.log(val)});
        },
        send: function(newMessage){
            this.roomMessages.$add({
                content: newMessage,
                roomID: this.currentRoom,
                sentAt: "00:00",
                username: $cookies.get('blocChatCurrentUser')
            })
        },
        userStyle: function(user){
            if(user === $cookies.get('blocChatCurrentUser')){
                return {color:'blue'};
            } else{
                return {color:'red'}
            }
        }
    }
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();