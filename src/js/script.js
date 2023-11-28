
// todays picks cards function start

const exploreCards = [
    {
        id: 1,
        productsImage: "img/card-2.svg",
        productsImageAlt: "card-2",
        productsName: `"The RenaiXance Rising...`,
        usersImage: "img/man-2.svg",
        usersImageAlt: "man-2",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BUSD",
        categories: ["Art", "Domain Names"],
        buyNow: "On Auction",
        allItems: "Single Items",
        artWorks: "Papercut",
        likeCount: 100,
    },
    {
        id: 2,
        productsImage: "img/card-3.svg",
        productsImageAlt: "card-3",
        productsName: `"Space babe - Night 2/25"`,
        usersImage: "img/man-7.svg",
        usersImageAlt: "man-7",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BSC",
        categories: ["Domain Names"],
        buyNow: "Has Offers",
        allItems: "Single Items",
        artWorks: "Virtuland",
        likeCount: 100,
    },
    {
        id: 3,
        productsImage: "img/card-1.svg",
        productsImageAlt: "card-1",
        productsName: `"CyberPrimal 042 LAN"`,
        usersImage: "img/man-8.svg",
        usersImageAlt: "man-8",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "ETH",
        categories: ["Virtual World", "Art"],
        buyNow: "Has Offers",
        allItems: "Bundles",
        artWorks: "Papercut",
        likeCount: 100,
    },
    {
        id: 4,
        productsImage: "img/card-4.svg",
        productsImageAlt: "card-4",
        productsName: `"Crypto Egg Stamp #5"`,
        usersImage: "img/man-9.svg",
        usersImageAlt: "man-9",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BUSD",
        categories: ["Trading Cards", "Sports"],
        buyNow: "On Auction",
        allItems: "Bundles",
        artWorks: "Papercut",
        likeCount: 100,
    },
    {
        id: 5,
        productsImage: "img/card-6.svg",
        productsImageAlt: "card-6",
        productsName: `"Travel Monkey Club #45"`,
        usersImage: "img/man-10.svg",
        usersImageAlt: "man-10",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BNB",
        categories: ["Sports", "Utility"],
        buyNow: "On Auction",
        allItems: "Bundles",
        artWorks: "Virtuland",
        likeCount: 100,
    },
    {
        id: 6,
        productsImage: "img/card-7.svg",
        productsImageAlt: "card-7",
        productsName: `"Sir. Lion Swag #371"`,
        usersImage: "img/man-4.svg",
        usersImageAlt: "man-4",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BSC",
        categories: ["Utility", "Trading Cards"],
        buyNow: "Has Offers",
        allItems: "Single Items",
        artWorks: "Virtuland",
        likeCount: 100,
    },
    {
        id: 7,
        productsImage: "img/card-8.svg",
        productsImageAlt: "card-8",
        productsName: `"Cyber Doberman #766"`,
        usersImage: "img/man-1.svg",
        usersImageAlt: "man-1",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "ETH",
        categories: ["Trading Cards"],
        buyNow: "Has Offers",
        allItems: "Single Items",
        artWorks: "Virtuland",
        likeCount: 100,
    },
    {
        id: 8,
        productsImage: "img/card-6.svg",
        productsImageAlt: "card-6",
        productsName: `"Living Vase 01 by Lanz...`,
        usersImage: "img/man-11.svg",
        usersImageAlt: "man-11",
        usersName: "SalvadorDali",
        productsEth: "4.89 ETH",
        bitcoinName: "BNB",
        categories: ["Domain Names", "Virtual World"],
        buyNow: "On Auction",
        allItems: "Bundles",
        artWorks: "Papercut",
        likeCount: 100,
    }
];

