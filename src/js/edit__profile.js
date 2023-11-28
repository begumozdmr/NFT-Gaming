
function updateFunction(sessionsData) {
    const updateButton = document.getElementById("update__profile__button");

    updateButton.addEventListener("click", () => {

        let fullName = document.getElementById("display__name").value;
        let email = document.getElementById("email").value;

        let control = sessionsData.find((index) => index.login === true);

        if (control) {

            if (email === control.email) {
                control.name = fullName;
                sessionStorage.setItem("users", JSON.stringify(sessionsData));
            }
            else if (fullName === control.name) {
                control.email = email;
                sessionStorage.setItem("users", JSON.stringify(sessionsData));
            }
            else if (fullName !== control.name || email !== control.email) {
                control.name = fullName;
                control.email = email;
                sessionStorage.setItem("users", JSON.stringify(sessionsData));
            }
        }
    });
};

function coverImageClick() {
    const themeClick = document.querySelectorAll(".upload__box");

    themeClick.forEach((index) => {
        index.addEventListener("click", (e) => {
            var elementStyle = window.getComputedStyle(e.target);
            var backgroundImage = elementStyle.getPropertyValue('background-image');
            localStorage.setItem("cover_image", backgroundImage);

            themeClick.forEach((box) => {
                box.style.border = "1px solid var(--cardBg3)";
            });

            var clickedBox = e.target;
            clickedBox.style.border = "double 3px transparent";
            clickedBox.style.borderImage = "var(--gradient) 3";

        });
    });
};

function pageControlFunction(sessionsData) {

    if (!sessionsData || !sessionsData.find((index) => index.login === true)) {
        window.location.href = "signup.html";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    let sessionsData = JSON.parse(sessionStorage.getItem("users"));

    pageControlFunction(sessionsData);
    updateFunction(sessionsData);
    coverImageClick();
});