
function tabsMenuFunction() {
    let tabsMenuClick = document.querySelectorAll(".tabs__menu__click");
    let gridListContent = document.querySelectorAll(".grid__list__content");

    tabsMenuClick.forEach((menu, index) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            tabsMenuClick.forEach((value) => {
                value.classList.remove("active");
            });
            menu.classList.toggle("active")
            gridListContent.forEach((card) => {
                card.classList.remove("active");
            });
            gridListContent[index].classList.toggle("active");
        });
    });
};

function headerTabsMenuFunction() {
    let headerTabs = document.querySelectorAll(".tabs__menu__links.tabs__menu__links--market__place h3");
    headerTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            headerTabs.forEach((index) => {
                index.classList.remove("active");
            });
            tab.classList.add("active");
        });
    });
};

function filterCheckboxFunction(filterCheckbox, marketPlaceCards, marketPlaceListCards, filteredCards, marketData) {
    filterCheckbox.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {

            const selectedCheckbox = Array.from(filterCheckbox).filter((value) => value.checked).map((index) => index.value);

            if (selectedCheckbox.length > 0) {
                filteredCards = filteredCards.filter((row) => {
                    return selectedCheckbox.some((category) =>
                        row.categories.some((index) => index.toLowerCase() === category) ||
                        row.fileType === category ||
                        row.bitcoinName.toLowerCase() === category
                    );
                });
            }
            else {
                filteredCards = marketData;
            }

            if (filteredCards.length > 0) {
                marketPlaceCards(filteredCards, filteredCards.length);
                marketPlaceListCards(filteredCards, filteredCards.length);
            }
        });
    });
};

function resetButtonFunction(filterCheckbox, marketPlaceCards, marketPlaceListCards, marketData) {
    let resetButton = document.querySelector(".market__place__filter__reset__button");
    resetButton.addEventListener("click", () => {
        filterCheckbox.forEach((checkbox) => {
            checkbox.checked = false;
            marketPlaceCards(marketData, marketData.length);
            marketPlaceListCards(marketData, marketData.length);
        });
    });
};

function ASCIISortFunction(filteredCards, marketPlaceCards, marketPlaceListCards, marketData) {
    let highText = "";
    let highUl = document.getElementById("market__place__page__high");
    let highLi = document.querySelectorAll(".explore__categories__dropdown ul li");
    highLi.forEach((li) => {
        li.addEventListener("click", (event) => {
            highLi.forEach((value) => {
                value.classList.remove("active");
            });
            li.classList.add("active");

            const menuClosest = li.closest(".explore__categories__dropdown");
            const menuClosestTextContent = menuClosest.querySelector(".categories__name");
            const menuName = event.target.textContent;
            menuClosestTextContent.textContent = menuName;
        });
    });

    highUl.addEventListener("click", (event) => {
        highText = event.target.textContent;

        if (highText === "Low To High") {
            marketPlaceListCards(marketData, marketData.length);
            marketPlaceCards(marketData, marketData.length);
        }
        else if (highText === "Asc Sort") {
            filteredCards.sort((a, b) => {
                return a.productName.localeCompare(b.productName);
            });
            marketPlaceCards(filteredCards, filteredCards.length);
            marketPlaceListCards(filteredCards, filteredCards.length);
        }
        else if (highText === "Desc Sort") {
            filteredCards.sort((a, b) => {
                return b.productName.localeCompare(a.productName);
            });
            marketPlaceCards(filteredCards, filteredCards.length);
            marketPlaceListCards(filteredCards, filteredCards.length);
        }
    });
};

