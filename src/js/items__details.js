
function tabsMenuLinksFunction() {
    var tabsMenuLinksItem = document.querySelectorAll(".tabs__menu__links__item");
    var tabsMenuLinksItemContent = document.querySelectorAll(".tabs__menu__content");

    tabsMenuLinksItem.forEach((item, index) => {
        item.addEventListener("click", () => {
            tabsMenuLinksItem.forEach((value) => {
                value.classList.remove("active");
            });
            item.classList.add("active");
            tabsMenuLinksItemContent.forEach((content) => {
                content.classList.remove("active");
            });
            tabsMenuLinksItemContent[index].classList.add("active");
        });
    });
};

window.addEventListener("DOMContentLoaded", () => {

    tabsMenuLinksFunction();

});