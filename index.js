const app = new Vue({
    el: "#app",
    data: {
        showSuccess: false,
    },
    methods: {
        handleSubmit() {
            // Simulate form submission success for demonstration purposes
            // In a real-world scenario, you would perform the actual form submission and handle potential errors.
            const emailInput = document.querySelector("#email");
            if (!emailInput.checkValidity()) {
                // Show the email validation error message
                const emailError = document.querySelector("#email-error");
                emailError.classList.remove("hide");
                return;
            }
            this.showSuccess = true;
        },
        handleDismiss() {
            // Redirect to the main page (replace "index.html" with your main page URL)
            window.location.href = "vue.html";
        },
    },
});