function ExploreCards(id, productsImage, productsImageAlt, productsName, usersImage, usersImageAlt, usersName, productsEth, bitcoinName, categories, buyNow, allItems, artWorks, likeCount) {
    this.id = id;
    this.productsImage = productsImage;
    this.productsImageAlt = productsImageAlt;
    this.productsName = productsName;
    this.usersImage = usersImage;
    this.usersImageAlt = usersImageAlt;
    this.usersName = usersName;
    this.productsEth = productsEth;
    this.bitcoinName = bitcoinName;
    this.categories = categories;
    this.buyNow = buyNow;
    this.allItems = allItems;
    this.artWorks = artWorks;
    this.likeCount = likeCount;
};

window._exploreCardsDatas = exploreCards.map(index => new ExploreCards(
    index.id,
    index.productsImage,
    index.productsImageAlt,
    index.productsName,
    index.usersImage,
    index.usersImageAlt,
    index.usersName,
    index.productsEth,
    index.bitcoinName,
    index.categories,
    index.buyNow,
    index.allItems,
    index.artWorks,
    index.likeCount
));

window.exploreCardsFunction = function (data, count) {
    let exploreContent = document.getElementById("explore__page__cards");
    if (exploreContent) {
        let exploreCards = document.getElementById("explore__cards");
        exploreContent.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let row = data[i];
            if (row) {
                let exploreCardsClone = exploreCards.cloneNode(true);

                let productsImage = exploreCardsClone.querySelector(".cards__content__image a");
                productsImage.innerHTML = "";
                let img = document.createElement("img");
                img.src = row.productsImage;
                img.alt = row.productsImageAlt;
                productsImage.appendChild(img);

                let productsName = exploreCardsClone.querySelector(".cards__content__comment a");
                productsName.textContent = row.productsName;

                let usersImage = exploreCardsClone.querySelector(".users__image");
                usersImage.innerHTML = "";
                let usersimg = document.createElement("img");
                usersimg.src = row.usersImage;
                usersimg.alt = row.usersImageAlt;

                usersImage.insertBefore(usersimg, usersImage.firstChild);

                let bitcoinName = exploreCardsClone.querySelector(".view__span--bsc");
                bitcoinName.textContent = row.bitcoinName;

                let usersName = exploreCardsClone.querySelector(".cards__content__footer__texts a");
                usersName.textContent = row.usersName;

                let productsCurrentBind = exploreCardsClone.querySelector(".cards__content__footer__texts span");
                productsCurrentBind.textContent = row.productsEth;

                exploreCardsClone.querySelector(".span__like__text").setAttribute("data-click", row.likeCount);

                if (row.id == 2) {
                    let cardsCommentsBadge = exploreCardsClone.querySelector(".cards__content__image");
                    let comingSoonBadge = document.createElement("span");
                    comingSoonBadge.className = "view__span view__span--coming__soon";
                    comingSoonBadge.textContent = "Coming Soon";
                    cardsCommentsBadge.appendChild(comingSoonBadge);
                    let buttons = exploreCardsClone.querySelector(".cards__content__comment.cards__content__comment--footer__button");
                    buttons.style.display = "none";
                }
                exploreContent.appendChild(exploreCardsClone);
            }
        }
    }
};
exploreCardsFunction(_exploreCardsDatas, _exploreCardsDatas.length);

// todays picks cards function end

