async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('log out successful')
    } else {
      console.log('unable to logout');
      alert(response.statusText);
    }
  }

  document.querySelector('#logout').addEventListener('click', logout);