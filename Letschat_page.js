//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC1Idbp3E8IaUTNhuqnSAvVjhilr46z1gw",
      authDomain: "kwitter-5025e.firebaseapp.com",
      databaseURL: "https://kwitter-5025e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5025e",
      storageBucket: "kwitter-5025e.appspot.com",
      messagingSenderId: "743054211499",
      appId: "1:743054211499:web:e00e7d430455743f7bbaee"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("User_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";
}