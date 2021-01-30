async function newFormHandler(event) {
  event.preventDefault();

  const plan_title = document.querySelector('input[name="plan-title"]').value;
  const category_name = document.querySelector('select[name="category-name"]')
    .value;
  const class_name = document.querySelector('select[name="class-name"]').value;

  const response = await fetch(`/api/plans`, {  
    method: "POST",
    body: JSON.stringify({
      plan_title,
      category_name,
      class_name,
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

// for category drop-down box to prevent event listener error
const el = document.querySelector(".new-plan-form");
if (el) {
  el.addEventListener("submit", newFormHandler, false);
}