// Live Auctions cards function start
const cardsItemData = [
    {
        id: 1,
        productImage: "img/card-1.svg",
        productImageAlt: "card-1",
        productName: `"Hamlet Contemplates...`,
        userImage: "img/man-1.svg",
        userName: "SalvadorDali",
        userImageAlt: "man-1",
        productEth: "4.89 ETH",
        bitcoinName: "BSC",
        productCount: "2023-11-27T23:59:59",
        likeCount: 100,
    },
    {
        id: 2,
        productImage: "img/card-2.svg",
        productImageAlt: "card-2",
        productName: `"Triumphant Awakening...`,
        userImage: "img/man-2.svg",
        userName: "Trista Francis",
        userImageAlt: "man-2",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-11-01T23:59:59",
        likeCount: 100,
    },
    {
        id: 3,
        productImage: "img/card-3.svg",
        productImageAlt: "card-3",
        productName: `"Living Vase 01 by Lanza...`,
        userImage: "img/man-3.svg",
        userName: "Freddie Carpenter",
        userImageAlt: "man-3",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-10-31T23:59:59",
        likeCount: 100,
    },
    {
        id: 4,
        productImage: "img/card-4.svg",
        productImageAlt: "card-4",
        productName: `"Flame Dress' by Balmain...`,
        userImage: "img/man-4.svg",
        userName: "Tyler Covington",
        userImageAlt: "man-4",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-11-10T23:59:59",
        likeCount: 100,
    },
    {
        id: 5,
        productImage: "img/card-2.svg",
        productImageAlt: "card-2",
        productName: `"Triumphant Awakening...`,
        userImage: "img/man-2.svg",
        userName: "Freddie Carpenter",
        userImageAlt: "man-2",
        productEth: "4.89 ETH",
        bitcoinName: "BUSD",
        productCount: "2023-10-30T23:59:59",
        likeCount: 100,
    },
    {
        id: 6,
        productImage: "img/card-1.svg",
        productImageAlt: "card-1",
        productName: `"Hamlet Contemplates...`,
        userImage: "img/man-1.svg",
        userName: "Trista Francis",
        userImageAlt: "man-1",
        productEth: "4.89 ETH",
        bitcoinName: "ETH",
        productCount: "2023-12-27T23:59:59",
        likeCount: 100,
    },
    {
        id: 7,
        productImage: "img/card-3.svg",
        productImageAlt: "card-3",
        productName: `"Living Vase 01 by Lanza...`,
        userImage: "img/man-3.svg",
        userName: "SalvadorDali",
        userImageAlt: "man-3",
        productEth: "4.89 ETH",
        bitcoinName: "BNB",
        productCount: "2023-10-30T23:59:59",
        likeCount: 100,
    }
];

window._liveAuctionsCardsData = [];

function LiveAuctionCards(id, productImage, productImageAlt, productName, userImage, userName, userImageAlt, productEth, bitcoinName, productCount, likeCount) {
    this.id = id;
    this.productImage = productImage;
    this.productImageAlt = productImageAlt;
    this.productName = productName;
    this.userImage = userImage;
    this.userName = userName;
    this.userImageAlt = userImageAlt;
    this.productEth = productEth;
    this.bitcoinName = bitcoinName;
    this.productCount = productCount;
    this.likeCount = likeCount;
};

window._liveAuctionsCardsData = cardsItemData.map(value => new LiveAuctionCards(
    value.id,
    value.productImage,
    value.productImageAlt,
    value.productName,
    value.userImage,
    value.userName,
    value.userImageAlt,
    value.productEth,
    value.bitcoinName,
    value.productCount,
    value.likeCount
));

window.cardsRenderFunction = function (data, count) {
    let itemsDetailsPageCards = document.getElementById("items__details__page__cards");
    if (itemsDetailsPageCards) {
        let itemsDetailsPageCardsItem = document.getElementById("items__details__page__cards__item");
        itemsDetailsPageCards.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let cardsItems = itemsDetailsPageCardsItem.cloneNode(true);
            let row = data[i];

            let userName = cardsItems.querySelector(".cards__content__footer__texts a");
            userName.textContent = row.userName;

            let userImages = cardsItems.querySelector(".cards__container__footer__users");
            let img = document.createElement("img");
            img.src = row.userImage;
            img.alt = row.userImageAlt;
            userImages.insertBefore(img, userImages.firstChild);

            let productNames = cardsItems.querySelector(".cards__content__comment a");
            productNames.textContent = row.productName;

            cardsItems.querySelector(".span__like__text").setAttribute("data-click", row.likeCount);

            let productEthItem = cardsItems.querySelector(".cards__content__footer__texts span");
            productEthItem.textContent = row.productEth;

            let bitcoinName = cardsItems.querySelector(".view__span--bsc");
            bitcoinName.textContent = row.bitcoinName;

            let productImages = cardsItems.querySelector(".cards__content__image a");
            let images = document.createElement("img");
            images.src = row.productImage;
            images.alt = row.productImageAlt;
            productImages.appendChild(images);

            cardsItems.querySelector("#countdown__text").setAttribute("data-time", row.productCount);

            itemsDetailsPageCards.appendChild(cardsItems);
            cardsLikeCountFunction(cardsItems);
        };
    }
};
cardsRenderFunction(_liveAuctionsCardsData, _liveAuctionsCardsData.length);
// Live Auctions cards function end

