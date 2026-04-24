function redirectToLogin(event) {
            event.preventDefault(); 

            const form = event.target;

            if (form.checkValidity()) {
                window.location.href = "login.html";
            } else {
                form.reportValidity();
            }
        } 

function redirectToDashBoard(event) {
    event.preventDefault(); 

    const form = event.target;

    if (form.checkValidity()) {
        window.location.href = "../dashboard/dashboard.html";
    } else {
        form.reportValidity();
    }
}