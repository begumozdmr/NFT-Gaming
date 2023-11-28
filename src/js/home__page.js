
function usersNotification() {
    const userImageMenu = document.querySelector(".theme__button.users__button.users__image");
    const usersMenu = document.querySelector(".users__menu");
    userImageMenu.addEventListener("click", () => {
        usersMenu.classList.toggle("active");
    });

    const signOutButton = document.getElementById("sign__out__button");
    signOutButton.addEventListener("click", () => {
        const usersData = JSON.parse(sessionStorage.getItem("users"));
        const usersName = document.getElementById("users__name").textContent;
        const control = usersData.find((row) => row.name === usersName);

        if (control) {
            control.login = false;
            sessionStorage.setItem("users", JSON.stringify(usersData));
        }
    });
};

window.addEventListener("DOMContentLoaded", () => {
    usersNotification();
});