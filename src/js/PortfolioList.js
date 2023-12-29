const ListPortfolio = [
    {
        titlePort: "Wood Parallax",
        linkPort: "https://vldslvvasilec.github.io/WoodParallax/",
        imagePort: "./src/assets/images/PortfolioImg/WoodParallax.jpg",
    },
    {
        titlePort: "Cosmo",
        linkPort: "https://vldslvvasilec.github.io/Project-Cosmo/",
        imagePort: "./src/assets/images/PortfolioImg/Dribbble-min.png",
    },
    {
        titlePort: "Cosmo",
        linkPort: "https://vldslvvasilec.github.io/Project-Cosmo/",
        imagePort: "./src/assets/images/PortfolioImg/Dribbble-min.png",
    },
    {
        titlePort: "Wood Parallax",
        linkPort: "https://vldslvvasilec.github.io/WoodParallax/",
        imagePort: "./src/assets/images/PortfolioImg/WoodParallax.jpg",
    },
    {
        titlePort: "Cosmo",
        linkPort: "https://vldslvvasilec.github.io/Project-Cosmo/",
        imagePort: "./src/assets/images/PortfolioImg/Dribbble-min.png",
    },
];
const initialDelay = 0.3;
let delay = initialDelay;
const PortfolioInfo = (namePortElem, linkPortElem, imgPortElem) => {
    // Создаем элемент a
    const portWrap = document.createElement("a");
    portWrap.classList.add("portElem");
    portWrap.classList.add("_animItems");
    // Даем ссылку linkPortElem
    portWrap.setAttribute("href", linkPortElem);
    // Создаем элемент h3
    const h3Element = document.createElement("h3");
    h3Element.classList.add("portElemTitle");
    h3Element.textContent = namePortElem;
    // Создаем элемент img
    const imgElement = document.createElement("img");
    imgElement.classList.add("portElemImg");
    imgElement.setAttribute("src", imgPortElem);

    // Добавляем транзишин
    portWrap.style.transitionDelay = `${delay}s`;

    // Получаем элемент wrap
    const portfolioWrap = document.querySelector(".PortfolioElementsWrap");
    // Добавляем элементы
    portWrap.appendChild(h3Element);
    portWrap.appendChild(imgElement);
    portfolioWrap.appendChild(portWrap);
};
for (let PortElem = 0; PortElem < ListPortfolio.length; PortElem++) {
    PortfolioInfo(
        ListPortfolio[PortElem].titlePort,
        ListPortfolio[PortElem].linkPort,
        ListPortfolio[PortElem].imagePort
    );
    delay += 0.3;
}
delay = initialDelay;