function lightDarkModeFunction() {
    let lightButton = document.querySelectorAll(".theme__button.light__mode");
    let svgSiyaz = document.querySelector(".svg__siyaz");
    let darkButton = document.querySelectorAll(".theme__button.dark__mode");
    let html = document.querySelector("html");
    let blankButton = document.querySelectorAll(".blank__background__button.blank__background__button--black");
    let createItemLightButton = document.querySelectorAll(".blank__background__button.blank__background__button--create__item");
    let headerContainer = document.querySelector(".header__container");
    let walletButton = document.querySelector(".blank__background__button.blank__background__button--wallet");
    let homePageNavbar = document.querySelector(".navbar.navbar--home__page");
    let marketPlaceNavbar = document.querySelector(".navbar.navbar__market--place");
    let gradientNavbarButton = document.querySelector(".blank__background__button.button--wallet");
    let indexPageHeader = document.querySelector(".content__heading span");
    let authorContent = document.querySelector(".author__content");
    let indexPageHeaderButton = document.querySelectorAll(".blank__background__button.blank__background__button--index__page__header__button");

    function lightFunction() {
        if (blankButton) {
            blankButton.forEach((button) => {
                button.classList.add("light");
            });
        }

        if (svgSiyaz) {
            svgSiyaz.classList.add("light");
        }

        if (indexPageHeaderButton) {
            indexPageHeaderButton.forEach((button) => {
                button.classList.add("light");
            });
        }

        if (indexPageHeader) {
            indexPageHeader.classList.add("light");
        }

        if (headerContainer) {
            headerContainer.classList.add("light");
        }

        if (walletButton) {
            walletButton.classList.add("light");
        }
        if (homePageNavbar) {
            homePageNavbar.classList.add("light");
        }
        if (marketPlaceNavbar) {
            marketPlaceNavbar.classList.add("light");
        }
        if (gradientNavbarButton) {
            gradientNavbarButton.classList.add("light");
        }

        if (authorContent) {
            authorContent.classList.add("light");
        }

        if (createItemLightButton) {
            createItemLightButton.forEach((index => {
                index.classList.add("light");
            }));
        }
    };

    function darkFunction() {
        if (blankButton) {
            blankButton.forEach((button) => {
                button.classList.remove("light");
            });
        }

        if (svgSiyaz) {
            svgSiyaz.classList.remove("light");
        }

        if (indexPageHeaderButton) {
            indexPageHeaderButton.forEach((button) => {
                button.classList.remove("light");
            });
        }

        if (indexPageHeader) {
            indexPageHeader.classList.remove("light");
        }

        if (headerContainer) {
            headerContainer.classList.remove("light");
        }
        if (walletButton) {
            walletButton.classList.remove("light");
        }

        if (homePageNavbar) {
            homePageNavbar.classList.remove("light");
        }
        if (marketPlaceNavbar) {
            marketPlaceNavbar.classList.remove("light");
        }
        if (gradientNavbarButton) {
            gradientNavbarButton.classList.remove("light");
        }

        if (createItemLightButton) {
            createItemLightButton.forEach((index => {
                index.classList.remove("light");
            }));
        }

        if (authorContent) {
            authorContent.classList.remove("light");
        }
    }

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        html.setAttribute("data-theme", "dark");
        darkFunction();
    }
    else {
        html.setAttribute("data-theme", "light");
        lightFunction();
    }

    lightButton.forEach((button) => {
        button.addEventListener("click", () => {
            button.style.color = "#9835FB";
            localStorage.setItem("theme", "light");
            html.setAttribute("data-theme", "light");
            darkButton.forEach((index) => {
                index.style.color = "";
            });
            lightFunction();
        });
    });

    darkButton.forEach((button) => {
        button.addEventListener("click", () => {
            button.style.color = "#9835FB";
            localStorage.setItem("theme", "dark");
            html.setAttribute("data-theme", "dark");
            lightButton.forEach((index) => {
                index.style.color = "";
            });
            darkFunction();
        })
    })
};

