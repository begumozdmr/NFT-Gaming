
const exploreCardsData = window._exploreCardsDatas;
const exploreCardsFunction = window.exploreCardsFunction;

function dropdownMenuItemsFunction() {
    const dropdownMenuItems = document.querySelectorAll(".explore__categories__dropdown ul li");
    dropdownMenuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            dropdownMenuItems.forEach((value) => {
                value.classList.remove("active");
            });
            item.classList.add("active");

            const dropdownMenuClosest = item.closest(".explore__categories__dropdown");
            const menuItemsTextContent = dropdownMenuClosest.querySelector(".categories__name");
            const categoryName = event.target.textContent;
            menuItemsTextContent.firstChild.textContent = categoryName;
        });
    });
};

window.addEventListener("DOMContentLoaded", () => {

    const cardsCategory = document.getElementById("cards__category");
    const buyCard = document.getElementById("buy__cards");
    const cardsAllItem = document.getElementById("cards__all__item");
    const allArtworks = document.getElementById("all__artworks");
    const sortBy = document.getElementById("sort__by");

    let categoryName = "";
    let buyCards = "";
    let allItem = "";
    let allArtwork = "";
    let sortBys = "";
    let tempFilteredData = exploreCardsData.slice();

    dropdownMenuItemsFunction();

    function filterCards() {

        tempFilteredData = tempFilteredData.filter((row) => {
            return (
                (categoryName === "" || row.categories.some((index) => index === categoryName)) &&
                (buyCards === "" || row.buyNow === buyCards) &&
                (allItem === "" || row.allItems === allItem) &&
                (allArtwork === "" || row.artWorks === allArtwork)
            );
        });

        if (sortBys === "Asc Sort") {
            tempFilteredData.sort((a, b) => {
                return a.productsName.localeCompare(b.productsName);
            });
        }
        else if (sortBys === "Desc Sort") {
            tempFilteredData.sort((a, b) => {
                return b.productsName.localeCompare(a.productsName);
            });
        }

        if (tempFilteredData.length > 0) {
            exploreCardsFunction(tempFilteredData, tempFilteredData.length);
        }
        else if (categoryName === "All Categories" ||
            buyCards === "Buy Now" ||
            allItem === "All Items" ||
            allArtwork === "All Artworks" ||
            sortBys === "Sort by") {
            tempFilteredData = exploreCardsData.slice();
            exploreCardsFunction(tempFilteredData, tempFilteredData.length);
        }
    };

    cardsCategory.addEventListener("click", (event) => {
        categoryName = event.target.textContent;
        filterCards();
    });

    buyCard.addEventListener("click", (event) => {
        buyCards = event.target.textContent;
        filterCards();
    });

    cardsAllItem.addEventListener("click", (event) => {
        allItem = event.target.textContent
        filterCards();
    });

    allArtworks.addEventListener("click", (event) => {
        allArtwork = event.target.textContent;
        filterCards();
    });

    sortBy.addEventListener("click", (event) => {
        sortBys = event.target.textContent;
        filterCards();
    });
});