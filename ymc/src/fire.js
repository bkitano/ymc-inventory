import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYEieU0JuFCa7p3hu3TSa6lhd56OdRs3Q",
    authDomain: "bkitano-ymc-app.firebaseapp.com",
    databaseURL: "https://bkitano-ymc-app.firebaseio.com",
    projectId: "bkitano-ymc-app",
    storageBucket: "bkitano-ymc-app.appspot.com",
    messagingSenderId: "342310548600"
  };
  
var fire = firebase.initializeApp(config);
 
export default fire;