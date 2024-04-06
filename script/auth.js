import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
    import { getAuth , onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  const firebaseConfig = {       
    apiKey: "AIzaSyCwVbWu8UaaGlsV7aKlj7-gdHlu9MAxHMM",
    authDomain: "test-16285.firebaseapp.com",
    databaseURL: "https://test-16285-default-rtdb.firebaseio.com",
    projectId: "test-16285",
    storageBucket: "test-16285.appspot.com",
    messagingSenderId: "51591303284",
    appId: "1:51591303284:web:68ec610b89e018ee810121",
    measurementId: "G-VQBKJZ4RG2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Check if the user is authenticated
onAuthStateChanged(auth ,function(user) {
    if (!user) {
        // User is signed in
        window.location.href = 'login.html';
        
    } else {
      console.log('User is signed in');
        // No user is signed in, redirect to login page
        // Replace 'login.html' with the URL of your login page
    }
});
