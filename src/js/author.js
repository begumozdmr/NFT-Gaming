function activeTabsMenuFunction() {
    var activeTabsHeader = document.querySelectorAll(".active__tabs__menu h6");
    var activeTabsMenu = document.querySelectorAll(".active__tabs__menu");
    var activeTabsContent = document.querySelectorAll(".content.content--seller.author__page");

    activeTabsMenu.forEach((menu, index) => {
        menu.addEventListener("click", () => {

            activeTabsMenu.forEach((value) => {
                value.classList.remove("after");
            });
            menu.classList.add("after");

            activeTabsHeader.forEach((index) => {
                index.classList.remove("active");
            });
            activeTabsHeader[index].classList.add("active");

            activeTabsContent.forEach((content) => {
                content.classList.remove("active");
            });
            activeTabsContent[index].classList.add("active");
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    activeTabsMenuFunction();
});