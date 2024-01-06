// Определение переменных
const Body = document.querySelector("body");
const buttonEmail = document.querySelector(".contact_email");
const SendEmail = document.querySelector(".SendEmail");
const EmailForm = document.querySelector(".SendEmailForm");
const UserName = document.querySelector(".name");
const UserEmail = document.querySelector(".email");
const UserText = document.querySelector(".message");
const ButtonsSubmit = document.querySelector(".emailButtonsSubmit");
const ButtonsCencel = document.querySelector(".emailButtonsCencelBut");

// Очистка окна ввода при submit:
const clinerWindow = () => {
    document.querySelector("#Name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
};
// Закрытие окна по нажатию на submit:
const closeWindow = () => {
    document.body.classList.remove("translucentBg");
    SendEmail.classList.remove("SendEmailShow");
    SendEmail.classList.add("SendEmailClose");
};

EmailForm.addEventListener("submit", function (event) {
    if (!UserName.value || !UserEmail.value || !UserText.value) {
    } else {
        clinerWindow();
        closeWindow();
    }
    event.preventDefault();
});

// Очистка окна ввода при cancel:
ButtonsCencel.addEventListener("click", function () {
    clinerWindow();
    closeWindow();
});

// Открытие окна ввода, закрытие экрана:
buttonEmail.addEventListener("click", function () {
    Body.classList.add("translucentBg");
    SendEmail.classList.remove("SendEmailClose");
    SendEmail.classList.add("SendEmailShow");
});
