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

for (i = 1; i < 6; i++) {
    let workBtn = document.getElementById(`JobsButton${i}`);
    let workMenu = document.getElementById(`JobsWindow${i}`);
    let workArrow = document.getElementById(`JobsArrow${i}`);

    const Newtoggle = function () {
        workMenu.classList.toggle("Show");
        workArrow.classList.toggle("Arrow");
    };
    workBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        Newtoggle();
    });
    document.documentElement.addEventListener("click", function () {
        if (workMenu.classList.contains("Show")) {
            Newtoggle();
        }
    });
}
