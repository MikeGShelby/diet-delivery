/* This code still needs to be refactored for select-meal-btn instead of upvote-btn*/
async function selectMealClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/meals/select-meal', {
        method: 'PUT',
        body: JSON.stringify({
          meal_id: id

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.reload();
        console.log('meal selection saved!');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('.select-meal-btn').addEventListener('click', selectMealClickHandler);