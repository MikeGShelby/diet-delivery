async function profileFormHandler(event) {
    event.preventDefault();

    const displayName = document.querySelector('#display-name').value.trim();
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();

    const address = document.querySelector('#address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipCode = document.querySelector('#zip-code').value.trim();

    if (displayName && firstName && lastName && address && city && state && zipCode) {

      const response = await fetch('/api/users/profile', {
        method: 'post',
        body: JSON.stringify({
          display_name: displayName,
          first_name: firstName,
          last_name: lastName,
          street_address: address,
          city: city,
          state: state,
          zip_code: zipCode
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      // check the response status
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log('User profile created');
      } else {
        alert(response.statusText);
      }
    }
}


document.querySelector('.user-profile-form').addEventListener('submit', profileFormHandler);