const marketPlaceCardsData = [
    {
        id: 1,
        userName: "Tyler Covington",
        userImage: "img/man-1.svg",
        userImageAlt: "man-1",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-1.svg",
        productImageAlt: "card-1",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-11-25T23:59:59",
        likeCount: 100,
        categories: ["art", "music"],
        fileType: "image",
    },
    {
        id: 2,
        userName: "Freddie Carpeter",
        userImage: "img/man-2.svg",
        userImageAlt: "man-2",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-2.svg",
        productImageAlt: "card-2",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-10-30T23:59:59",
        likeCount: 100,
        categories: ["music"],
        fileType: "video",
    },
    {
        id: 3,
        userName: "Tyler Covington",
        userImage: "img/man-3.svg",
        userImageAlt: "man-3",
        productName: `"Loving Vase 01 by Lanza...`,
        productImage: "img/card-3.svg",
        productImageAlt: "card-3",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-10-27T23:59:59",
        likeCount: 100,
        categories: ["domain_names", "virtual_worlds"],
        fileType: "audio",
    },
    {
        id: 4,
        userName: "Tyler Covington",
        userImage: "img/man-4.svg",
        userImageAlt: "man-4",
        productName: `"Triumphant awakening...`,
        productImage: "img/card-4.svg",
        productImageAlt: "card-4",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-11-29T23:59:59",
        likeCount: 100,
        categories: ["virtual_worlds"],
        fileType: "audio",
    },
    {
        id: 5,
        userName: "Tyler Covington",
        userImage: "img/man-7.svg",
        userImageAlt: "man-7",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-6.svg",
        productImageAlt: "card-6",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-11-10T23:59:59",
        likeCount: 100,
        categories: ["trading_cards", "sports"],
        fileType: "video",
    },
    {
        id: 6,
        userName: "Tyler Covington",
        userImage: "img/man-8.svg",
        userImageAlt: "man-8",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-9.svg",
        productImageAlt: "card-9",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-10-30T23:59:59",
        likeCount: 100,
        categories: ["trading_cards"],
        fileType: "image",
    },
    {
        id: 7,
        userName: "Tyler Covington",
        userImage: "img/man-10.svg",
        userImageAlt: "man-10",
        productName: `"Hamlet Comtemplates...`,
        productImage: "img/card-8.svg",
        productImageAlt: "card-8",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-10-31T23:59:59",
        likeCount: 100,
        categories: ["collectibles", "utility"],
        fileType: "image",
    },
    {
        id: 8,
        userName: "Tyler Covington",
        userImage: "img/man-2.svg",
        userImageAlt: "man-2",
        productName: `"Loving Vase 01 by Lanza...`,
        productImage: "img/card-10.svg",
        productImageAlt: "card-10",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-12-05T23:59:59",
        likeCount: 100,
        categories: ["sports", "collectibles"],
        fileType: "video",
    },
    {
        id: 9,
        userName: "Tyler Covington",
        userImage: "img/woman-1.svg",
        userImageAlt: "woman-1",
        productName: `"Triumphant awakening...`,
        productImage: "img/card-2.svg",
        productImageAlt: "card-2",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-11-15T23:59:59",
        likeCount: 100,
        categories: ["utility"],
        fileType: "video",
    },
    {
        id: 10,
        userName: "Tyler Covington",
        userImage: "img/woman-2.svg",
        userImageAlt: "woman-2",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-3.svg",
        productImageAlt: "card-3",
        productEth: "4.89 ETH",
        bitcoinName: "BSC",
        productCount: "2023-10-28T23:59:59",
        likeCount: 100,
        categories: ["sports", "art"],
        fileType: "audio",
    },
    {
        id: 11,
        userName: "Tyler Covington",
        userImage: "img/man-5.svg",
        userImageAlt: "man-5",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-7.svg",
        productImageAlt: "card-7",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-10-31T23:59:59",
        likeCount: 100,
        categories: ["trading_cards", "music"],
        fileType: "audio",
    },
    {
        id: 12,
        userName: "Tyler Covington",
        userImage: "img/man-6.svg",
        userImageAlt: "man-6",
        productName: `"Hamlet Comtemplates...`,
        productImage: "img/card-11.svg",
        productImageAlt: "card-11",
        productEth: "4.89 ETH",
        bitcoinName: "BSC",
        productCount: "2023-11-28T23:59:59",
        likeCount: 100,
        categories: ["virtual_worlds", "domain_names"],
        fileType: "audio",
    },
    {
        id: 13,
        userName: "Tyler Covington",
        userImage: "img/man-9.svg",
        userImageAlt: "man-9",
        productName: `"Loving Vase 01 by Lanza...`,
        productImage: "img/card-8.svg",
        productImageAlt: "card-8",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-11-01T23:59:59",
        likeCount: 100,
        categories: ["domain_names", "virtual_worlds"],
        fileType: "video",
    },
    {
        id: 14,
        userName: "Tyler Covington",
        userImage: "img/woman-1.svg",
        userImageAlt: "woman-1",
        productName: `"Triumphant awakening...`,
        productImage: "img/card-1.svg",
        productImageAlt: "card-1",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-10-31T23:59:59",
        likeCount: 100,
        categories: ["art"],
        fileType: "image",
    },
    {
        id: 15,
        userName: "Tyler Covington",
        userImage: "img/woman-2.svg",
        userImageAlt: "woman-2",
        productName: `"Flame Dress' by Balmain...`,
        productImage: "img/card-2.svg",
        productImageAlt: "card-2",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-10-30T23:59:59",
        likeCount: 100,
        categories: ["music", "trading_cards"],
        fileType: "image",
    }
];

function ConstructorMarketPlace(id, userName, userImage, userImageAlt, productName, productImage, productImageAlt, productEth, bitcoinName, productCount, likeCount, categories, fileType) {
    this.id = id;
    this.userName = userName;
    this.userImage = userImage;
    this.userImageAlt = userImageAlt;
    this.productName = productName;
    this.productImage = productImage;
    this.productImageAlt = productImageAlt;
    this.productEth = productEth;
    this.bitcoinName = bitcoinName;
    this.productCount = productCount;
    this.likeCount = likeCount;
    this.categories = categories;
    this.fileType = fileType;
};

