const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${name.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "isurangajayasinghe99@gmail.com",
        Password : "5F8C4F333F447F73DA2C5D634EF8824A7FB8",
        To : 'isurangajayasinghe99@gmail.com',
        From : "isurangajayasinghe99@gmail.com",
        Subject : name.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message === "OK"){
                Swal.fire({
                    title: "Success!!",
                    text: "Message sent successfully!....",
                    icon: "success"
                });
                resetForm(); // Reset the form fields
            }
        }
    );
}

function resetForm() {
    form.reset(); // Reset the form fields
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    sendEmail();
});
