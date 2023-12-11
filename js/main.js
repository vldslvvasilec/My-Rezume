const dropdawnBtn = document.getElementById("btn");
const dropdawnMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
let allMenus = []; // массив для хранения всех меню

// функция для переключения основного дропдауна
const toggleDropdown = function () {
    removeShowClass(dropdawnMenu); // yбираем класс Show у других элементов
    dropdawnMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

// функция для удаления класса Show у всех элементов, кроме текущего
const removeShowClass = function (exceptElement) {
    allMenus.forEach((menu) => {
        if (menu !== exceptElement && menu.classList.contains("Show")) {
            menu.classList.remove("Show");
        }
    });
    if (
        dropdawnMenu !== exceptElement &&
        dropdawnMenu.classList.contains("show")
    ) {
        dropdawnMenu.classList.remove("show");
        toggleArrow.classList.remove("rotate"); // убираем класс rotate у стрелки, если он есть
    }
};

dropdawnBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

// обработчик для закрытия дропдаунов при клике вне их
document.documentElement.addEventListener("click", function () {
    removeShowClass();
});

for (let i = 1; i <= 5; i++) {
    let workBtn = document.getElementById(`JobsButton${i}`);
    let workMenu = document.getElementById(`JobsWindow${i}`);
    allMenus.push(workMenu); // Добавляем элементы меню в массив

    // функция для переключения дополнительных дропдаунов
    const toggleWorkMenu = function () {
        removeShowClass(workMenu); // убираем класс Show у других элементов
        workMenu.classList.toggle("Show");
    };

    // обработчик клика для дополнительного дропдауна
    workBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleWorkMenu();
    });

    // обработчик для закрытия дополнительного дропдауна при клике вне его
    document.documentElement.addEventListener("click", function () {
        if (workMenu.classList.contains("Show")) {
            toggleWorkMenu();
        }
    });
}
