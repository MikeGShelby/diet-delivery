async function  CheckoutHandler(event) {
    event.preventDefault();

    
        const response = await fetch(`../../controllers/api/selected-meal-routes.js`, {
          method: 'GET',
          body: JSON.stringify({
            user_id,
            meal_id,
            
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    
}



  document.querySelector('#').addEventListener('submit', CheckoutHandler);