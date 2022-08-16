var firebaseConfig = 
{
      apiKey: "AIzaSyD9KZeBlBtb-mU58__mSf-2l5N3m4r-OVE",
      authDomain: "chatapp-b1d56.firebaseapp.com",
      databaseURL: "https://chatapp-b1d56-default-rtdb.firebaseio.com",
      projectId: "chatapp-b1d56",
      storageBucket: "chatapp-b1d56.appspot.com",
      messagingSenderId: "944106029530",
      appId: "1:944106029530:web:0eed4ce8e72b0db74300e3",
      measurementId: "G-JWX9MGW18Z"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
      room_name  = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_chat.html";
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;

      });
      });}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_chat.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }