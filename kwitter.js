const firebaseConfig = {
    apiKey: "AIzaSyDH7nrEKtUYUKDv9HwwJA2HQlR13Hdh7mE",
    authDomain: "kwiter-f0c45.firebaseapp.com",
    databaseURL: "https://kwiter-f0c45-default-rtdb.firebaseio.com",
    projectId: "kwiter-f0c45",
    storageBucket: "kwiter-f0c45.appspot.com",
    messagingSenderId: "620477301626",
    appId: "1:620477301626:web:ab6d78d13bb6829c630cc3",
    measurementId: "G-V2M0WE2LHS"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function login(){
    localStorage.setItem("user",document.getElementById("user").value);
    window.location="kwitter_room.html";
    
    
}