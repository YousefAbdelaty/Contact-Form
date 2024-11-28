
const email = document.getElementById("email");
const uname = document.getElementById("name");
const message = document.getElementById("message");
const loadingOverlay = document.getElementById("loadingOverlay");



function formValidation() {
    let isFormValid = true;

    function validateName(name) {
        return name.length >= 8 && name.length <= 30;
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function validateMessage(message) {
        return message.length > 0;
    }

    if (!validateEmail(email.value)) {
        isFormValid = false;
    }

    if (!validateName(uname.value)) {
        isFormValid = false;
    }

    if (!validateMessage(message.value)) {
        isFormValid = false;
    }

    return isFormValid;
}

function showLoading() {
    loadingOverlay.classList.add("show");
}

function hideLoading() {
    loadingOverlay.classList.remove("show");
}


function submissionCheck(event) {
    event.preventDefault();
    showLoading();
    const isValid = formValidation();

    setTimeout(() => {
        hideLoading(); 

        if (isValid) {

          successMessage("Form submitted successfully")

            email.value = '';
            uname.value = '';
            message.value = '';
        /*
        
        fetch('', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            return response.json(); 
        })
        .then(data => {

            setTimeout(() => { 
                Swal.fire({
                    title: "Success",
                    text: "Form submitted successfully.",
                    icon: "success"
                });


                email.value = '';
                uname.value = '';
                message.value = '';
            }, 1000); 
        })
            
        .catch(error => {
            console.error('Error:', error); 
            Swal.fire({
                title: "Error",
                text: "An error occurred while submitting the form. Please try again later.",
                icon: "error"
            });
        });
        */
    } else {
           errorMessage("Please enter valid data")
        }
    }, 3000); 
}



const form = document.getElementById("contactForm");
form.addEventListener("submit", submissionCheck);

function errorMessage(message) {
    Swal.fire({
        title: '',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

function successMessage(message) {
    Swal.fire({
        title: "",
        text: message,
        icon: "success",
        confirmButtonText: 'OK'
    });
}
