console.log("Header-js");
const dropdawnBtn = document.getElementById("btn");
const dropdawnMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdawnMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdawnBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropdawnMenu.classList.contains("show")) {
        toggleDropdown();
    }
});
