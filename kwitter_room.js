
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB19ozsW5DUzK0iwzTVBGA4pUa9w0aWeM8",
      authDomain: "kwitter-165ad.firebaseapp.com",
      projectId: "kwitter-165ad",
      storageBucket: "kwitter-165ad.appspot.com",
      messagingSenderId: "934036175752",
      appId: "1:934036175752:web:af6e6829310a07783f983d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