function dropdownMenuOutsideClose() {
    document.addEventListener("click", (e) => {
        const clicked = e.target;
        const closestButton = clicked.closest('[data-button]');
        const closestMenu = clicked.closest(`[data-menu]`);
        const dropdownMenus = document.querySelectorAll('[data-menu]');

        if (closestButton) {
            return e;
        }
        else if (closestMenu) {
            dropdownMenus.forEach(() => {
                e.stopPropagation();
            });
        }
        else {
            if (document.querySelector(`[data-menu]`)) {
                dropdownMenus.forEach((menu) => {
                    menu.classList.remove("active");
                });
            }
        }
    });
};

function navbarMenuSearchFunction() {
    let navbarSearchButton = document.querySelector(".navbar__buttons__search");
    let navbarInputContainer = document.querySelector(".input__search__container");
    if (navbarSearchButton) {
        navbarSearchButton.addEventListener("click", () => {
            navbarInputContainer.classList.toggle("active");
        });
    }
};

function sliderFunction() {
    if (typeof Swiper != "undefined") {
        let index__page__swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".fa-arrow-right",
                prevEl: ".fa-arrow-left",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1300: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                }
            },
        });

        let home__page__swiper = new Swiper(".mySwiper--home__page", {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".fa-arrow-right",
                prevEl: ".fa-arrow-left",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 3,
                }
            },
        });

        let seller = new Swiper(".mySeller", {
            slidesPerView: 9,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".pagination__next",
                prevEl: ".pagination__prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 3,
                },
                600: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                1000: {
                    slidesPerView: 6,
                },
                1024: {
                    slidesPerView: 7,
                },
                1100: {
                    slidesPerView: 8,
                },
                1300: {
                    slidesPerView: 9,
                },
            },
        });

        let collections__swiper = new Swiper(".myCollection", {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".index__light__page__next",
                prevEl: ".index__light__page__prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 1,
                },
                670: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 3,
                }
            },
        });

        let home__page__collections__swiper = new Swiper(".myCollection--home__page", {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".fa-arrow-right",
                prevEl: ".fa-arrow-left",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1,
                },
                716: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                }
            },
        });

        let swiper = new Swiper(".home__page__swiper", {
            slidesPerView: 5,
            freeMode: true,
            spaceBetween: 20,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 5.5,
                }
            },
        });
    }
};

function paginationFunction() {
    const nextButton = document.querySelector(".fa-arrow-right");
    const prevButton = document.querySelector(".fa-arrow-left");
    const paginationDot = document.querySelectorAll(".pagination__dot");
    let currentPagination = 1;

    function paginationDotFunction() {
        paginationDot.forEach((dot) => {
            dot.classList.remove("active");
        });

        const activeDot = document.querySelector(`[data-page="${currentPagination}"]`);
        activeDot.classList.add("active");
    };

    if (nextButton || prevButton) {
        nextButton.addEventListener("click", () => {
            currentPagination++;
            paginationDotFunction();
        });

        prevButton.addEventListener("click", () => {
            currentPagination--;
            paginationDotFunction();
        });
    }
};

