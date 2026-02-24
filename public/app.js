const form = document.getElementById('intake-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Stop the page from refreshing

    // Gather all form data at once using FormData
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send the data to the backend
    const response = await fetch('/api/register-patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    // Read the server's reply and show it to the user
    const result = await response.json();
    alert(result.message);
});