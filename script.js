document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const medicalHistory = document.getElementById('medical-history').value;

    // Displaying a confirmation message
    document.getElementById('message').innerText = `Thank you, ${name}. Your registration is complete!`;

    // Clear the form
    document.getElementById('registrationForm').reset();

    // You can send this data to a backend here (optional)
});
