// This file contains the main JavaScript functionality for the landing page for ghost controllers.
// It handles user interactions, such as button clicks and form submissions,
// and may include functions for dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');
    const form = document.getElementById('contact-form');

    // Whenever a button's clicked
    button.addEventListener('click', () => {
        alert('Button clicked! More information will be provided soon.');
    });

    // Handles the contact form submission (won't work didn't add a follow-up)
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                alert(`Thank you, ${name}! We will contact you at ${email}.`);
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});