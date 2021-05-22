var firebaseConfig = {
      apiKey: "AIzaSyAx2EYXTT0MEKqutQSQoMFvOSp9GpCAjOM",
      authDomain: "kwitter-36581.firebaseapp.com",
      databaseURL: "https://kwitter-36581-default-rtdb.firebaseio.com",
      projectId: "kwitter-36581",
      storageBucket: "kwitter-36581.appspot.com",
      messagingSenderId: "738895909463",
      appId: "1:738895909463:web:c455ed72c02d4134944912",
      measurementId: "G-2KBHDEY8RD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child (room_name).update({purpose : "adding room name"}) ;
          localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    }
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="kwitter.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}