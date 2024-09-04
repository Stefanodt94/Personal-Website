emailjs.init("4IrXspjId7rH6WdMX");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_ekystsm", "template_ql4ggti", this).then(
      function (response) {
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Error! Unable to send the email.");
      }
    );
  });
