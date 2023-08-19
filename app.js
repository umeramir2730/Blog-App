import{auth, signInWithEmailAndPassword} from './firebaseConfig.js'

const loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener("click", login)

async function login() {
    try {

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem("user",JSON.stringify(userLogin))
        localStorage.setItem("userUid", userLogin.user.uid)
        window.location.replace("/dashboard.html")


    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }


}