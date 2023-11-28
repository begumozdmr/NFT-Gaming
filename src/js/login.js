
function loginUsersImage(usersStorage, usersFullName) {
    const usersName = document.getElementById("users__name");
    const usersImg = document.querySelector(".users__profile__header");
    const editProfileImage = document.querySelector(".edit__profile__cards");
    const homePageUserImg = document.querySelector(".theme__button.users__button.users__image");
    const controlUsers = usersStorage ? usersStorage.find((data) => data.login === true || data.email === usersFullName) : "";
    const img = document.createElement("img");

    if (homePageUserImg) {

        const notificationContainer = document.querySelector(".dark__light__button.noti__container");
        const usersName = document.getElementById("users__name");

        if (controlUsers) {
            img.src = controlUsers.img;
            img.alt = controlUsers.img;
            homePageUserImg.appendChild(img);
            notificationContainer.classList.add("active");
            usersName.textContent = `Welcome ${controlUsers.name}`;
        }
    }

    if (usersName && usersImg) {
        if (controlUsers) {
            usersName.innerHTML = controlUsers.name;
            img.src = controlUsers.img;
            img.alt = controlUsers.img;
            usersImg.insertBefore(img, usersImg.firstChild);
        }
    }

    if (editProfileImage) {
        const editProfileNameInput = document.getElementById("display__name");
        const editProfileEmailInput = document.getElementById("email");

        if (controlUsers) {
            editProfileNameInput.value = controlUsers.name;
            editProfileEmailInput.value = controlUsers.email;
            img.src = controlUsers.img;
            img.alt = controlUsers.img;
            editProfileImage.insertBefore(img, editProfileImage.firstChild);
        }
    }
};

window.addEventListener("load", () => {

    function errorMessage(message) {
        emptyMessage.classList.add("active");
        emptyMessage.innerHTML = message;
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("password").value = "";
        document.getElementById("email").value = "";
    };

    const loginButton = document.getElementById("login__button");
    const usersStorage = JSON.parse(sessionStorage.getItem("users"));
    const emptyMessage = document.querySelector(".empty__message");
    let usersFullName = "";

    document.addEventListener("DOMContentLoaded", () => {
        var emailsInput = document.getElementById("email");
        emailsInput.addEventListener("input", (e) => {
            usersFullName = e.target.value;
        });
    });

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            var password = document.getElementById("password").value;
            var email = document.getElementById("email").value;

            if (password === "" || email === "") {
                errorMessage("Please fill in both Password and Email.");
            } else {
                const foundUser = usersStorage.find((data) => data.password === password && data.email === email);

                if (!foundUser) {
                    errorMessage("Sorry, Person Not Found...");
                } else {
                    foundUser.login = true;
                    sessionStorage.setItem('users', JSON.stringify(usersStorage));
                    document.getElementById("password").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").style.borderColor = "#EBEBEB";
                    document.getElementById("email").style.borderColor = "#EBEBEB";
                    emptyMessage.classList.remove("active");
                    window.location.href = "profil.html";
                }
            }
        });
    }

    loginUsersImage(usersStorage, usersFullName);
});


