import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
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
        const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');

        loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert('Logged in successfully!');
                    console.log(user);
                    window.location.href = 'index.html';
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            });