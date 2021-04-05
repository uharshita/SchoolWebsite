
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDMLaJzutBnr5niCzj_xevnNI95Z_xSgcw",
      authDomain: "classtest-89aef.firebaseapp.com",
      databaseURL: "https://classtest-89aef-default-rtdb.firebaseio.com",
      projectId: "classtest-89aef",
      storageBucket: "classtest-89aef.appspot.com",
      messagingSenderId: "286260269590",
      appId: "1:286260269590:web:0f6539fb77705247449b37"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
