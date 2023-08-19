import { app, auth, createUserWithEmailAndPassword, db, doc, setDoc, } from "./firebaseConfig.js"

const signupBtn = document.querySelector("#signupBtn")
signupBtn.addEventListener("click", signUp)

async function signUp() {
    try {
        const firstName = document.getElementById("firstName").value
        const LastName = document.getElementById("LastName").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const repeatPassword = document.getElementById("repeatPassword").value

        const userAuth = await createUserWithEmailAndPassword(auth, email, password, repeatPassword)

        const uid = userAuth.user.uid

        const userObj = {
            firstName,
            LastName,
            email,
            accountActivate: true,
            uid
        }

        const userRef = doc(db,"users", uid);
        const userDB = await setDoc(userRef, userObj) 
        alert("Signup Successful")
        window.location.replace("/")

    

    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }

}