function responsiveNavbarMenu() {
    const navbarMenuItems = document.querySelectorAll(".responsive__navbar__menu li");

    navbarMenuItems.forEach((item) => {
        item.addEventListener("click", () => {

            const control = item.querySelector(".navbar__dropdown.navbar__dropdown--responsive");
            const icon = item.querySelector(".fa-angle-down");

            if (control) {
                if (!control.classList.contains("active")) {
                    control.classList.add("active");
                    icon.style.transform = "rotate(180deg)";
                    icon.style.transition = "all 0.4s ease-in-out";
                } else {
                    control.classList.remove("active");
                    icon.style.transform = "rotate(0deg)";
                    icon.style.transition = "all 0.4s ease-in-out";
                }
            }
        });
    });
};

function responsiveMenuButtonClickFunction() {
    const responsiveMenuButton = document.querySelector(".navbar__links__responsive__menu__button");
    const responsiveMenu = document.querySelector(".responsive__menu__button__content");

    responsiveMenuButton.addEventListener("click", () => {
        responsiveMenu.classList.toggle("active");
    });
};

function countDownFunction() {
    setInterval(function () {
        function functionFormatDay(value) {
            return value < 10 ? `0${value}` : value;
        }

        const timeTextElements = document.querySelectorAll("#countdown__text");

        timeTextElements.forEach((timeText) => {

            const time = timeText.dataset.time;
            const timeToDate = new Date(time).getTime();

            let now = new Date().getTime();
            let remainingDate = new Date(timeToDate - now);
            let remainingDay = remainingDate.getUTCDate() - 1;
            let remainingMounth = new Date(timeToDate).getUTCMonth() + 1;
            let remainingHour = remainingDate.getUTCHours();
            let remainingMinute = remainingDate.getUTCMinutes();
            let remainingSecond = remainingDate.getUTCSeconds();

            let month = (remainingMounth - (new Date().getUTCMonth() + 1)) * 30;
            let result = month + remainingDay;

            if (remainingDate < 0) {
                timeText.textContent = `00 : 00 : 00 : 00`;
            }
            else if (new Date().getUTCMonth() + 1 < remainingMounth) {
                timeText.textContent = (functionFormatDay(result) + " : " + functionFormatDay(remainingHour) + " : " + functionFormatDay(remainingMinute) + " : " + remainingSecond);
            }
            else {
                timeText.textContent = (functionFormatDay(result) + " : " + functionFormatDay(remainingHour) + " : " + functionFormatDay(remainingMinute) + " : " + remainingSecond);
            }
        });
    }, 1000);
};

function cardsLikeCountFunction() {
    const cardsLikeButton = document.querySelectorAll(".span__like__text");

    cardsLikeButton.forEach((button) => {
        let cardsLikeButtonValue = parseInt(button.dataset.click);
        const icons = button.previousElementSibling;

        button.textContent = cardsLikeButtonValue;
        let spanClickControl = false;

        button.addEventListener("click", () => {
            if (spanClickControl) {
                cardsLikeButtonValue -= 1;
                icons.classList.remove("fa-solid");
                icons.classList.add("fa-regular");
                icons.style.color = "";
            }
            else {
                cardsLikeButtonValue += 1;
                icons.classList.add("fa-solid");
                icons.classList.remove("fa-regular");
                icons.style.color = "red";
            }
            button.textContent = cardsLikeButtonValue;
            spanClickControl = !spanClickControl;
        });
    });
};

window.addEventListener("DOMContentLoaded", () => {
    sliderFunction();
    lightDarkModeFunction();
    navbarMenuSearchFunction();
    paginationFunction();
    responsiveNavbarMenu();
    responsiveMenuButtonClickFunction();
    countDownFunction();
    cardsLikeCountFunction();
    dropdownMenuOutsideClose();
});

window.addEventListener("pageshow", () => {
    const preloade = document.querySelector(".preloade");
    const pageContent = document.querySelector(".page__content");

    setTimeout(() => {
        pageContent.classList.add("active");
        preloade.classList.remove("active");
    }, 800)
});