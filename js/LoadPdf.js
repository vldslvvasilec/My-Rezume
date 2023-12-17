const PdfModall = document.querySelector(".LoadPdfWindow");
const PdfNextText = document.querySelector(".LoadPdfWindow_lang");
const PdfButtonsMass = document.querySelectorAll("li.PdfElem");
const PdfButtonOk = document.querySelector(".LoadPdfButtonsOK");
const PdfButtonCancel = document.querySelector(".LoadPdfButtonsCancel");
let PdfUserLang;
let PdfFileUrl = `/My-Rezume/assets/pdf/Rezume${PdfUserLang}.pdf`;
console.log(PdfFileUrl);
let PdfFileName = `Rezume${PdfUserLang}.pdf`;
// Закрытие модалки PDF, открытие экрана
const ClosePdfWindow = () => {
    PdfModall.classList.remove("PdfShowModal");
    PdfModall.classList.add("PdfCloseModal");
    Body.classList.remove("translucentBg");
};
PdfButtonsMass.forEach((PdfButton) => {
    // Открытие модалки PDF, затемнение экрана, добавление текста lang
    PdfButton.addEventListener("click", function () {
        const textOfButton = PdfButton.getAttribute("value");
        PdfNextText.innerText = textOfButton;
        PdfUserLang = textOfButton;
        Body.classList.add("translucentBg");
        PdfModall.classList.remove("PdfCloseModal");
        PdfModall.classList.add("PdfShowModal");
    });
});
// Закрытие модалки PDF, открытие экрана при клике Cancel
PdfButtonCancel.addEventListener("click", function () {
    ClosePdfWindow();
});
// Закрытие модалки PDF, открытие экрана при клике OK
PdfButtonOk.addEventListener("click", function () {
    // Добавление ссылки, скачивание файла от Lang, удаление ссылки после скачивания, закрытие окна
    let a = document.createElement("a");
    a.href = `assets/pdf/Rezume${PdfUserLang}.pdf`;
    a.download = `assets/pdf/Rezume${PdfUserLang}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    ClosePdfWindow();
});
