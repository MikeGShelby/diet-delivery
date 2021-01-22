async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="meal-title"]').value;
    const description = document.querySelector('input[name="meal-description"]').value;

    const response = await fetch(`/api/meals`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);