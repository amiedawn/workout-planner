async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
  //   const response = await fetch('/api/users/login', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       username,
  //       password
  //     }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(function(data){
  //     console.log(data);
  //     console.log(data.username);
  //     console.log(data.password);

  //   });

  //   if (response.ok) {
  //     document.location.replace('/homepage/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  Promise.all([
    fetch("/api/user/login", {
      "method": "POST",
         body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
    })
  ])
    .then(function (responses) {
      console.log(response)
      // return Promise.all(responses.map(function (response) {
      //   // return response.json();
      // }));
    })
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/homepage/');
    } else {
      alert(response.statusText);
    }
   
     
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
