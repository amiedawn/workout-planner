async function newFormHandler(event) {
    event.preventDefault();
  
    const plan_title = document.querySelector('input[name="plan-title"]').value;
    const category_name = document.querySelector('input[name="category-name"]').value;
    const class_name = document.querySelector('input[name="class-name"]').value;
  
    const response = await fetch(`/api/plans`, {
      method: 'POST',
      body: JSON.stringify({
        plan_title,
        category_name,
        class_name,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    if (response.ok) {
     // response.render('dashboard');
     document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-plan-form').addEventListener('submit', newFormHandler);  