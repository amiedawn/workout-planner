async function checkBoxHandler(event) {
  event.preventDefault();

  const { category_name, id, class_name } = event.target.dataset;

  const response = await fetch(`/api/plans`, {
    method: "POST",
    body: JSON.stringify({
      category_name,
      class_name,
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelectorAll(".new-plan-form input[type=checkbox]")
  .forEach((input) => input.addEventListener("change", checkBoxHandler));