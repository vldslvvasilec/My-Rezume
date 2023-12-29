let allMenus = []; // массив для хранения всех меню

const removeShowClass = function (exceptElement) {
    allMenus.forEach((menu) => {
        if (menu !== exceptElement && menu.classList.contains("Show")) {
            menu.classList.remove("Show");

            // Удалить класс arrow у кнопок при закрытии меню
            const correspondingButton = allMenus.indexOf(menu) + 1;
            const button = document.getElementById(
                `JobsButton${correspondingButton}`
            );
            if (button.classList.contains("arrow")) {
                button.classList.remove("arrow");
            }
        }
    });
};

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
        workBtn.classList.toggle("arrow");
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
