document.getElementById("welcome").innerHTML = "Welcome " + localStorage.getItem("user") + "!!";
const firebaseConfig = {
      apiKey: "AIzaSyDO2wXmzm3KlBgTG2yDjjuQsqd_4AqYfv4",
      authDomain: "kwitter-3729d.firebaseapp.com",
      databaseURL: "https://kwitter-3729d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3729d",
      storageBucket: "kwitter-3729d.appspot.com",
      messagingSenderId: "732098920969",
      appId: "1:732098920969:web:95d5dcb95cf29792986ed8",
      measurementId: "G-94DWM98R8D"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("roomname");
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  // code
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name = message_data['name'];
                  message = message_data['message'];
                  like = message_data['like'];
                  name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                  row = name_with_tag + message_with_tag + like_button + span_with_tag;
                  document.getElementById("output").innerHTML += row;
                  // end

                  //End code
            });
      });
}
getData();

function adddata() {
      firebase.database().ref("/").child(document.getElementById("room").value).update({
            purpose: "adding new room"
      });
      localStorage.setItem("roomname", document.getElementById("room").value);
      window.location = "kwitter_room.html";
}
//code
function updateLike(message_id) {
      console.log("click on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
}
//end

function logout() {
      localStorage.removeItem("user");
      window.location = "index.html";
}
function redirectToRoomName(roomid) {

      window.location = "kwitter_page.html";
}
function send() {
      msg = document.getElementById("msg").value;
      user_name = localStorage.getItem("user");
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}