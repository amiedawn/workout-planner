async function strengthFormHandler(event) {
  event.preventDefault();

  const category_name = document.querySelector("#strength-training"); //this is probably wrong
  const class_name = document.querySelector('input[name="class-name"]').value;

  const response = await fetch(`/api/plans`, {
    method: "POST",
    body: JSON.stringify({
      category_name,
      class_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // response.render('dashboard');
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-plan-form")
  .addEventListener("onChange", strengthFormHandler);
// .addEventListener("submit", strengthFormHandler);