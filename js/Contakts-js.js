let tymerContacts;
const contact_telefonButton = document.querySelector(".contactTelefonButton");
const contact_telegram = document.querySelector(".contact_telegram");
const contact_whatsapp = document.querySelector(".contact_whatsapp");
const contact_email = document.querySelector(".contact_email");
const contact_linkedln = document.querySelector(".contact_linkedln");
const contactsList = document.querySelectorAll(".contactsElem");

contact_telefonButton.addEventListener("mouseenter", () => {
    contact_telegram.style.animation = "contacktItemstelegram 1s forwards 0.9s";
    contact_whatsapp.style.animation = "contacktItemswhatsapp 1s forwards 0.6s";
    contact_email.style.animation = "contacktItemsemail 1s forwards 0.3s";
    contact_linkedln.style.animation = "contacktItemslinkedln 1s forwards";
    clearTimeout(tymerContacts);
});

contactsList.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        contactsList.forEach((el) => {
            el.classList.add(".contactsShow");
            clearTimeout(tymerContacts);
        });
    });
    element.addEventListener("mouseleave", () => {
        tymerContacts = setTimeout(() => {
            contact_telegram.style.animation =
                "contacktItemstelegramClose 1s forwards";
            contact_whatsapp.style.animation =
                "contacktItemswhatsappClose 1s forwards";
            contact_email.style.animation =
                "contacktItemsemailClose 1s forwards";
            contact_linkedln.style.animation =
                "contacktItemslinkedlnClose 1s forwards";
        }, 1500);
    });
});

let tymerPdf;
const contact_pdfButton = document.querySelector(".PdfLoadButton");
const PdfListLangEN = document.querySelector(".PdfListLangEN");
const PdfListLangCZ = document.querySelector(".PdfListLangCZ");
const PdfListLangUA = document.querySelector(".PdfListLangUA");
const PdfListLangRU = document.querySelector(".PdfListLangRU");
const PdfList = document.querySelectorAll(".PdfElem");

contact_pdfButton.addEventListener("mouseenter", () => {
    PdfListLangEN.style.animation = "PdfListLangENAnim 1s forwards 0.9s";
    PdfListLangCZ.style.animation = "PdfListLangCZAnim 1s forwards 0.6s";
    PdfListLangUA.style.animation = "PdfListLangUAAnim 1s forwards 0.3s";
    PdfListLangRU.style.animation = "PdfListLangRUAnim 1s forwards";
    clearTimeout(tymerPdf);
});

PdfList.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        PdfList.forEach((el) => {
            el.classList.add(".PdfShow");
            clearTimeout(tymerPdf);
        });
    });
    element.addEventListener("mouseleave", () => {
        tymerPdf = setTimeout(() => {
            PdfListLangEN.style.animation =
                "PdfListLangENAnimClose 1s forwards";
            PdfListLangCZ.style.animation =
                "PdfListLangCZAnimClose 1s forwards";
            PdfListLangUA.style.animation =
                "PdfListLangUAAnimClose 1s forwards";
            PdfListLangRU.style.animation =
                "PdfListLangRUAnimClose 1s forwards";
        }, 1500);
    });
});
