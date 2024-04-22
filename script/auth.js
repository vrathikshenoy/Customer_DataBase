import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
    import { getAuth , onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  const firebaseConfig = {       

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
