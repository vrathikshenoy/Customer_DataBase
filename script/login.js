import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
        const firebaseConfig = {       
          
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
