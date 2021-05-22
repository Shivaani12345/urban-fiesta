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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}