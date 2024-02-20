// Replace with your Airtable API key and base ID
const apiKey = 'keyrKtxdEwiOsQckT';
const baseId = 'appBSSxQOT1uQoNsT';
// patrsRsGwsUkCSM4Y.f2749999b8f206e367f81ce59ecf47fafd2ecfaa650019ae3674c1772461f826
//patrsRsGwsUkCSM4Y
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const gender = document.getElementById('gender').value;
  const institution = document.getElementById('institution').value;
  const number = document.getElementById('number').value;

  const formData = {
    fields: {
      Name: name,
      Email: email,
      Password: password,
      Gender: gender,
      Institution: institution,
      Phone: number
    }
  };

  fetch(`https://api.airtable.com/v0/${baseId}/Table_1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('Signup successful!');
      window.location.href="login.html";
    } else {
      alert('Signup failed. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Signup failed. Please try again later.');
  });
});
