import { auth, onAuthStateChanged, signOut, doc, db, getDoc, collection, addDoc, setDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, query, orderBy, storage, ref, uploadBytesResumable, getDownloadURL } from "./firebaseConfig.js"

const logOutBtn = document.getElementById("logOut")
logOutBtn.addEventListener("click", logOut)
function logOut() {

    signOut(auth).then(() => {
        console.log(auth);
        localStorage.removeItem("user")
        window.location.href = "./index.html"
    }).catch((error) => {
        alert(error.message)
    });
}

document.getElementById("createPost").addEventListener("click", function () {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (title && description) {
        const blogContainer = document.querySelector(".blogContainer");

        const postCard = document.createElement("div");
        postCard.classList.add("blogCard");
        postCard.innerHTML = `
            <div class="card">
                <div class="card-header">${title}</div>
                <div class="card-body">${description}</div>
            </div>
        `;

        blogContainer.appendChild(postCard);

        // Clear input fields
        titleInput.value = "";
        descriptionInput.value = "";
    } else {
        alert("Please fill in both title and description.");
    }
});
