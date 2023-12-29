document
    .querySelector(".SendEmailForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#Name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        // Здесь можно использовать полученные значения (name, email, message) для отправки через EmailJS или для других целей
        // Например, отправка данных через EmailJS
        const formData = {
            from_name: name,
            from_email: email,
            message: message,
        };
        emailjs.init("hpawoRdGpKEsGXPrT");
        const serviceID = "service_297hmym";
        const templateID = "template_i4oqoc4";
        emailjs.send(serviceID, templateID, formData);
    });
