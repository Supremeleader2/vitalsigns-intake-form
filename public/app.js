const form = document.getElementById('form-elements');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    // Gather data at once 
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send data
    const response = await fetch('/api/register-patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    // Read reply and show
    const result = await response.json();
    alert(result.message);
});