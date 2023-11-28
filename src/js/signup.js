const usersData = [
    {
        id: 1,
        name: "Begüm Özdemir",
        email: "begum@gmail.com",
        password: "begumozdemir",
        login: false,
        img: "img/woman-2.svg",
    },
    {
        id: 2,
        name: "Ogün Özdemir",
        email: "ogun@gmail.com",
        password: "ogunozdemir",
        login: false,
        img: "img/man-8.svg",
    }
];
sessionStorage.setItem("users", JSON.stringify(usersData));

function signupButtonClickFunction() {
    const emptyMessage = document.querySelector(".empty__message");
    const signupButton = document.getElementById("signup__button");

    function emptyMessageFunction(value) {
        var message = document.createElement("p");
        message.textContent = value;
        emptyMessage.appendChild(message);
    };

    signupButton.addEventListener("click", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (password === "" || name === "" || email === "") {
            event.preventDefault();
            document.getElementById("name").style.borderColor = "red";
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "red";
            emptyMessage.classList.add("active");
            emptyMessageFunction("Please do not leave empty fields!")
        }
        else {
            var newUser = { "id": usersData.length + 1, "name": name, "email": email, "password": password, login: false, img: "img/man-7.svg" };
            usersData.push(newUser);
            sessionStorage.setItem("users", JSON.stringify(usersData));

            document.getElementById("name").style.borderColor = "#EBEBEB";
            document.getElementById("email").style.borderColor = "#EBEBEB";
            document.getElementById("password").style.borderColor = "#EBEBEB";
            emptyMessage.classList.remove("active");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    });
};

window.addEventListener("load", () => {
    signupButtonClickFunction();
});

