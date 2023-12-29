const headerBtn = document.getElementById("btn");
const headerMenu = document.getElementById("dropdown");
const headerArrow = document.getElementById("arrow");

function toggleMenuHeader(event) {
    headerMenu.classList.toggle("Show");
    headerArrow.classList.toggle("arrow-up");
    event.stopPropagation();
}

headerBtn.addEventListener("click", toggleMenuHeader);

document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickInsideMenu = headerMenu.contains(target);
    const isClickInsideBtn = headerBtn.contains(target);
    if (!isClickInsideMenu && !isClickInsideBtn) {
        headerMenu.classList.remove("Show");
        headerArrow.classList.remove("arrow-up");
    }
});