const marketData = marketPlaceCardsData.map(index => new ConstructorMarketPlace(
    index.id,
    index.userName,
    index.userImage,
    index.userImageAlt,
    index.productName,
    index.productImage,
    index.productImageAlt,
    index.productEth,
    index.bitcoinName,
    index.productCount,
    index.likeCount,
    index.categories,
    index.fileType
));

function marketPlaceCards(data, count) {
    let marketPlacePageGrid = document.getElementById("market__place__page__grid");
    let marketPlacePageProductsCards = document.getElementById("market__place__products__card");
    marketPlacePageGrid.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let row = data[i];
        if (row) {
            let cards = marketPlacePageProductsCards.cloneNode(true);

            let usersImage = cards.querySelector("#users__image");
            usersImage.innerHTML = "";
            let img = document.createElement("img");
            img.src = row.userImage;
            img.alt = row.userImageAlt;
            usersImage.insertBefore(img, usersImage.firstChild);

            let usersName = cards.querySelector("#users__name");
            usersName.textContent = row.userName;

            cards.querySelector(".span__like__text").setAttribute("data-click", row.likeCount);

            let productsImage = cards.querySelector("#market__place__products__image a");
            productsImage.innerHTML = "";
            let productImagesUrl = document.createElement("img");
            productImagesUrl.src = row.productImage;
            productImagesUrl.alt = row.productImageAlt;
            productImagesUrl.classList.add("market__place");
            productsImage.appendChild(productImagesUrl);

            let bitcoinName = cards.querySelector(".view__span--bsc");
            bitcoinName.textContent = row.bitcoinName;

            let productName = cards.querySelector("#market__place__product__name a");
            productName.textContent = row.productName;

            cards.querySelector("#countdown__text").setAttribute("data-time", row.productCount);

            let productEthsSpan = cards.querySelector("#product__eth span");
            productEthsSpan.textContent = row.productEth;

            marketPlacePageGrid.appendChild(cards);

            cardsLikeCountFunction(cards);
        }
    };
};

function marketPlaceListCards(data, count) {
    let marketPlaceListCardsBody = document.querySelector(".grid__list__direction__container");
    let listCard = document.querySelector(".view__span.view__span--grey.cards__container__footer__users.details__span.market__place");
    marketPlaceListCardsBody.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let row = data[i];
        let list = listCard.cloneNode(true);
        if (row) {
            let productsListImage = list.querySelector(".market__place__list__products__image");
            productsListImage.innerHTML = "";
            let image = document.createElement("img");
            image.src = row.productImage;
            image.alt = row.productImageAlt;
            productsListImage.appendChild(image);

            let productsListName = list.querySelector("#market__place__list__products__name a");

            let productsListUsersImage = list.querySelector("#list__cards__user__image");
            productsListUsersImage.innerHTML = "";

            let productsListUsersName = list.querySelector(".cards__container__footer__users.grid__list__users a");

            let usersImage = document.createElement("img");
            usersImage.src = row.userImage;
            usersImage.alt = row.userImageAlt;
            productsListUsersImage.appendChild(usersImage);

            productsListUsersName.textContent = row.userName;

            list.querySelector(".span__like__text").setAttribute("data-click", row.likeCount);

            let bitcoinName = list.querySelector(".view__span--bsc");
            bitcoinName.textContent = row.bitcoinName;

            list.querySelector("#countdown__text").setAttribute("data-time", row.productCount);;

            let currentBind = list.querySelector("#market__place__list__current__bind a");
            currentBind.textContent = row.productEth;

            productsListName.textContent = row.productName;

            marketPlaceListCardsBody.appendChild(list);
        }
    }
};

function filterDropDownMenu() {
    const filterContents = document.querySelectorAll(".filter__content");

    filterContents.forEach((content) => {
        const arrowButtons = content.querySelectorAll(".filter__arrow");
        const contents = content.querySelectorAll(".sidebar__header__content.active");
        const hrs = content.querySelectorAll(".sidebar__market__place--hr");

        arrowButtons.forEach((button) => {
            button.addEventListener("click", () => {

                contents.forEach((value) => {
                    value.classList.toggle("active");
                    const control = value.classList.contains("active");
                    if (!control) {
                        button.style.rotate = "180deg";
                    }
                    else {
                        button.style.rotate = "0deg";
                    }
                });

                hrs.forEach((hr) => {
                    hr.classList.toggle("active");
                });
            });
        });
    });
};

window.addEventListener("DOMContentLoaded", () => {

    let filteredCards = marketData.slice();
    let filterCheckbox = document.querySelectorAll(".filter__checkbox");

    filterCheckboxFunction(filterCheckbox, marketPlaceCards, marketPlaceListCards, filteredCards, marketData);
    tabsMenuFunction();
    headerTabsMenuFunction();
    filterDropDownMenu();
    resetButtonFunction(filterCheckbox, marketPlaceCards, marketPlaceListCards, marketData);
    ASCIISortFunction(filteredCards, marketPlaceCards, marketPlaceListCards, marketData);
    marketPlaceCards(marketData, marketData.length);
    marketPlaceListCards(marketData, marketData.length);
});