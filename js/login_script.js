// Replace with your Airtable API key and base ID
const apiKey = 'keyrKtxdEwiOsQckT';
const baseId = 'appBSSxQOT1uQoNsT';

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Query Airtable for the user with the provided email and password
  fetch(`https://api.airtable.com/v0/${baseId}/Table_1?filterByFormula=AND(Email='${email}',Password='${password}')`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Login failed. Please check your email and password.');
    }
    return response.json();
  })
  .then(data => {
    if (data.records.length === 1) {
      alert('Login successful!');
      const userName = data.records[0].fields.Name; // This is the data you want to pass to the home page
      sessionStorage.setItem('userName', userName); // Store the username in session storage
      window.location.href = "home1.html"; 
      const userRecord = data.records[0];
      // alert(`Welcome back, ${userName}!`);
      console.log(`${userRecord.fields.Phone}`);
      // window.location.href="home1.html";
      // Redirect the user to a new page or perform other actions upon successful login
    } else {
      throw new Error('Login failed. Please check your email and password.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message);
  });
});
