async function editFormHandler(event) {
  event.preventDefault();

  const plan_title = document.querySelector('input[name="plan-title"]').value.trim();
  const category_name = document
    .querySelector('input[name="category-name"]')
    .value.trim();
  const class_name = document
    .querySelector('input[name="class-name"]')
    .value.trim();  
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/plans/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      plan_title,
      category_name,
      class_name
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-plan-form")
  .addEventListener("submit", editFormHandler);
