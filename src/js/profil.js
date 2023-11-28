
function controlUser() {
    var sessionsData = JSON.parse(sessionStorage.getItem("users"));

    if (!sessionsData || !sessionsData.find((index) => index.login === true)) {
        window.location.href = "signup.html";
    }

    var profilBackground = document.querySelector(".author__content");
    var imageUrl = localStorage.getItem("cover_image");

    if (imageUrl) {
        profilBackground.style.backgroundImage = imageUrl;
    }
}

window.addEventListener("load", () => {
    controlUser();
});